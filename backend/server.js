/* ============================================================
   布落之處後端 API — server.js
   啟動：node server.js
   開發：npm run dev
   ============================================================ */

import express  from 'express';
import cors     from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import productsRouter from './routes/products.js';
import ordersRouter   from './routes/orders.js';
import adminRouter    from './routes/admin.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

/* API 路由 */
app.use('/api/products', productsRouter);
app.use('/api/orders',   ordersRouter);
app.use('/api/admin',    adminRouter);

/* 靜態檔案（前台 + 後台） */
app.use(express.static(join(__dirname, '..')));

/* 404 */
app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, message: '找不到此路由' });
  }
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`\n✅ 布落之處後端已啟動`);
  console.log(`   前台：http://localhost:${PORT}`);
  console.log(`   後台：http://localhost:${PORT}/admin/login.html`);
  console.log(`   API： http://localhost:${PORT}/api\n`);
});
