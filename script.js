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
   職人首選：縮圖互動 + 鏤空大字圖片同步
   ============================================================ */
function initFeaturedEditorial() {
  const mainImg  = document.getElementById('feMainImg');
  const heroType = document.getElementById('feHeroType');
  const thumbs   = document.querySelectorAll('.fe-thumb');
  if (!mainImg || !thumbs.length) return;

  let currentSrc = thumbs[0]?.dataset.src || '';
  let isSwitching = false;

  function switchTo(src, activeThumb) {
    if (isSwitching || src === currentSrc) return;
    isSwitching  = true;
    currentSrc   = src;

    /* Cross-fade: fade out */
    mainImg.classList.add('is-switching');

    setTimeout(() => {
      mainImg.src = src;
      mainImg.alt = activeThumb.dataset.alt || '';

      /* Sync word text and background image to current product */
      if (heroType) {
        heroType.textContent = activeThumb.dataset.word || 'CRAFTSMAN';
        heroType.style.backgroundImage = `url(${src})`;
        /* Re-apply background-clip: text — prevents Safari/Chrome repaint bug
           where clip effect disappears after inline backgroundImage change */
        heroType.style.webkitBackgroundClip = 'text';
        heroType.style.backgroundClip = 'text';
        heroType.style.webkitTextFillColor = 'transparent';
        heroType.style.color = 'transparent';
      }

      /* Fade in */
      mainImg.classList.remove('is-switching');
      isSwitching = false;
    }, 340);

    /* Update active state */
    thumbs.forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-pressed', 'false');
    });
    activeThumb.classList.add('is-active');
    activeThumb.setAttribute('aria-pressed', 'true');
  }

  thumbs.forEach(thumb => {
    /* hover → preview */
    thumb.addEventListener('mouseenter', () => switchTo(thumb.dataset.src, thumb));
    /* click → confirm */
    thumb.addEventListener('click', () => switchTo(thumb.dataset.src, thumb));
  });
}

/* ============================================================
   首頁 (index.html)
   ============================================================ */
/* ============================================================
   Hero Carousel data
   ============================================================ */
const HERO_SLIDES = [
  {
    num: '001',
    category: '壓布腳',
    title: ['不鏽鋼', '壓布腳'],
    desc: '304 不鏽鋼精密鑄造，光滑底部確保布料順暢送進，適用大多數家用縫紉機型號。',
    image: 'images/no-05.png',
    link: 'shop.html',
  },
  {
    num: '002',
    category: '針具',
    title: ['通用縫紉針', '10 入組'],
    desc: '精鋼材質，針尖鋒利精準，適合棉質、絲質、混紡等多種布料，每一針落點精確。',
    image: 'images/no-06.png',
    link: 'shop.html',
  },
  {
    num: '003',
    category: '縫紉機零件',
    title: ['精密', '梭殼'],
    desc: '鋅合金外殼，彈簧張力穩定，縫線均勻送出，有效延長縫紉機整體使用壽命。',
    image: 'images/no-07.png',
    link: 'shop.html',
  },
  {
    num: '004',
    category: '線材',
    title: ['棉質縫紉線', '500m'],
    desc: '100% 純棉，色彩飽和不褪色，強度高不易斷線，是職人日常首選。',
    image: 'images/no-08.png',
    link: 'shop.html',
  },
  {
    num: '005',
    category: '縫紉機零件',
    title: ['精工', '梭芯'],
    desc: '鋅合金精密鑄造，與 Class 15 梭殼完美配合，走線平穩，縫製精準。',
    image: 'images/no-09.png',
    link: 'shop.html',
  },
];

/* ============================================================
   Hero Carousel Component
   ============================================================ */
function initHeroCarousel() {
  const section   = document.getElementById('heroCarousel');
  if (!section) return;

  const ghostNum    = document.getElementById('hcGhostNum');
  const labelEl     = document.getElementById('hcLabel');
  const titleEl     = document.getElementById('hcTitle');
  const descEl      = document.getElementById('hcDesc');
  const btnEl       = document.getElementById('hcBtn');
  const productEl   = document.getElementById('hcProduct');
  const productImg  = document.getElementById('hcProductImg');
  const panelEl     = document.getElementById('hcPanel');
  const panelGhost  = document.getElementById('hcPanelGhost');
  const previewEl   = document.getElementById('hcPreview');
  const previewImg  = document.getElementById('hcPreviewImg');
  const panelNumEl  = document.getElementById('hcPanelNum');
  const panelNameEl = document.getElementById('hcPanelName');  /* now h2.hc-title */
  const panelCatEl  = document.getElementById('hcPanelCat');
  const panelDescEl = document.getElementById('hcPanelDesc');
  const prevBtn     = document.getElementById('hcPrev');
  const nextBtn     = document.getElementById('hcNext');
  const counterEl   = document.getElementById('hcCounter');
  const pagiEl      = document.getElementById('hcPagination');

  const total = HERO_SLIDES.length;
  let current  = 0;
  let isAnimating = false;
  let autoTimer   = null;
  let floatTween  = null;

  function pad3(n) { return String(n).padStart(3, '0'); }

  /* Build pagination: 001 / 002 / 003 style */
  pagiEl.innerHTML = '';
  HERO_SLIDES.forEach((s, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.className = 'hc-dot-sep';
      sep.textContent = '/';
      sep.setAttribute('aria-hidden', 'true');
      pagiEl.appendChild(sep);
    }
    const dot = document.createElement('button');
    dot.className = 'hc-dot' + (i === 0 ? ' is-active' : '');
    dot.textContent = pad3(i + 1);
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `第 ${i + 1} 張`);
    dot.addEventListener('click', () => { goTo(i); stopAuto(); startAuto(); });
    pagiEl.appendChild(dot);
  });

  function updateDots(idx) {
    pagiEl.querySelectorAll('.hc-dot').forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }

  function updateCounter(idx) {
    if (counterEl) counterEl.textContent = `${pad3(idx + 1)} / ${pad3(total)}`;
  }

  /* Clear all GSAP-accumulated transforms so CSS positioning takes over again */
  function resetHeroPosition() {
    if (typeof gsap === 'undefined') return;
    if (floatTween) floatTween.kill();
    /* Wrappers: clear any GSAP transform so CSS translate(-50%,-50%) is restored */
    gsap.set(productEl, { x: 0, y: 0, scale: 1, rotation: 0, clearProps: 'transform' });
    gsap.set(productImg, { x: 0, y: 0, scale: 1, rotation: 0, clearProps: 'transform' });
    if (previewEl)  gsap.set(previewEl,  { x: 0, y: 0, scale: 1, rotation: 0, clearProps: 'transform' });
    if (previewImg) gsap.set(previewImg, { x: 0, y: 0, scale: 1, rotation: 0, clearProps: 'transform' });
  }

  /* Float the product img (NOT the wrapper — wrapper owns CSS centering transform) */
  function startFloat() {
    if (floatTween) floatTween.kill();
    gsap.set(productImg, { y: 0 });
    floatTween = gsap.to(productImg, {
      y: -22,
      duration: 3.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  /* Render new slide content (DOM update, no anim) */
  function applySlide(idx) {
    const s    = HERO_SLIDES[idx];
    const nxt  = HERO_SLIDES[(idx + 1) % total];

    labelEl.textContent = s.category;
    titleEl.innerHTML   = s.title.map(t => `<span class="tl"><span class="tc">${t}</span></span>`).join('');
    descEl.textContent  = s.desc;
    btnEl.href          = s.link;

    productImg.src = s.image;
    productImg.alt = s.title.join(' ');

    previewImg.src = nxt.image;
    previewImg.alt = nxt.title.join(' ');

    ghostNum.textContent = s.num;

    /* Panel info = next slide */
    if (panelGhost)  panelGhost.textContent = nxt.num;
    if (panelNumEl)  panelNumEl.textContent = 'NO.' + nxt.num;
    if (panelNameEl) panelNameEl.innerHTML  = nxt.title.map(t => `<span class="tl"><span class="tc">${t}</span></span>`).join('');
    if (panelCatEl)  panelCatEl.textContent = nxt.category;
    if (panelDescEl) panelDescEl.textContent = nxt.desc;

    updateDots(idx);
    updateCounter(idx);
  }

  /* GSAP slide transition */
  function goTo(idx, dir = 1) {
    if (isAnimating || idx === current) return;
    isAnimating = true;
    const useGSAP = typeof gsap !== 'undefined';
    const prev = current;
    current = idx;

    const s = HERO_SLIDES[idx];
    const next = HERO_SLIDES[(idx + 1) % total];

    if (!useGSAP) {
      applySlide(idx);
      isAnimating = false;
      return;
    }

    /* Kill float and reset all transforms before transition starts */
    resetHeroPosition();

    const tl = gsap.timeline({ onComplete: () => {
      isAnimating = false;
      resetHeroPosition(); /* clear residual transforms before float restarts */
      startFloat();
    }});

    /* Text out */
    tl.to([labelEl, titleEl, descEl, btnEl], {
      opacity: 0,
      y: dir > 0 ? -18 : 18,
      duration: 0.28,
      stagger: 0.04,
      ease: 'power2.in',
    });

    /* Product IMG out (wrapper is untouched — it owns the CSS centering transform) */
    tl.to(productImg, {
      opacity: 0,
      x: dir > 0 ? '-12%' : '12%',
      scale: 0.93,
      rotate: dir > 0 ? -1.5 : 1.5,
      duration: 0.42,
      ease: 'power2.in',
    }, '<0.05');

    /* Ghost number out */
    tl.to(ghostNum, { opacity: 0, duration: 0.28, ease: 'power1.in' }, '<');

    /* Swap content — position productImg at incoming-side offset */
    tl.call(() => {
      applySlide(idx);
      gsap.set(productImg, { x: dir > 0 ? '18%' : '-18%', scale: 0.96, rotate: dir > 0 ? 2 : -2, opacity: 0 });
      gsap.set([labelEl, titleEl, descEl, btnEl], { opacity: 0, y: dir > 0 ? 20 : -20 });
    });

    /* Product IMG in */
    tl.to(productImg, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 0.9,
      ease: 'power3.out',
    });

    /* Ghost number in */
    tl.to(ghostNum, { opacity: 0.72, duration: 0.55, ease: 'power2.out' }, '<0.1');

    /* Text in — stagger */
    tl.to([labelEl, titleEl, descEl, btnEl], {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: 'power3.out',
    }, '<0.12');

    /* Preview wrapper: opacity only (no y — wrapper has CSS transform for positioning) */
    if (previewEl) {
      tl.to(previewEl, { opacity: 0, duration: 0.25, ease: 'power1.in' }, 0);
      tl.to(previewEl, { opacity: 1, duration: 0.5,  ease: 'power2.out' }, 0.45);
    }
    /* Panel text: y+opacity safe (these elements have no CSS transform) */
    const panelTextEls = [panelCatEl, panelNameEl, panelDescEl, panelNumEl].filter(Boolean);
    if (panelTextEls.length) {
      tl.to(panelTextEls, { opacity: 0, y: -10, duration: 0.25, ease: 'power1.in' }, 0);
      tl.to(panelTextEls, { opacity: 1, y:   0, duration: 0.5,  ease: 'power2.out' }, 0.45);
    }
    if (panelGhost) {
      tl.to(panelGhost, { opacity: 0, duration: 0.25, ease: 'power1.in' }, 0);
      tl.to(panelGhost, { opacity: 0.72, duration: 0.55, ease: 'power2.out' }, 0.4);
    }
  }

  function next() { goTo((current + 1) % total, 1); }
  function prev() { goTo((current - 1 + total) % total, -1); }

  /* Auto-play */
  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, 5000);
  }
  function stopAuto() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  /* ── Drag / swipe (pointer + touch) ── */
  let dragStartX = 0;
  let isDragging = false;

  section.addEventListener('pointerdown', e => {
    /* Skip drag when clicking on interactive controls */
    if (e.target.closest('button, a')) return;
    dragStartX = e.clientX;
    isDragging = true;
    stopAuto();
  });
  section.addEventListener('pointermove', () => { /* intentionally empty — just track */ });
  section.addEventListener('pointerup', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    } else {
      startAuto(); /* no drag — just resume */
      return;
    }
    startAuto();
  });
  section.addEventListener('pointercancel', () => {
    isDragging = false;
    startAuto();
  });

  /* Touch fallback for browsers that don't fire pointer events on touch */
  let touchStartX = 0;
  section.addEventListener('touchstart', e => {
    if (e.target.closest('button, a')) return;
    touchStartX = e.touches[0].clientX;
    stopAuto();
  }, { passive: true });
  section.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    startAuto();
  }, { passive: true });

  /* Pause on hover (desktop) */
  section.addEventListener('mouseenter', stopAuto);
  section.addEventListener('mouseleave', startAuto);

  /* ── Buttons ── */
  nextBtn?.addEventListener('click', e => { e.stopPropagation(); next(); stopAuto(); startAuto(); });
  prevBtn?.addEventListener('click', e => { e.stopPropagation(); prev(); stopAuto(); startAuto(); });
  panelEl?.addEventListener('click', e => {
    if (e.target.closest('button')) return;
    next(); stopAuto(); startAuto();
  });

  /* Entry animation */
  function playEntry() {
    const useGSAP = typeof gsap !== 'undefined';
    const loaderExists = !!document.getElementById('siteLoader');
    const delay = loaderExists && !sessionStorage.getItem('buluo_loaded_prev') ? 2.3 : 0.1;
    sessionStorage.setItem('buluo_loaded_prev', '1');

    applySlide(0);

    if (!useGSAP) {
      startAuto();
      return;
    }

    /* Animate productImg (not the wrapper), wrapper keeps its CSS centering transform */
    gsap.set(productImg, { opacity: 0, scale: 0.9, y: 28 });
    gsap.set([labelEl, descEl, btnEl], { opacity: 0, y: 22 });
    gsap.set(titleEl.querySelectorAll('.tc'), { y: '100%' });
    gsap.set(ghostNum, { opacity: 0 });
    if (panelEl)    gsap.set(panelEl,    { opacity: 0, x: 36 });
    if (panelGhost) gsap.set(panelGhost, { opacity: 0 });

    const tl = gsap.timeline({ delay, onComplete: startFloat });

    tl.to(ghostNum, { opacity: 0.72, duration: 1.3, ease: 'power2.out' });
    tl.to(titleEl.querySelectorAll('.tc'), {
      y: '0%', duration: 1.05, stagger: 0.12, ease: 'power3.out',
    }, '-=0.85');
    tl.to(labelEl, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.55');
    tl.to(descEl,  { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.4');
    tl.to(btnEl,   { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.45');
    tl.to(productImg, {
      opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'power3.out',
    }, 0.12);
    /* Right column slides in from right */
    if (panelEl) tl.to(panelEl, { opacity: 1, x: 0, duration: 1.0, ease: 'power3.out' }, '-=0.65');
    if (panelGhost) tl.to(panelGhost, { opacity: 0.72, duration: 0.8, ease: 'power2.out' }, '-=0.5');
  }

  /* Reset on tab-return so accumulated GSAP transforms don't linger */
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !isAnimating) {
      resetHeroPosition();
      startFloat();
    }
  });

  /* Reset on resize (layout shift can leave img offset) */
  let _resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => { if (!isAnimating) resetHeroPosition(); }, 200);
  });

  resetHeroPosition(); /* clear any stale state before entry animation */
  playEntry();
  startAuto();
}

function initIndex() {
  initHeroCarousel();
  initFeaturedEditorial();
  initImageMouseEffect();
  /* initFloatingProducts is triggered by scroll via initGSAPAnimations */

  /* Newsletter */
  const form = document.getElementById('newsletterForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('感謝訂閱！我們會將最新消息傳送至您的信箱。');
    form.reset();
  });
}

/* ── Floating products GSAP yoyo animation (called after scroll reveal) ── */
function initFloatingProducts() {
  if (typeof gsap === 'undefined') return;

  document.querySelectorAll('.fp-item').forEach((el) => {
    const rotate = parseFloat(el.dataset.rotate ?? 0);
    const floatY = parseFloat(el.dataset.fy ?? 12);
    const speed  = parseFloat(el.dataset.fs ?? 4.5);
    const delay  = -(speed * Math.random());
    const rDelta = Math.random() > 0.5 ? 1.8 : -1.8;

    gsap.set(el, { rotation: rotate });

    gsap.to(el, {
      y:        -floatY,
      rotation: rotate + rDelta,
      duration: speed,
      ease:     'sine.inOut',
      yoyo:     true,
      repeat:   -1,
      delay,
    });

    const baseOpacity = parseFloat(el.dataset.baseOpacity ?? 0.9);
    const finalScale  = parseFloat(el.dataset.finalScale  ?? 1.0);
    el.addEventListener('mouseenter', () =>
      gsap.to(el, { scale: finalScale * 1.10, opacity: 1, duration: 0.35, ease: 'power2.out' }));
    el.addEventListener('mouseleave', () =>
      gsap.to(el, { scale: finalScale, opacity: baseOpacity, duration: 0.45, ease: 'power2.out' }));
  });
}

/* ── Image 3D micro-rotation on mouse move ── */
function initImageMouseEffect() {
  document.querySelectorAll('.brand-phil__img-col').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const rx = ((e.clientY - cy) / r.height) * -6;
      const ry = ((e.clientX - cx) / r.width) * 6;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
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
   載入動畫 (index.html only — GSAP required)
   ============================================================ */
function initLoadingAnimation() {
  const loader = document.getElementById('siteLoader');
  if (!loader) return;

  if (sessionStorage.getItem('buluo_loaded')) {
    loader.style.display = 'none';
    return;
  }
  sessionStorage.setItem('buluo_loaded', '1');
  document.body.style.overflow = 'hidden';

  if (typeof gsap === 'undefined') {
    setTimeout(() => { loader.style.display = 'none'; document.body.style.overflow = ''; }, 400);
    return;
  }

  const brand = loader.querySelector('.site-loader__brand');
  const line  = loader.querySelector('.site-loader__line');

  gsap.timeline({
    onComplete() {
      gsap.to(loader, {
        opacity: 0, duration: 0.55, ease: 'power2.inOut',
        onComplete() {
          loader.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
  })
  .to(brand, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' })
  .to(line,  { scaleX: 1,  duration: 0.65, ease: 'power2.out' }, '-=0.25')
  .to({},    { duration: 0.9 });  /* hold */
}

/* ============================================================
   GSAP 動畫（ScrollTrigger + ScrollTrigger sections）
   ============================================================ */
function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  /* ── Universal scroll reveal groups ── */
  const groups = [
    { sel: '.section-header',      from: { y: 48, opacity: 0, filter: 'blur(6px)' }, stagger: 0 },
    { sel: '.category-card',       from: { y: 60, opacity: 0, filter: 'blur(5px)' }, stagger: 0.1 },
    { sel: '.editorial__img-col',  from: { x: -40, opacity: 0, filter: 'blur(8px)' }, stagger: 0 },
    { sel: '.editorial__text-col', from: { x:  40, opacity: 0, filter: 'blur(8px)' }, stagger: 0 },
    { sel: '.news-title',          from: { y:  48, opacity: 0, filter: 'blur(5px)' }, stagger: 0 },
    { sel: '.news-desc',           from: { y:  28, opacity: 0 }, stagger: 0 },
    { sel: '.news-container .newsletter__form', from: { y: 28, opacity: 0 }, stagger: 0 },
    { sel: '.footer-brand',        from: { y:  24, opacity: 0 }, stagger: 0 },
    { sel: '.footer-col',          from: { y:  24, opacity: 0 }, stagger: 0.08 },
    { sel: '.brand-phil__img-col', from: { x: -40, opacity: 0, filter: 'blur(8px)' }, stagger: 0 },
    { sel: '.brand-phil__text-col',from: { x:  40, opacity: 0, filter: 'blur(6px)' }, stagger: 0 },
    { sel: '.fc-product',          from: { x: -60, opacity: 0, filter: 'blur(8px)' }, stagger: 0 },
    { sel: '.fc-info',             from: { y:  40, opacity: 0, filter: 'blur(5px)' }, stagger: 0 },
  ];

  groups.forEach(({ sel, from, stagger }) => {
    const els = [...document.querySelectorAll(sel)];
    if (!els.length) return;
    gsap.from(els, {
      ...from,
      duration: 1.1,
      stagger,
      ease: 'power3.out',
      scrollTrigger: { trigger: els[0], start: 'top 88%' },
    });
  });

  /* ── Stats: count-up animation ── */
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const statDefs = [
      { el: document.querySelector('.stat:nth-child(1) .stat__num'), end: 500, suffix: '+' },
      { el: document.querySelector('.stat:nth-child(2) .stat__num'), end: 10000, suffix: '+', thousands: true },
      { el: document.querySelector('.stat:nth-child(3) .stat__num'), end: 5, suffix: '+' },
      { el: document.querySelector('.stat:nth-child(4) .stat__num'), end: 30, suffix: '+' },
    ];
    let triggered = false;
    ScrollTrigger.create({
      trigger: statsBar,
      start: 'top 80%',
      onEnter() {
        if (triggered) return;
        triggered = true;
        statDefs.forEach(({ el, end, suffix, thousands }) => {
          if (!el) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate() {
              const v = Math.round(obj.val);
              el.textContent = (thousands ? v.toLocaleString('zh-TW') : v) + suffix;
            },
            onComplete() {
              el.textContent = (thousands ? end.toLocaleString('zh-TW') : end) + suffix;
            },
          });
        });
        gsap.from([...document.querySelectorAll('.stat')], {
          y: 32, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out',
        });
      },
    });
  }

  /* ── 職人首選 特定動畫 ── */
  const feLeft = document.querySelector('.fe-left');
  if (feLeft) {
    gsap.from(feLeft, {
      opacity: 0, scale: 0.96, filter: 'blur(8px)',
      duration: 1.5, ease: 'power3.out',
      scrollTrigger: { trigger: feLeft, start: 'top 85%' },
    });
  }

  const feUpper = document.querySelector('.fe-upper');
  if (feUpper) {
    gsap.from(feUpper, {
      opacity: 0, y: 32, filter: 'blur(5px)',
      duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: feUpper, start: 'top 88%' },
    });
  }

  const feThumbs = [...document.querySelectorAll('.fe-thumb')];
  if (feThumbs.length) {
    gsap.from(feThumbs, {
      opacity: 0, scale: 0.9,
      duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: feThumbs[0], start: 'top 90%' },
    });
  }

  const feHeroType = document.getElementById('feHeroType');
  if (feHeroType) {
    gsap.from(feHeroType, {
      opacity: 0, y: 40,
      duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: feHeroType, start: 'top 95%' },
    });
  }

  /* ── Parallax: fc-num-bg ── */
  const fcNumBg = document.querySelector('.fc-num-bg');
  if (fcNumBg) {
    gsap.to(fcNumBg, {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: '.fc-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
    gsap.from(fcNumBg, {
      opacity: 0, scale: 0.92,
      duration: 1.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.fc-section', start: 'top 90%' },
    });
  }

  /* ── fp-section: headline fade in ── */
  const fpHeadline = document.querySelector('.fp-headline-block');
  if (fpHeadline) {
    gsap.from(fpHeadline, {
      opacity: 0, y: 40, filter: 'blur(8px)',
      duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.fp-section', start: 'top 80%' },
    });
  }

  /* ── fp-section: products stagger reveal → then start float ── */
  const fpItems = [...document.querySelectorAll('.fp-item')];
  if (fpItems.length) {
    /* Depth config: 1=closest, 3=furthest */
    const depthOpacity    = { '1': 0.95, '2': 0.58, '3': 0.35 };
    const depthInitScale  = { '1': 0.55, '2': 0.38, '3': 0.22 }; /* 遠的從更小縮放進來 */
    const depthFinalScale = { '1': 1.00, '2': 0.88, '3': 0.76 }; /* 停在不同大小強調距離 */

    fpItems.forEach(item => {
      const d = item.dataset.depth ?? '2';
      item.dataset.baseOpacity   = depthOpacity[d]    ?? 0.58;
      item.dataset.finalScale    = depthFinalScale[d] ?? 0.88;
      gsap.set(item, { opacity: 0, y: 60, scale: depthInitScale[d] ?? 0.38 });
    });

    /* Sort far→near so background items appear first */
    const sortedByDepth = [...fpItems].sort((a, b) =>
      (parseInt(b.dataset.depth) || 2) - (parseInt(a.dataset.depth) || 2)
    );

    let floatStarted = false;
    ScrollTrigger.create({
      trigger: '.fp-section',
      start: 'top 72%',
      onEnter() {
        let completed = 0;
        sortedByDepth.forEach((item, i) => {
          const targetOpacity = parseFloat(item.dataset.baseOpacity);
          const targetScale   = parseFloat(item.dataset.finalScale);
          gsap.to(item, {
            opacity: targetOpacity, y: 0, scale: targetScale,
            delay: i * 0.20,
            duration: 1.1, ease: 'back.out(1.3)',
            onComplete() {
              completed++;
              if (completed === sortedByDepth.length && !floatStarted) {
                floatStarted = true;
                initFloatingProducts();
              }
            },
          });
        });
      },
    });
  } else {
    initFloatingProducts();
  }

  /* ── fp-section: annotations stagger up ── */
  const fpAnns = [...document.querySelectorAll('.fp-ann')];
  if (fpAnns.length) {
    gsap.from(fpAnns, {
      opacity: 0, y: 20,
      duration: 0.8, stagger: 0.14, ease: 'power2.out',
      scrollTrigger: { trigger: '.fp-section', start: 'top 60%' },
    });
  }

  /* ── fp-section: SVG lines draw in ── */
  const fpLines = [...document.querySelectorAll('.fp-svglines line')];
  if (fpLines.length) {
    fpLines.forEach(line => {
      const len = 120; /* approximate pixel length */
      gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
    });
    gsap.to(fpLines, {
      strokeDashoffset: 0,
      duration: 0.7, stagger: 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: '.fp-section', start: 'top 62%' },
    });
  }

  /* ── fp-section: watermark parallax ── */
  const fpWm = document.querySelector('.fp-watermark');
  if (fpWm) {
    gsap.to(fpWm, {
      y: -80, ease: 'none',
      scrollTrigger: { trigger: '.fp-section', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
    });
  }

  /* ── bv-section: title fade up ── */
  const bvTitle = document.querySelector('.bv-title');
  if (bvTitle) {
    gsap.from([document.querySelector('.bv-label'), bvTitle, document.querySelector('.bv-desc')].filter(Boolean), {
      opacity: 0, y: 36, filter: 'blur(5px)',
      duration: 1.0, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.bv-section', start: 'top 82%' },
    });
  }

  /* ── bv-section: background parallax zoom ── */
  const bvBgImg = document.querySelector('.bv-bg__img');
  if (bvBgImg) {
    gsap.fromTo(bvBgImg,
      { scale: 1 },
      {
        scale: 1.07,
        ease: 'none',
        scrollTrigger: {
          trigger: '.bv-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }

  /* ── bv-section: info cards stagger fade-up ── */
  const bvInfoCards = [...document.querySelectorAll('.bv-card')];
  if (bvInfoCards.length) {
    gsap.from(bvInfoCards, {
      opacity: 0, y: 56,
      duration: 0.9, ease: 'power2.out',
      stagger: 0.20,
      scrollTrigger: { trigger: '.bv-cards', start: 'top 85%' },
    });
  }

  /* ── News watermark float-up ── */
  const newsWm = document.querySelector('.news-watermark');
  if (newsWm) {
    gsap.from(newsWm, {
      y: 80, opacity: 0,
      duration: 1.4, ease: 'power3.out',
      scrollTrigger: { trigger: '.news-container', start: 'top 80%' },
    });
  }

  /* ── News label fade-in ── */
  const newsLabel = document.querySelector('.news-label');
  if (newsLabel) {
    gsap.from(newsLabel, {
      y: 20, opacity: 0,
      duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.news-container', start: 'top 88%' },
    });
  }
}

/* ============================================================
   CSS IntersectionObserver fallback（無 GSAP 時使用）
   ============================================================ */
function initCSSAnimations() {
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

  /* Fallback: make fp-items visible immediately and start float */
  initFloatingProducts();

  const revealSelectors = [
    '.section-header', '.category-card',
    '.editorial__img-col', '.editorial__text-col',
    '.stat', '.news-title', '.news-desc', '.newsletter__form',
    '.footer-brand', '.footer-col',
    '.brand-phil__img-col', '.brand-phil__text-col',
    '.fp-headline-block', '.fp-ann', '.bv-card',
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
   視覺動態：Header scroll + 動畫初始化入口
   ============================================================ */
function initScrollEffects() {
  const header = document.getElementById('siteHeader');
  if (header) {
    const heroEl = document.getElementById('heroCarousel');
    if (heroEl) {
      /* 首頁：hero 底部離開 viewport 後才切換 scrolled */
      const onScroll = () => {
        header.classList.toggle('scrolled', heroEl.getBoundingClientRect().bottom <= 0);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); /* 初始化立即執行一次 */
    } else {
      /* 非首頁：直接套用白色 header */
      header.classList.add('scrolled');
    }
  }

  if (typeof gsap !== 'undefined') {
    initGSAPAnimations();
  } else {
    initCSSAnimations();
  }
}

/* ============================================================
   頁面偵測與初始化
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();

  /* 會員 Header UI */
  if (typeof Auth !== 'undefined') Auth.updateHeaderUI();

  const path = location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
    initLoadingAnimation();
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
