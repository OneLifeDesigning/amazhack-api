const Product = require("../models/Product.model");

module.exports.list = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((e) => next(e));
};

module.exports.show = (req, res, next) => {
  Product.findOne({id: req.params._id})
    .then((product) => {
      res.json(product);
    })
    .catch((e) => next(e));
};


