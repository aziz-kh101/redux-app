var express = require("express");
var router = express.Router();

const listProducts = [
  {
    id: 1,
    name: "product 1",
    price: 20.0,
  },
  {
    id: 2,
    name: "product 2",
    price: 30.0,
  },
];
var lastId = 2;
const TIME_OUT = 1000;

router.get("/all", (req, res) => {
  setTimeout(() => {
    res.json(listProducts);
  }, TIME_OUT);
});

router.get("/", (req, res) => {
  const { id } = req.query;
  setTimeout(() => {
    const product = listProducts.find((value) => value.id === parseInt(id));
    if (product) {
      res.json(product);
    } else {
      res.json({});
    }
  }, TIME_OUT);
});

router.post("/", (req, res) => {
  let product = req.body;
  setTimeout(() => {
    if (product) {
      product = {
        id: ++lastId,
        ...product,
      };
      listProducts.push(product);
      res.json(product);
    } else {
      res.json({ error: "Undefined Product" });
    }
  }, TIME_OUT);
});

router.put("/:id", (req, res) => {
  const product = req.body;
  const { id } = req.params;
  const index = listProducts.findIndex((value) => value.id === parseInt(id));
  setTimeout(() => {
    if (index !== -1) {
      let p = { id: parseInt(id), ...product };
      listProducts[index] = p;
      res.json(p);
    } else {
      res.json({ error: "Undefined Product" });
    }
  }, TIME_OUT);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  setTimeout(() => {
    const index = listProducts.findIndex((value) => value.id === parseInt(id));
    if (index !== -1) {
      listProducts.splice(index, 1);
      res.json({ deleted: 1 });
    } else {
      res.json({ deleted: 0 });
    }
  }, TIME_OUT);
});

module.exports = router;
