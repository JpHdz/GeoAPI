const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/nuevaruta', (req, res) => {
  res.json({
    name: 'product 1',
    price: 1000,
  });
});

app.get('/products', (req, res) => {
  const { number } = req.query;

  const num = number || 10;

  const products = [];
  for (let i = 0; i < num; i++) {
    products.push({
      id: i + 1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    id,
    name: 'Fuz ti',
    price: 26,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.send({
    categoryId,
    productId,
  });
});

app.get('/users', (req, res) => {
  const { username, lastname } = req.query;
  if (!username || !lastname) res.send(404);
  res.json({
    username,
    lastname,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
