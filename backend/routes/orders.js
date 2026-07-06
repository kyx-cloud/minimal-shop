import { Router } from 'express';
import db, { nextId } from '../database.js';

const router = Router();

function genOrderNumber() {
  const d = new Date().toISOString().slice(0,10).replace(/-/g,'');
  return `BL-${d}-${String(Math.floor(Math.random()*9000)+1000)}`;
}

/* POST /api/orders */
router.post('/', async (req, res) => {
  const { customer, items, payment_method, notes } = req.body;

  if (!customer?.name || !customer?.email || !customer?.phone || !customer?.address)
    return res.status(400).json({ success: false, message: '請填寫完整收件資料' });
  if (!items?.length)
    return res.status(400).json({ success: false, message: '購物車是空的' });

  const subtotal     = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping_fee = subtotal >= 1000 ? 0 : 80;
  const total        = subtotal + shipping_fee;
  const now          = new Date().toISOString();

  const order = {
    id:               nextId('orders'),
    order_number:     genOrderNumber(),
    customer_name:    customer.name,
    customer_email:   customer.email,
    customer_phone:   customer.phone,
    customer_address: customer.address,
    items,
    subtotal,
    shipping_fee,
    total,
    payment_method:  payment_method || 'mock_credit',
    payment_status:  '待付款',
    order_status:    '待付款',
    notes:           notes || null,
    created_at:      now,
    updated_at:      now,
  };

  db.data.orders.push(order);
  await db.write();
  res.json({ success: true, message: '訂單建立成功', data: order });
});

/* GET /api/orders/:orderNumber */
router.get('/:orderNumber', (req, res) => {
  const o = db.data.orders.find(o => o.order_number === req.params.orderNumber);
  if (!o) return res.status(404).json({ success: false, message: '找不到此訂單' });
  res.json({ success: true, data: o });
});

/* POST /api/orders/:orderNumber/pay — 模擬付款成功 */
router.post('/:orderNumber/pay', async (req, res) => {
  const o = db.data.orders.find(o => o.order_number === req.params.orderNumber);
  if (!o) return res.status(404).json({ success: false, message: '找不到此訂單' });
  if (o.payment_status === '已付款')
    return res.status(400).json({ success: false, message: '此訂單已完成付款' });

  o.payment_status = '已付款';
  o.order_status   = '處理中';
  o.updated_at     = new Date().toISOString();
  await db.write();
  res.json({ success: true, message: '付款成功！', data: o });
});

export default router;
