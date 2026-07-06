import { Router } from 'express';
import db from '../database.js';

const router = Router();

/* GET /api/products */
router.get('/', (req, res) => {
  let list = db.data.products;
  if (req.query.category) list = list.filter(p => p.category === req.query.category);
  if (req.query.featured)  list = list.filter(p => p.featured);
  res.json({ success: true, data: list });
});

/* GET /api/products/:id */
router.get('/:id', (req, res) => {
  const p = db.data.products.find(p => p.id === parseInt(req.params.id));
  if (!p) return res.status(404).json({ success: false, message: '找不到此商品' });
  res.json({ success: true, data: p });
});

export default router;
