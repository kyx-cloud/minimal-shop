/* ============================================================
   布落之處 Admin JS — 共用邏輯
   ============================================================ */

'use strict';

const ADMIN_TOKEN_KEY = 'buluo_admin_token';
const _local = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:';
const API = _local ? '' : 'https://buluo-shop-api.onrender.com';

/* ── Auth ────────────────────────────────────────────────── */
function getToken()  { return localStorage.getItem(ADMIN_TOKEN_KEY); }
function setToken(t) { localStorage.setItem(ADMIN_TOKEN_KEY, t); }
function clearToken(){ localStorage.removeItem(ADMIN_TOKEN_KEY); }

function requireAuth() {
  if (!getToken()) { window.location.href = '/admin/login.html'; }
}

/* ── Fetch wrapper ───────────────────────────────────────── */
async function adminFetch(url, opts = {}) {
  const res = await fetch(API + url, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
      ...(opts.headers || {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if (res.status === 401) { clearToken(); window.location.href = '/admin/login.html'; return null; }
  return res.json();
}

/* ── Status helpers ──────────────────────────────────────── */
const ORDER_STATUSES = ['待付款','已付款','處理中','已出貨','已完成','已取消'];
const STATUS_CLASS = {
  '待付款': 'badge-pending',
  '已付款': 'badge-paid',
  '處理中': 'badge-process',
  '已出貨': 'badge-shipped',
  '已完成': 'badge-complete',
  '已取消': 'badge-cancel',
};

function statusBadge(s) {
  return `<span class="badge ${STATUS_CLASS[s] || ''}">${s}</span>`;
}
function payBadge(s) {
  return `<span class="badge ${s === '已付款' ? 'badge-paid' : 'badge-pending'}">${s}</span>`;
}

function fmt(n) { return 'NT$ ' + Number(n).toLocaleString('zh-TW'); }

function paymentLabel(m) {
  return { mock_credit: '信用卡', mock_atm: 'ATM 轉帳', cod: '貨到付款' }[m] || m;
}

function formatDate(dt) {
  if (!dt) return '—';
  const d = new Date(dt);
  return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

/* ── Logout ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    if (confirm('確定要登出嗎？')) { clearToken(); window.location.href = '/admin/login.html'; }
  });

  /* Active nav link */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') && path.endsWith(link.getAttribute('href').replace('/admin/',''))) {
      link.classList.add('active');
    }
  });

  /* ── Mobile sidebar toggle ── */
  const sidebar  = document.querySelector('.admin-sidebar');
  const overlay  = document.querySelector('.sidebar-overlay');
  const toggleBtn = document.getElementById('sidebarToggle');

  function openSidebar() {
    sidebar?.classList.add('is-open');
    overlay?.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar?.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', () => {
    sidebar?.classList.contains('is-open') ? closeSidebar() : openSidebar();
  });

  overlay?.addEventListener('click', closeSidebar);

  /* Close on nav link click (mobile) */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });
});

/* ── Toast ───────────────────────────────────────────────── */
function adminToast(msg, type = 'success') {
  let t = document.getElementById('adminToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'adminToast';
    t.style.cssText = `
      position:fixed;bottom:28px;right:28px;padding:12px 22px;font-size:13px;
      z-index:999;transition:opacity 0.3s ease,transform 0.3s ease;
      opacity:0;transform:translateY(8px);pointer-events:none;
      font-family:inherit;
    `;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.background = type === 'error' ? '#C62828' : '#111';
  t.style.color = '#fff';
  t.style.opacity = '1';
  t.style.transform = 'translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; }, 2800);
}

/* ── Modal helpers ───────────────────────────────────────── */
function openModal(id)  { document.getElementById(id)?.classList.add('is-open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('is-open'); }

document.addEventListener('click', e => {
  if (e.target.matches('.modal-backdrop')) closeModal(e.target.id);
  if (e.target.closest('[data-close-modal]')) {
    const id = e.target.closest('[data-close-modal]').dataset.closeModal;
    closeModal(id);
  }
});

/* ── Login page ──────────────────────────────────────────── */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('loginError');
    const btn   = document.getElementById('loginBtn');
    btn.textContent = '登入中…'; btn.disabled = true;
    errEl.style.display = 'none';

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: document.getElementById('loginUser').value,
          password: document.getElementById('loginPass').value,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        window.location.href = '/admin/dashboard.html';
      } else {
        errEl.textContent = data.message;
        errEl.style.display = 'block';
      }
    } catch {
      errEl.textContent = '無法連接後端，請確認服務是否已啟動。';
      errEl.style.display = 'block';
    } finally {
      btn.textContent = '登入';
      btn.disabled = false;
    }
  });
}
