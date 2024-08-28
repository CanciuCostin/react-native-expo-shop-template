var data = require('./DummyDataArrays.js');

const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
  res.json(data.DUMMY_PRODUCTS);
});

app.get('/categories', (req, res) => {
  res.json(data.DUMMY_CATEGORIES);
});

app.get('/tags', (req, res) => {
  res.json(data.DUMMY_CATEGORY_TAGS);
});

// Start Server
app.listen(port, () => {
  console.log(`API listening at http://0.0.0.0:${port}`);
});
