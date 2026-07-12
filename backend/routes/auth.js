/* ============================================================
   會員認證路由 — /api/auth
   NOTE: 生產環境請改用 bcrypt + JWT，目前使用簡易 token 設計
   架構保留未來串接 MySQL 的彈性（user schema 完全對應）
   ============================================================ */
import { Router }   from 'express';
import { Low }      from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join, dirname } from 'path';
import { fileURLToPath }  from 'url';
import { randomUUID }     from 'crypto';
import { mkdirSync }      from 'fs';
import db from '../database.js';  // 共用 shop DB（查詢訂單用）

const __dir = dirname(fileURLToPath(import.meta.url));
mkdirSync(join(__dir, '../data'), { recursive: true });

/* 獨立 users DB（方便未來遷移到 MySQL，schema 分離） */
const udb = new Low(new JSONFile(join(__dir, '../data/users.json')), { users: [] });
await udb.read();
udb.data.users ??= [];
await udb.write();

const router = Router();

/* ── helpers ──────────────────────────────────────────────── */
/* NOTE: production → replace with: import bcrypt from 'bcrypt' */
const hashPw   = pw  => Buffer.from(`${pw}:buluo-salt-2024`).toString('base64');
const checkPw  = (pw, h) => hashPw(pw) === h;

function authUser(req) {
  const t = (req.headers.authorization || '').replace('Bearer ', '').trim();
  return t ? (udb.data.users.find(u => u.token === t) ?? null) : null;
}

function safe(u) {
  /* strip sensitive fields before sending to client */
  const { password, token, ...rest } = u;
  return rest;
}

/* ── 公開路由 ─────────────────────────────────────────────── */

/* POST /api/auth/register */
router.post('/register', async (req, res) => {
  await udb.read();
  const { name, email, password } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !password)
    return res.json({ success: false, message: '請填寫所有必填欄位' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.json({ success: false, message: '電子信箱格式不正確' });
  if (password.length < 6)
    return res.json({ success: false, message: '密碼至少需要 6 個字元' });
  if (udb.data.users.find(u => u.email === email.toLowerCase().trim()))
    return res.json({ success: false, message: '此電子信箱已被使用' });

  const now = new Date().toISOString();
  const tok = randomUUID();
  const user = {
    id: randomUUID(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: hashPw(password),
    phone: '', address: '',
    wishlist: [],
    token: tok,
    created_at: now,
    last_login: now,
  };
  udb.data.users.push(user);
  await udb.write();
  res.json({ success: true, data: { user: safe(user), token: tok } });
});

/* POST /api/auth/login */
router.post('/login', async (req, res) => {
  await udb.read();
  const { email, password } = req.body ?? {};
  const u = udb.data.users.find(x => x.email === email?.toLowerCase().trim());
  if (!u || !checkPw(password, u.password))
    return res.json({ success: false, message: '電子信箱或密碼錯誤' });

  u.token      = randomUUID();
  u.last_login = new Date().toISOString();
  await udb.write();
  res.json({ success: true, data: { user: safe(u), token: u.token } });
});

/* ── 需要登入的路由 ──────────────────────────────────────── */

/* GET /api/auth/me */
router.get('/me', async (req, res) => {
  await udb.read();
  const u = authUser(req);
  if (!u) return res.json({ success: false, message: '未登入' });
  res.json({ success: true, data: safe(u) });
});

/* PUT /api/auth/profile */
router.put('/profile', async (req, res) => {
  await udb.read();
  const u = authUser(req);
  if (!u) return res.json({ success: false, message: '未登入' });
  const { name, phone, address } = req.body ?? {};
  if (name?.trim()) u.name = name.trim();
  if (phone    !== undefined) u.phone   = phone;
  if (address  !== undefined) u.address = address;
  await udb.write();
  res.json({ success: true, data: safe(u) });
});

/* PUT /api/auth/password */
router.put('/password', async (req, res) => {
  await udb.read();
  const u = authUser(req);
  if (!u) return res.json({ success: false, message: '未登入' });
  const { oldPassword, newPassword } = req.body ?? {};
  if (!checkPw(oldPassword, u.password))
    return res.json({ success: false, message: '目前密碼錯誤' });
  if (!newPassword || newPassword.length < 6)
    return res.json({ success: false, message: '新密碼至少需要 6 個字元' });
  u.password = hashPw(newPassword);
  await udb.write();
  res.json({ success: true, message: '密碼已成功更新' });
});

/* POST /api/auth/logout */
router.post('/logout', async (req, res) => {
  await udb.read();
  const u = authUser(req);
  if (u) { u.token = null; await udb.write(); }
  res.json({ success: true });
});

/* POST /api/auth/wishlist/toggle */
router.post('/wishlist/toggle', async (req, res) => {
  await udb.read();
  const u = authUser(req);
  if (!u) return res.json({ success: false, message: '請先登入' });
  const pid = Number(req.body?.productId);
  u.wishlist ??= [];
  const idx = u.wishlist.indexOf(pid);
  idx > -1 ? u.wishlist.splice(idx, 1) : u.wishlist.push(pid);
  await udb.write();
  res.json({ success: true, data: { wishlist: u.wishlist, added: idx === -1 } });
});

/* GET /api/auth/orders — 我的訂單（優先 user_id，fallback email） */
router.get('/orders', async (req, res) => {
  await udb.read();
  const u = authUser(req);
  if (!u) return res.json({ success: false, message: '未登入' });
  const myOrders = (db.data.orders || [])
    .filter(o => (o.user_id && o.user_id === u.id) || (!o.user_id && o.customer_email === u.email))
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  res.json({ success: true, data: myOrders });
});

/* ── Admin ──────────────────────────────────────────────── */

/* GET /api/auth/admin/members */
router.get('/admin/members', async (req, res) => {
  const t = (req.headers.authorization || '').replace('Bearer ', '');
  if (t !== 'buluo-admin-secret-2024')
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  await udb.read();
  res.json({ success: true, data: udb.data.users.map(safe) });
});

export default router;
