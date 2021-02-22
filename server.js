const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// 
const isDev = process.env.NODE_ENV === 'production' ? 'mongodb://localhost/social-network-thoughts' : process.env.MONGODB_URI;

mongoose.connect(isDev, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
