/* ============================================================
   資料庫 — 使用 lowdb（JSON 檔案，純 JS，無需編譯）
   ============================================================ */

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir   = join(__dirname, 'data');
mkdirSync(dataDir, { recursive: true });

const adapter = new JSONFile(join(dataDir, 'shop.json'));
const DEFAULT  = { products: [], orders: [], _seq: { products: 0, orders: 0 } };

const db = new Low(adapter, DEFAULT);
await db.read();

/* 確保所有 key 都存在（升級舊資料） */
db.data.products ??= [];
db.data.orders   ??= [];
db.data._seq     ??= { products: 0, orders: 0 };
await db.write();

/* 自動遞增 ID */
export function nextId(col) {
  db.data._seq[col] = (db.data._seq[col] || 0) + 1;
  return db.data._seq[col];
}

export default db;
