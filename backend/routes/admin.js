import { Router } from 'express';
import db, { nextId } from '../database.js';

const router = Router();

const ADMIN_USER   = 'admin';
const ADMIN_PASS   = 'buluo2024';
const ADMIN_SECRET = 'buluo-admin-secret-2024';

function requireAdmin(req, res, next) {
  const token = (req.headers['authorization'] || '').replace('Bearer ', '');
  if (token !== ADMIN_SECRET)
    return res.status(401).json({ success: false, message: '未授權，請先登入' });
  next();
}

/* POST /api/admin/login */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS)
    return res.json({ success: true, token: ADMIN_SECRET });
  res.status(401).json({ success: false, message: '帳號或密碼錯誤' });
});

/* ── 訂單 ───────────────────────────────────────────────── */

router.get('/orders', requireAdmin, (req, res) => {
  const { status, page = 1, limit = 20 } = req.query;
  let list = [...db.data.orders].sort((a,b) => b.created_at.localeCompare(a.created_at));
  if (status) list = list.filter(o => o.order_status === status);

  const total = list.length;
  const p     = parseInt(page), l = parseInt(limit);
  const data  = list.slice((p-1)*l, p*l);
  res.json({ success: true, data, pagination: { page: p, limit: l, total } });
});

router.get('/orders/:id', requireAdmin, (req, res) => {
  const o = db.data.orders.find(o => o.id === parseInt(req.params.id));
  if (!o) return res.status(404).json({ success: false, message: '找不到此訂單' });
  res.json({ success: true, data: o });
});

router.patch('/orders/:id', requireAdmin, async (req, res) => {
  const o = db.data.orders.find(o => o.id === parseInt(req.params.id));
  if (!o) return res.status(404).json({ success: false, message: '找不到此訂單' });

  const { order_status, payment_status } = req.body;
  if (order_status)   o.order_status   = order_status;
  if (payment_status) o.payment_status = payment_status;
  o.updated_at = new Date().toISOString();
  await db.write();
  res.json({ success: true, data: o });
});

/* ── 商品 ───────────────────────────────────────────────── */

router.get('/products', requireAdmin, (req, res) => {
  res.json({ success: true, data: db.data.products });
});

router.post('/products', requireAdmin, async (req, res) => {
  const { name, category, price } = req.body;
  if (!name || !category || price == null)
    return res.status(400).json({ success: false, message: '請填寫商品名稱、分類與價格' });

  const now = new Date().toISOString();
  const p = {
    id: nextId('products'),
    name, category,
    price:       parseInt(price),
    description: req.body.description || '',
    images:      req.body.images      || [],
    specs:       req.body.specs       || {},
    in_stock:    Boolean(req.body.in_stock),
    stock_count: parseInt(req.body.stock_count) || 0,
    featured:    Boolean(req.body.featured),
    tag:         req.body.tag      || null,
    material:    req.body.material || null,
    created_at:  now, updated_at: now,
  };
  db.data.products.push(p);
  await db.write();
  res.json({ success: true, data: p });
});

router.put('/products/:id', requireAdmin, async (req, res) => {
  const idx = db.data.products.findIndex(p => p.id === parseInt(req.params.id));
  if (idx < 0) return res.status(404).json({ success: false, message: '找不到此商品' });

  const p = db.data.products[idx];
  Object.assign(p, {
    name:        req.body.name,
    category:    req.body.category,
    price:       parseInt(req.body.price),
    description: req.body.description || '',
    images:      req.body.images      || [],
    specs:       req.body.specs       || {},
    in_stock:    Boolean(req.body.in_stock),
    stock_count: parseInt(req.body.stock_count) || 0,
    featured:    Boolean(req.body.featured),
    tag:         req.body.tag      || null,
    material:    req.body.material || null,
    updated_at:  new Date().toISOString(),
  });
  await db.write();
  res.json({ success: true, data: p });
});

router.delete('/products/:id', requireAdmin, async (req, res) => {
  const idx = db.data.products.findIndex(p => p.id === parseInt(req.params.id));
  if (idx < 0) return res.status(404).json({ success: false, message: '找不到此商品' });
  db.data.products.splice(idx, 1);
  await db.write();
  res.json({ success: true, message: '商品已刪除' });
});

/* ── 客戶 ───────────────────────────────────────────────── */

router.get('/customers', requireAdmin, (req, res) => {
  const map = {};
  db.data.orders.forEach(o => {
    const e = o.customer_email;
    if (!map[e]) map[e] = { email: e, name: o.customer_name, phone: o.customer_phone, order_count: 0, total_spent: 0, last_order_at: o.created_at };
    map[e].order_count++;
    map[e].total_spent += o.total;
    if (o.created_at > map[e].last_order_at) map[e].last_order_at = o.created_at;
  });
  const customers = Object.values(map).sort((a,b) => b.last_order_at.localeCompare(a.last_order_at));
  res.json({ success: true, data: customers });
});

export default router;
