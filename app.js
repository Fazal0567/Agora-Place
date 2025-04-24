const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  const products = [
    {
      id: "1",
      name: "iPhone 15",
      description: "Latest Apple iPhone",
      price: 999,
      image: "/images/iphone15.jpg"
    },
    {
      id: "2",
      name: "Samsung Galaxy S23",
      description: "High-end Android phone",
      price: 899,
      image: "/images/galaxy-s23.jpg"
    },
  ];

  res.render("pages/home", { products });
});


app.listen(3000, () => {
  console.log('Agora Place running on http://localhost:3000');
});
