/* ============================================================
   布落之處 — 全站 JavaScript
   ============================================================ */

'use strict';

/* ── 商品資料 ─────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: '不鏽鋼壓布腳',
    category: '壓布腳',
    price: 480,
    images: [
      'images/product-05.jpg',
      'images/product-06.jpg',
      'images/product-07.jpg',
    ],
    description: '採用高品質 304 不鏽鋼材質，精密加工製造，表面拋光處理，光滑底部確保布料順暢送進。適用於大多數家用縫紉機型號，安裝簡易，縫製效果整齊精準。',
    specs: { '材質': '304 不鏽鋼', '針孔尺寸': '標準 5mm', '適用機型': '通用家用縫紉機', '包裝': '壓布腳 × 1', '產地': '日本' },
    inStock: true, stockCount: 45, featured: true, tag: '熱銷', material: '不鏽鋼',
  },
  {
    id: 2,
    name: '通用縫紉針（10 入）',
    category: '針具',
    price: 120,
    images: [
      'images/product-06.jpg',
      'images/product-07.jpg',
    ],
    description: '精鋼材質製造，針尖鋒利精準，穿線流暢，耐用耐磨。適合多種布料使用，包括棉質、絲質、混紡等，讓每一針都落得精確。',
    specs: { '材質': '高碳鋼', '針號': '80/12', '適用布料': '棉、麻、混紡', '包裝': '縫紉針 × 10', '產地': '德國' },
    inStock: true, stockCount: 120, featured: true, tag: null, material: '合金',
  },
  {
    id: 3,
    name: '精密梭殼',
    category: '縫紉機零件',
    price: 350,
    images: [
      'images/product-07.jpg',
      'images/product-08.jpg',
    ],
    description: '高精度加工，鋅合金外殼，彈簧張力穩定，確保縫線均勻送出。長時間使用不易磨損，有效延長縫紉機的整體使用壽命。',
    specs: { '材質': '鋅合金', '適用機型': '家用縫紉機 Class 15', '彈簧張力': '標準', '包裝': '梭殼 × 1', '產地': '台灣' },
    inStock: true, stockCount: 33, featured: true, tag: '新品', material: '合金',
  },
  {
    id: 4,
    name: '棉質縫紉線 500m',
    category: '線材',
    price: 85,
    images: [
      'images/product-08.jpg',
      'images/product-09.jpg',
    ],
    description: '100% 純棉材質，色彩飽和不褪色，強度高、不易斷線。適用於各類縫紉機及手縫作業，線軸整齊不纏繞，是職人日常首選。',
    specs: { '材質': '100% 棉', '長度': '500m', '線號': '40S/3', '顏色': '象牙白', '產地': '日本' },
    inStock: true, stockCount: 200, featured: true, tag: null, material: '棉質',
  },
  {
    id: 5,
    name: '布料裁切刀',
    category: '其他配件',
    price: 680,
    images: [
      'images/product-09.jpg',
      'images/product-10.jpg',
    ],
    description: '工業級不鏽鋼刀片，鋒利持久，人體工學握柄設計，長時間裁切不疲勞。附安全護刀套，安全收納，是裁布作業的精準夥伴。',
    specs: { '材質': '不鏽鋼刀片 + ABS 握柄', '刀片直徑': '45mm', '適用': '多層布料', '包裝': '裁刀 × 1 + 護刀套 × 1', '產地': '日本' },
    inStock: true, stockCount: 18, featured: true, tag: '熱銷', material: '不鏽鋼',
  },
  {
    id: 6,
    name: '金屬線軸（6 入）',
    category: '線材',
    price: 220,
    images: [
      'images/product-10.jpg',
      'images/product-11.jpg',
    ],
    description: '不鏽鋼材質線軸，光滑表面防止線材磨損，可重複使用且不易生鏽。標準尺寸，適配大多數縫紉機機型，一組六入超值划算。',
    specs: { '材質': '不鏽鋼', '尺寸': '標準 11.7mm', '適用機型': '通用', '包裝': '線軸 × 6', '產地': '韓國' },
    inStock: true, stockCount: 75, featured: false, tag: null, material: '不鏽鋼',
  },
  {
    id: 7,
    name: '工業用壓布腳組（12 入）',
    category: '壓布腳',
    price: 890,
    images: [
      'images/product-11.jpg',
      'images/product-12.jpg',
    ],
    description: '12 件套壓布腳組合，包含直線、拉鍊、卷邊、鑲嵌等多種功能壓布腳，滿足各種縫紉需求。附精緻收納盒，方便整理與攜帶。',
    specs: { '材質': '合金鋼', '組合內容': '12 種壓布腳', '適用機型': '家用縫紉機', '包裝': '壓布腳 × 12 + 收納盒', '產地': '德國' },
    inStock: true, stockCount: 22, featured: false, tag: '組合優惠', material: '合金',
  },
  {
    id: 8,
    name: '鍍金縫紉針（5 入）',
    category: '針具',
    price: 180,
    images: [
      'images/product-12.jpg',
      'images/product-13.jpg',
    ],
    description: '表面鍍金處理，顯著降低摩擦力，穿線更為流暢。特別適合高密度織物及敏感布料，大幅延長針的使用壽命，減少換針頻率。',
    specs: { '材質': '高碳鋼鍍金', '針號': '80/12 ～ 100/16', '適用布料': '絲、薄棉、針織', '包裝': '縫紉針 × 5', '產地': '日本' },
    inStock: true, stockCount: 60, featured: false, tag: '精品', material: '鍍金',
  },
  {
    id: 9,
    name: '高速梭床',
    category: '縫紉機零件',
    price: 1200,
    images: [
      'images/product-13.jpg',
      'images/product-14.jpg',
    ],
    description: '精密製造，適合高速縫紉作業，耐磨耐熱，長時間穩定運作不發熱，大幅提升縫製效率，是升級縫紉機性能的最佳選擇。',
    specs: { '材質': '強化合金', '適用轉速': '最高 1500 RPM', '適用機型': '工業縫紉機', '包裝': '梭床 × 1', '產地': '日本' },
    inStock: false, stockCount: 0, featured: false, tag: '預購中', material: '合金',
  },
  {
    id: 10,
    name: '彈性縫紉線 200m',
    category: '線材',
    price: 150,
    images: [
      'images/product-14.jpg',
      'images/product-15.jpg',
    ],
    description: '高彈性纖維材質，適合針織、彈性布料縫製，不易斷裂，伸縮回彈性優異，讓衣物縫合更自然貼身。',
    specs: { '材質': 'Polyester 彈性纖維', '長度': '200m', '延伸性': '120%', '顏色': '白色', '產地': '台灣' },
    inStock: true, stockCount: 90, featured: false, tag: null, material: '棉質',
  },
  {
    id: 11,
    name: '拉鍊壓布腳',
    category: '壓布腳',
    price: 320,
    images: [
      'images/product-15.jpg',
      'images/product-16.jpg',
    ],
    description: '可調節左右位置，輕鬆縫製各種拉鍊。安裝方便，同時適用於隱形拉鍊及普通拉鍊的縫製，是縫製拉鍊口袋的必備工具。',
    specs: { '材質': '鋅合金', '可調節範圍': '左右各 7mm', '適用機型': '家用縫紉機', '包裝': '拉鍊壓布腳 × 1', '產地': '韓國' },
    inStock: true, stockCount: 40, featured: false, tag: null, material: '合金',
  },
  {
    id: 12,
    name: '精密送布牙',
    category: '縫紉機零件',
    price: 560,
    images: [
      'images/product-16.jpg',
      'images/product-05.jpg',
    ],
    description: '精密鋸齒設計，確保布料均勻穩定送進，特殊硬化處理增加耐磨性，有效維持縫製精準度，讓每一條線跡都完美一致。',
    specs: { '材質': '硬化合金鋼', '齒型': '7 齒標準型', '適用機型': '家用縫紉機', '包裝': '送布牙 × 1', '產地': '德國' },
    inStock: true, stockCount: 25, featured: false, tag: null, material: '合金',
  },
];

/* ── 購物車管理 ───────────────────────────────────────────── */
const Cart = {
  STORAGE_KEY: 'buluo_cart',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.updateCountUI();
  },

  add(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !product.inStock) return false;

    const items = this.getItems();
    const existing = items.find(i => i.id === productId);

    if (existing) {
      existing.qty = Math.min(existing.qty + qty, 99);
    } else {
      items.push({ id: productId, qty });
    }

    this.saveItems(items);
    return true;
  },

  remove(productId) {
    const items = this.getItems().filter(i => i.id !== productId);
    this.saveItems(items);
  },

  updateQty(productId, qty) {
    const items = this.getItems();
    const item = items.find(i => i.id === productId);
    if (!item) return;

    if (qty <= 0) {
      this.remove(productId);
      return;
    }
    item.qty = Math.min(qty, 99);
    this.saveItems(items);
  },

  getTotal() {
    return this.getItems().reduce((sum, item) => {
      const p = PRODUCTS.find(p => p.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },

  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.qty, 0);
  },

  updateCountUI() {
    const count = this.getCount();
    document.querySelectorAll('#cartCount').forEach(el => {
      el.textContent = count;
      el.classList.toggle('is-hidden', count === 0);
    });
  },
};

/* ── 工具函式 ─────────────────────────────────────────────── */
function formatPrice(n) {
  return 'NT$ ' + n.toLocaleString('zh-TW');
}

function createProductCard(product) {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.innerHTML = `
    <div class="product-card__inner">
      <div class="product-card__img-wrap">
        ${product.tag ? `<span class="product-card__tag">${product.tag}</span>` : ''}
        <img
          class="product-card__img"
          src="${product.images[0]}"
          alt="${product.name}"
          loading="lazy"
        >
        <div class="product-card__overlay">
          <button class="product-card__add-btn" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
            ${product.inStock ? '加入購物車' : '已售完'}
          </button>
        </div>
      </div>
      <a href="product.html?id=${product.id}" class="product-card__info">
        <span class="product-card__cat">${product.category}</span>
        <h3 class="product-card__name">${product.name}</h3>
        <span class="product-card__price">${product.inStock ? formatPrice(product.price) : '<span class="product-card__out">暫無庫存</span>'}</span>
      </a>
    </div>
  `;

  div.querySelector('.product-card__add-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const id = parseInt(e.currentTarget.dataset.id);
    const ok = Cart.add(id);
    if (ok) showToast(`已加入購物車：${product.name}`);
  });

  return div;
}

/* ── Toast 通知 ──────────────────────────────────────────── */
function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.style.cssText = `
      position:fixed; bottom:32px; left:50%; transform:translateX(-50%) translateY(20px);
      background:#686868; color:#fff; padding:14px 28px; font-size:13px; letter-spacing:0.04em;
      z-index:999; opacity:0; transition:opacity 0.3s ease, transform 0.3s ease;
      pointer-events:none; white-space:nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2500);
}

/* ── Header 互動 ─────────────────────────────────────────── */
function initHeader() {
  const menuBtn   = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const searchBtn  = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('searchInput');

  function openMenu() {
    menuBtn?.classList.add('is-open');
    mobileMenu?.classList.add('is-open');
    menuOverlay?.classList.add('is-open');
    menuBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menuBtn?.classList.remove('is-open');
    mobileMenu?.classList.remove('is-open');
    menuOverlay?.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  menuOverlay?.addEventListener('click', closeMenu);

  searchBtn?.addEventListener('click', () => {
    searchOverlay?.classList.add('is-open');
    setTimeout(() => searchInput?.focus(), 50);
  });
  searchCloseBtn?.addEventListener('click', () => {
    searchOverlay?.classList.remove('is-open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchOverlay?.classList.remove('is-open');
      closeMenu();
    }
  });

  Cart.updateCountUI();
}

/* ============================================================
   首頁 (index.html)
   ============================================================ */
function initIndex() {
  const grid = document.getElementById('featuredProductsGrid');
  if (!grid) return;

  const featured = PRODUCTS.filter(p => p.featured);
  featured.forEach(p => grid.appendChild(createProductCard(p)));

  /* Newsletter */
  const form = document.getElementById('newsletterForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('感謝訂閱！我們會將最新消息傳送至您的信箱。');
    form.reset();
  });
}

/* ============================================================
   商品列表頁 (shop.html)
   ============================================================ */
function initShop() {
  const grid = document.getElementById('shopProductsGrid');
  if (!grid) return;

  const ITEMS_PER_PAGE = 9;
  let currentPage = 1;
  let filtered = [...PRODUCTS];

  /* 讀取 URL 分類參數 */
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get('category');

  /* 篩選狀態 */
  const state = {
    categories: urlCategory ? [urlCategory] : [],
    materials: [],
    priceMin: null,
    priceMax: null,
  };

  /* 若有 URL 分類，勾選對應 checkbox */
  if (urlCategory) {
    document.querySelectorAll('#categoryFilters input').forEach(cb => {
      if (cb.value === urlCategory) cb.checked = true;
    });
  }

  function applyFilters() {
    filtered = PRODUCTS.filter(p => {
      const catOk = state.categories.length === 0 || state.categories.includes(p.category);
      const matOk = state.materials.length === 0 || state.materials.includes(p.material);
      const minOk = state.priceMin === null || p.price >= state.priceMin;
      const maxOk = state.priceMax === null || p.price <= state.priceMax;
      return catOk && matOk && minOk && maxOk;
    });
    const sort = document.getElementById('sortSelect')?.value || 'default';
    applySortToFiltered(sort);
    currentPage = 1;
    render();
  }

  function applySortToFiltered(sort) {
    if (sort === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'name-asc')   filtered.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'));
    if (sort === 'default')    filtered.sort((a, b) => a.id - b.id);
  }

  function render() {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);
    const count = document.getElementById('productCount');
    if (count) count.textContent = `顯示 ${filtered.length} 件商品`;

    grid.innerHTML = '';
    if (pageItems.length === 0) {
      grid.innerHTML = '<p style="color:var(--c-text-3);font-size:14px;padding:40px 0;">找不到符合條件的商品。</p>';
    } else {
      pageItems.forEach(p => grid.appendChild(createProductCard(p)));
    }
    renderPagination();
  }

  function renderPagination() {
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const container = document.getElementById('pageNumbers');
    const prevBtn   = document.getElementById('prevPage');
    const nextBtn   = document.getElementById('nextPage');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = 'page-num' + (i === currentPage ? ' is-active' : '');
      btn.textContent = i;
      btn.addEventListener('click', () => { currentPage = i; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
      container.appendChild(btn);
    }
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
  }

  /* 事件綁定 */
  document.getElementById('sortSelect')?.addEventListener('change', (e) => {
    applySortToFiltered(e.target.value);
    currentPage = 1;
    render();
  });

  document.querySelectorAll('#categoryFilters input').forEach(cb => {
    cb.addEventListener('change', () => {
      state.categories = [...document.querySelectorAll('#categoryFilters input:checked')].map(c => c.value);
      applyFilters();
    });
  });

  document.querySelectorAll('#materialFilters input').forEach(cb => {
    cb.addEventListener('change', () => {
      state.materials = [...document.querySelectorAll('#materialFilters input:checked')].map(c => c.value);
      applyFilters();
    });
  });

  document.getElementById('applyPrice')?.addEventListener('click', () => {
    const min = parseFloat(document.getElementById('priceMin').value);
    const max = parseFloat(document.getElementById('priceMax').value);
    state.priceMin = isNaN(min) ? null : min;
    state.priceMax = isNaN(max) ? null : max;
    applyFilters();
  });

  document.getElementById('clearFilters')?.addEventListener('click', () => {
    state.categories = [];
    state.materials  = [];
    state.priceMin   = null;
    state.priceMax   = null;
    document.querySelectorAll('.filter-option input').forEach(i => i.checked = false);
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    applyFilters();
  });

  document.getElementById('prevPage')?.addEventListener('click', () => { if (currentPage > 1) { currentPage--; render(); } });
  document.getElementById('nextPage')?.addEventListener('click', () => {
    if (currentPage < Math.ceil(filtered.length / ITEMS_PER_PAGE)) { currentPage++; render(); }
  });

  /* 手機篩選開關 */
  const filterToggle = document.getElementById('filterToggle');
  const sidebar = document.querySelector('.shop-sidebar');
  filterToggle?.addEventListener('click', () => sidebar?.classList.toggle('is-open'));

  applyFilters();
}

/* ============================================================
   商品詳情頁 (product.html)
   ============================================================ */
function initProduct() {
  const mainImg = document.getElementById('mainProductImage');
  if (!mainImg) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id')) || 1;
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  /* 麵包屑 */
  const breadcrumb = document.getElementById('productBreadcrumb');
  if (breadcrumb) breadcrumb.textContent = product.name;

  /* 分類 */
  const catEl = document.querySelector('.product-info .product-card__cat');
  if (catEl) catEl.textContent = product.category;

  /* 名稱 */
  const nameEl = document.getElementById('productName');
  if (nameEl) nameEl.textContent = product.name;

  /* 頁面標題 */
  document.title = `${product.name} — 布落之處`;

  /* 價格 */
  const priceEl = document.getElementById('productPrice');
  if (priceEl) priceEl.textContent = product.inStock ? formatPrice(product.price) : '暫無庫存';

  /* 庫存狀態 */
  const stockEl = document.getElementById('productStock');
  if (stockEl) {
    const dot = document.createElement('span');
    dot.className = 'stock-dot' + (product.inStock ? '' : ' is-out');
    const txt = document.createTextNode(product.inStock ? `有庫存（剩 ${product.stockCount} 件）` : '目前缺貨，歡迎聯絡詢問');
    stockEl.appendChild(dot);
    stockEl.appendChild(txt);
  }

  /* 主圖 */
  mainImg.src = product.images[0];
  mainImg.alt = product.name;

  /* 縮圖 */
  const thumbsContainer = document.getElementById('galleryThumbs');
  if (thumbsContainer) {
    product.images.forEach((src, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'gallery-thumb' + (i === 0 ? ' is-active' : '');
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${product.name} 圖片 ${i + 1}`;
      img.loading = 'lazy';
      thumb.appendChild(img);
      thumb.addEventListener('click', () => {
        mainImg.src = src;
        document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
      });
      thumbsContainer.appendChild(thumb);
    });
  }

  /* 商品描述 */
  const descEl = document.getElementById('productDesc');
  if (descEl) descEl.innerHTML = `<p>${product.description}</p>`;

  /* 規格表格 */
  const specsTable = document.getElementById('specsTable');
  if (specsTable && product.specs) {
    Object.entries(product.specs).forEach(([key, val]) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${key}</td><td>${val}</td>`;
      specsTable.appendChild(tr);
    });
  }

  /* 數量選擇 */
  const qtyInput = document.getElementById('qtyInput');
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    const v = parseInt(qtyInput.value) || 1;
    if (v > 1) qtyInput.value = v - 1;
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    const v = parseInt(qtyInput.value) || 1;
    if (v < 99) qtyInput.value = v + 1;
  });
  qtyInput?.addEventListener('change', () => {
    const v = parseInt(qtyInput.value);
    qtyInput.value = isNaN(v) || v < 1 ? 1 : Math.min(v, 99);
  });

  /* 加入購物車 */
  const addBtn = document.getElementById('addToCartBtn');
  if (addBtn) {
    if (!product.inStock) {
      addBtn.textContent = '暫無庫存';
      addBtn.disabled = true;
      addBtn.style.opacity = '0.4';
    }
    addBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value) || 1;
      const ok = Cart.add(product.id, qty);
      if (ok) showToast(`已加入購物車：${product.name} × ${qty}`);
    });
  }

  /* 相關商品 */
  const relatedGrid = document.getElementById('relatedProductsGrid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== id && p.category === product.category).slice(0, 3);
    const fill = related.length < 3 ? PRODUCTS.filter(p => p.id !== id && !related.includes(p)).slice(0, 3 - related.length) : [];
    [...related, ...fill].forEach(p => relatedGrid.appendChild(createProductCard(p)));
  }
}

/* ============================================================
   購物車頁 (cart.html)
   ============================================================ */
function initCart() {
  const cartContent = document.getElementById('cartContent');
  const cartEmpty   = document.getElementById('cartEmpty');
  if (!cartContent && !cartEmpty) return;

  const SHIPPING_FEE = 80;
  const FREE_THRESHOLD = 1000;

  function render() {
    const items = Cart.getItems();

    if (items.length === 0) {
      cartContent?.classList.add('is-hidden');
      if (cartContent) cartContent.style.display = 'none';
      if (cartEmpty) cartEmpty.style.display = 'block';
      return;
    }

    if (cartContent) cartContent.style.display = '';
    if (cartEmpty) cartEmpty.style.display = 'none';

    const listEl = document.getElementById('cartItemsList');
    if (!listEl) return;
    listEl.innerHTML = '';

    items.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return;

      const subtotal = product.price * item.qty;
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.dataset.id = item.id;
      row.innerHTML = `
        <div class="cart-item__product">
          <img class="cart-item__img" src="${product.images[0]}" alt="${product.name}" loading="lazy">
          <div>
            <p class="cart-item__name">${product.name}</p>
            <span class="cart-item__cat">${product.category}</span>
          </div>
        </div>
        <span class="cart-item__price">${formatPrice(product.price)}</span>
        <div class="cart-item__qty">
          <button class="qty-btn" data-action="minus">−</button>
          <input type="number" class="qty-input" value="${item.qty}" min="1" max="99">
          <button class="qty-btn" data-action="plus">+</button>
        </div>
        <span class="cart-item__subtotal">${formatPrice(subtotal)}</span>
        <button class="cart-item__remove" aria-label="移除商品">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      `;

      const qtyInput = row.querySelector('.qty-input');
      row.querySelector('[data-action="minus"]').addEventListener('click', () => {
        const v = parseInt(qtyInput.value) - 1;
        Cart.updateQty(item.id, v);
        render();
      });
      row.querySelector('[data-action="plus"]').addEventListener('click', () => {
        const v = parseInt(qtyInput.value) + 1;
        Cart.updateQty(item.id, v);
        render();
      });
      qtyInput.addEventListener('change', () => {
        Cart.updateQty(item.id, parseInt(qtyInput.value));
        render();
      });
      row.querySelector('.cart-item__remove').addEventListener('click', () => {
        Cart.remove(item.id);
        render();
      });

      listEl.appendChild(row);
    });

    updateSummary();
  }

  function updateSummary() {
    const subtotal = Cart.getTotal();
    const shipping  = subtotal >= FREE_THRESHOLD ? 0 : SHIPPING_FEE;
    const total     = subtotal + shipping;

    const subtotalEl = document.getElementById('summarySubtotal');
    const shippingEl = document.getElementById('summaryShipping');
    const totalEl    = document.getElementById('summaryTotal');
    const noteEl     = document.querySelector('.free-shipping-tag');

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? '免費' : formatPrice(shipping);
    if (totalEl)    totalEl.textContent    = formatPrice(total);

    if (noteEl) {
      if (subtotal >= FREE_THRESHOLD) {
        noteEl.textContent = '✓ 已享免費運送';
      } else {
        const diff = FREE_THRESHOLD - subtotal;
        noteEl.textContent = `再消費 ${formatPrice(diff)} 即享免費運送`;
      }
    }
  }

  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });

  render();
}

/* ============================================================
   視覺動態：Header scroll + Hero 動畫 + 滾動淡入
   ============================================================ */
function initScrollEffects() {
  /* Header: 滾動後加 shadow */
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* Hero 入場動畫 */
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('hero-init');
    requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('is-ready')));
  }

  /* IntersectionObserver 滾動淡入 */
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  const revealSelectors = [
    '.section-header',
    '.category-card',
    '.fe-main',
    '.fe-details',
    '.fe-copy',
    '.editorial__img-col',
    '.editorial__text-col',
    '.stat',
    '.newsletter__text',
    '.newsletter__form',
    '.footer-brand',
    '.footer-col',
  ];

  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const siblings = [...(el.parentElement?.children || [])];
      const idx = siblings.indexOf(el);
      el.classList.add('reveal');
      if (idx > 0) el.style.transitionDelay = `${Math.min(idx * 0.09, 0.36)}s`;
      io.observe(el);
    });
  });
}

/* ============================================================
   頁面偵測與初始化
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();

  const path = location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
    initIndex();
  }
  if (path.includes('shop.html')) {
    initShop();
  }
  if (path.includes('product.html')) {
    initProduct();
  }
  if (path.includes('cart.html')) {
    initCart();
  }

  initScrollEffects();
});
