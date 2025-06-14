const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = model('ContactMessage', messageSchema);
