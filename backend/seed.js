/* 初始商品資料，執行：node seed.js */
import db, { nextId } from './database.js';

if (db.data.products.length > 0) {
  console.log(`資料庫已有 ${db.data.products.length} 筆商品，略過 seed。`);
  process.exit(0);
}

const PRODUCTS = [
  { name:'不鏽鋼壓布腳', category:'壓布腳', price:480, description:'採用高品質 304 不鏽鋼材質，精密加工製造，表面拋光處理，光滑底部確保布料順暢送進。', images:['https://picsum.photos/seed/presserfoot-a/800/960','https://picsum.photos/seed/presserfoot-b/800/960'], specs:{'材質':'304 不鏽鋼','針孔尺寸':'標準 5mm','適用機型':'通用家用縫紉機','包裝':'壓布腳 × 1','產地':'日本'}, in_stock:true, stock_count:45, featured:true, tag:'熱銷', material:'不鏽鋼' },
  { name:'通用縫紉針（10 入）', category:'針具', price:120, description:'精鋼材質製造，針尖鋒利精準，穿線流暢，耐用耐磨。適合棉質、絲質、混紡等多種布料。', images:['https://picsum.photos/seed/needle-a/800/960','https://picsum.photos/seed/needle-b/800/960'], specs:{'材質':'高碳鋼','針號':'80/12','適用布料':'棉、麻、混紡','包裝':'縫紉針 × 10','產地':'德國'}, in_stock:true, stock_count:120, featured:true, tag:null, material:'合金' },
  { name:'精密梭殼', category:'縫紉機零件', price:350, description:'高精度加工，鋅合金外殼，彈簧張力穩定，確保縫線均勻送出，延長縫紉機使用壽命。', images:['https://picsum.photos/seed/bobbin-a/800/960','https://picsum.photos/seed/bobbin-b/800/960'], specs:{'材質':'鋅合金','適用機型':'家用縫紉機 Class 15','彈簧張力':'標準','包裝':'梭殼 × 1','產地':'台灣'}, in_stock:true, stock_count:33, featured:true, tag:'新品', material:'合金' },
  { name:'棉質縫紉線 500m', category:'線材', price:85, description:'100% 純棉材質，色彩飽和不褪色，強度高、不易斷線。職人日常首選。', images:['https://picsum.photos/seed/thread-a/800/960','https://picsum.photos/seed/thread-b/800/960'], specs:{'材質':'100% 棉','長度':'500m','線號':'40S/3','顏色':'象牙白','產地':'日本'}, in_stock:true, stock_count:200, featured:true, tag:null, material:'棉質' },
  { name:'布料裁切刀', category:'其他配件', price:680, description:'工業級不鏽鋼刀片，人體工學握柄，長時間裁切不疲勞。附安全護刀套。', images:['https://picsum.photos/seed/cutter-a/800/960','https://picsum.photos/seed/cutter-b/800/960'], specs:{'材質':'不鏽鋼刀片 + ABS 握柄','刀片直徑':'45mm','適用':'多層布料','包裝':'裁刀 × 1 + 護刀套 × 1','產地':'日本'}, in_stock:true, stock_count:18, featured:true, tag:'熱銷', material:'不鏽鋼' },
  { name:'金屬線軸（6 入）', category:'線材', price:220, description:'不鏽鋼線軸，光滑表面防止線材磨損，可重複使用，一組六入超值划算。', images:['https://picsum.photos/seed/spool-a/800/960','https://picsum.photos/seed/spool-b/800/960'], specs:{'材質':'不鏽鋼','尺寸':'標準 11.7mm','適用機型':'通用','包裝':'線軸 × 6','產地':'韓國'}, in_stock:true, stock_count:75, featured:false, tag:null, material:'不鏽鋼' },
  { name:'工業用壓布腳組（12 入）', category:'壓布腳', price:890, description:'12 件套組合，包含直線、拉鍊、卷邊等多種功能壓布腳，附精緻收納盒。', images:['https://picsum.photos/seed/industrial-a/800/960','https://picsum.photos/seed/industrial-b/800/960'], specs:{'材質':'合金鋼','組合內容':'12 種壓布腳','適用機型':'家用縫紉機','包裝':'壓布腳 × 12 + 收納盒','產地':'德國'}, in_stock:true, stock_count:22, featured:false, tag:'組合優惠', material:'合金' },
  { name:'鍍金縫紉針（5 入）', category:'針具', price:180, description:'表面鍍金降低摩擦力，適合高密度織物及敏感布料，延長針的使用壽命。', images:['https://picsum.photos/seed/goldneedle-a/800/960','https://picsum.photos/seed/goldneedle-b/800/960'], specs:{'材質':'高碳鋼鍍金','針號':'80/12 ～ 100/16','適用布料':'絲、薄棉、針織','包裝':'縫紉針 × 5','產地':'日本'}, in_stock:true, stock_count:60, featured:false, tag:'精品', material:'鍍金' },
  { name:'高速梭床', category:'縫紉機零件', price:1200, description:'精密製造，耐磨耐熱，最高支援 1500 RPM，大幅提升縫製效率。', images:['https://picsum.photos/seed/shuttle-a/800/960','https://picsum.photos/seed/shuttle-b/800/960'], specs:{'材質':'強化合金','適用轉速':'最高 1500 RPM','適用機型':'工業縫紉機','包裝':'梭床 × 1','產地':'日本'}, in_stock:false, stock_count:0, featured:false, tag:'預購中', material:'合金' },
  { name:'彈性縫紉線 200m', category:'線材', price:150, description:'高彈性纖維，適合針織、彈性布料縫製，伸縮回彈性優異。', images:['https://picsum.photos/seed/elasticthread-a/800/960','https://picsum.photos/seed/elasticthread-b/800/960'], specs:{'材質':'Polyester 彈性纖維','長度':'200m','延伸性':'120%','顏色':'白色','產地':'台灣'}, in_stock:true, stock_count:90, featured:false, tag:null, material:'棉質' },
  { name:'拉鍊壓布腳', category:'壓布腳', price:320, description:'可調節左右位置，適用於隱形拉鍊及普通拉鍊縫製，安裝方便。', images:['https://picsum.photos/seed/zipper-a/800/960','https://picsum.photos/seed/zipper-b/800/960'], specs:{'材質':'鋅合金','可調節範圍':'左右各 7mm','適用機型':'家用縫紉機','包裝':'拉鍊壓布腳 × 1','產地':'韓國'}, in_stock:true, stock_count:40, featured:false, tag:null, material:'合金' },
  { name:'精密送布牙', category:'縫紉機零件', price:560, description:'精密鋸齒設計，特殊硬化處理增加耐磨性，確保布料均勻穩定送進。', images:['https://picsum.photos/seed/feeddog-a/800/960','https://picsum.photos/seed/feeddog-b/800/960'], specs:{'材質':'硬化合金鋼','齒型':'7 齒標準型','適用機型':'家用縫紉機','包裝':'送布牙 × 1','產地':'德國'}, in_stock:true, stock_count:25, featured:false, tag:null, material:'合金' },
];

const now = new Date().toISOString();
for (const p of PRODUCTS) {
  db.data.products.push({ id: nextId('products'), ...p, created_at: now, updated_at: now });
}
await db.write();
console.log(`✓ 已新增 ${PRODUCTS.length} 筆商品。`);
