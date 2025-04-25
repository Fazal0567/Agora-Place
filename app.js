const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
// about page
app.set('view engine', 'ejs');
app.set('views','./views');

// // categories 
// app.set('view engine', 'ejs');
// app.set('')]

app.get('/categories', (req, res) => {
  res.render('pages/category');
}
);

app.get("/", async (req, res) => {
  try {
    // const searchQuery = req.query.q;
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
    {
      id: "",
      name: "Samsung Galaxy S23",
      description: "High-end Android phone",
      price: 899,
      image: "/images/galaxy-s23.jpg"
    },
    {
      id: "4",
      name: "Samsung Galaxy S23",
      description: "High-end Android phone",
      price: 899,
      image: "/images/galaxy-s23.jpg"
    },
    {
      id: "5",
      name: "Samsung Galaxy S23",
      description: "High-end Android phone",
      price: 899,
      image: "/images/galaxy-s23.jpg"
    },
    {
      id: "6",
      name: "Samsung Galaxy S23",
      description: "High-end Android phone",
      price: 899,
      image: "/images/galaxy-s23.jpg"
    },
    {
      id: "7",
      name: "Samsung Galaxy S23",
      description: "High-end Android phone",
      price: 899,
      image: "/images/galaxy-s23.jpg"
    },
    {
      id: "8",
      name: "Samsung Galaxy S23",
      description: "High-end Android phone",
      price: 899,
      image: "/images/galaxy-s23.jpg"
    },
];
  // if(!searchQuery){}
    res.render("pages/home", { products });
  }
  catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/about',(req, res) => {
  res.render('pages/about');
}
);


app.listen(3000, () => {
  console.log('Agora Place running on http://localhost:3000');
});
