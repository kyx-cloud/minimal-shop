/* ============================================================
   布落之處 — 前台會員工具
   設計保留未來升級 JWT + MySQL 的彈性
   ============================================================ */
'use strict';

const Auth = (function () {
  const _local = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:';
  const API  = _local ? 'http://localhost:3001' : 'https://buluo-shop-api.onrender.com';
  const TK   = 'buluo_token';
  const UK   = 'buluo_user';

  /* ── 本地 storage ─────────────────────────────────────── */
  function getToken()    { return localStorage.getItem(TK); }
  function isLoggedIn()  { return !!getToken(); }
  function getUser()     { try { return JSON.parse(localStorage.getItem(UK)); } catch { return null; } }
  function _save(u, tk)  { localStorage.setItem(TK, tk); localStorage.setItem(UK, JSON.stringify(u)); }
  function _clear()      { localStorage.removeItem(TK); localStorage.removeItem(UK); }

  /* ── HTTP ─────────────────────────────────────────────── */
  function _hdrs() {
    const t = getToken();
    return { 'Content-Type': 'application/json', ...(t ? { Authorization: `Bearer ${t}` } : {}) };
  }
  async function apiFetch(method, path, body) {
    const r = await fetch(API + path, {
      method,
      headers: _hdrs(),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    return r.json();
  }

  /* ── Auth actions ─────────────────────────────────────── */
  async function login(email, password) {
    const d = await apiFetch('POST', '/api/auth/login', { email, password });
    if (d.success) _save(d.data.user, d.data.token);
    return d;
  }

  async function register(name, email, password) {
    const d = await apiFetch('POST', '/api/auth/register', { name, email, password });
    if (d.success) _save(d.data.user, d.data.token);
    return d;
  }

  async function logout() {
    await apiFetch('POST', '/api/auth/logout', {}).catch(() => {});
    _clear();
    location.href = 'index.html';
  }

  async function refreshProfile() {
    if (!isLoggedIn()) return null;
    const d = await apiFetch('GET', '/api/auth/me');
    if (d.success) { localStorage.setItem(UK, JSON.stringify(d.data)); return d.data; }
    if (d.message === '未登入') _clear();
    return null;
  }

  async function updateProfile(data) {
    const d = await apiFetch('PUT', '/api/auth/profile', data);
    if (d.success) localStorage.setItem(UK, JSON.stringify(d.data));
    return d;
  }

  async function changePassword(oldPassword, newPassword) {
    return apiFetch('PUT', '/api/auth/password', { oldPassword, newPassword });
  }

  /* ── 收藏 ─────────────────────────────────────────────── */
  async function toggleWishlist(pid) {
    if (!isLoggedIn()) {
      location.href = `login.html?next=${encodeURIComponent(location.href)}`;
      return null;
    }
    const d = await apiFetch('POST', '/api/auth/wishlist/toggle', { productId: Number(pid) });
    if (d.success) {
      const u = getUser();
      if (u) { u.wishlist = d.data.wishlist; _save(u, getToken()); }
    }
    return d;
  }

  function getWishlist()   { return getUser()?.wishlist ?? []; }
  function inWishlist(id)  { return getWishlist().includes(Number(id)); }

  /* ── 頁面守衛 ─────────────────────────────────────────── */
  function requireAuth(to = 'login.html') {
    if (!isLoggedIn()) {
      location.href = `${to}?next=${encodeURIComponent(location.href)}`;
      return false;
    }
    return true;
  }

  /* ── 更新 Header UI ───────────────────────────────────── */
  function updateHeaderUI() {
    const li = isLoggedIn();
    const u  = getUser();
    document.querySelectorAll('[data-auth="guest"]').forEach(el  => el.style.display = li ? 'none' : '');
    document.querySelectorAll('[data-auth="member"]').forEach(el => el.style.display = li ? '' : 'none');
    document.querySelectorAll('[data-user-name]').forEach(el => {
      if (u) el.textContent = (u.name || '').split(' ')[0];
    });
  }

  /* 公開介面 */
  return {
    getToken, isLoggedIn, getUser,
    apiFetch,
    login, register, logout, refreshProfile, updateProfile, changePassword,
    toggleWishlist, getWishlist, inWishlist,
    requireAuth, updateHeaderUI,
  };
})();
