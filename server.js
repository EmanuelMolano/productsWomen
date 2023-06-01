import express from 'express';
const app = express();

const products = [
  {
    id: 1,
    name: 'Nike Blazer Mid 77',
    price: "$" + 115,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/280be051-5216-446e-a713-4689a4e1deb6/blazer-mid-77-womens-shoes-4ZNgBz.png',
  },
  {
    id: 2,
    name: 'Nike Free Metcon 5',
    price: "$" + 120,
    image: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/cff2e047-a357-4dc5-816d-47e28940583e/free-metcon-5-womens-training-shoes-z3mwK7.png',
  },
    {
    id: 3,
    name: 'Nike Tech Hera',
    price: "$" + 110,
    image: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/a917b369-a445-4ecc-8bef-a9c6f1b7e90a/tech-hera-womens-shoes-NjvkxR.png',
  },
    {
    id: 4,
    name: 'Nike Gamma Force',
    price: "$" + 90,
    image: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d83976d3-0d8b-4d00-9583-0b67c817e4ba/gamma-force-womens-shoes-r23Gvq.png',
  },
    {
    id: 5,
    name: 'Nike Dunk High',
    price: "$" + 125,
    image: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/9ad71871-7e85-43b2-b2fc-0591e07c5556/dunk-high-womens-shoes-w4cBNp.png',
  },
];

app.get('/productsWomen', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
