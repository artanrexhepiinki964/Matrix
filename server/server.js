const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const servicesRouter = require('./routes/services');
const contactRouter = require('./routes/contact');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('MongoDB connected');
  const Service = require('./models/Service');
  const count = await Service.countDocuments();
  if (count === 0) {
    await Service.insertMany([
      { title: 'Web Design', description: 'Modern responsive websites', price: 1000 },
      { title: 'Brand Identity', description: 'Logo and brand systems', price: 800 },
      { title: 'SEO Optimization', description: 'Improve search rankings', price: 600 },
    ]);
    console.log('Seeded services collection');
  }
});

app.use('/api/services', servicesRouter);
app.use('/api/contact', contactRouter);

// Future hooks: authentication, admin panel, AI chat widget

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
