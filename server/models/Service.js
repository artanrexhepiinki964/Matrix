const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

module.exports = model('Service', serviceSchema);
