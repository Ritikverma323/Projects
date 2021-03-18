const mongoose = require("mongoose");
const ProductsCategoryModel = require("../Models/ProductCategory");
const ProductsCategory = (req, res) => {
  console.log("product category get request");

  ProductsCategoryModel.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
};

const addNewProductCategory = (req, res) => {
  let Categorydata = new ProductsCategoryModel(req.body);
  console.log(req.body);
    Categorydata.save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
};

module.exports = {
  ProductsCategory,
  addNewProductCategory,
};
