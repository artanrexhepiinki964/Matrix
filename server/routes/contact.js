const router = require('express').Router();
const ContactMessage = require('../models/ContactMessage');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }
  try {
    const saved = await ContactMessage.create({ name, email, message });
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
