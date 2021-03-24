const mongoose = require("mongoose");
const ProductsCategoryModel = require("../Models/ProductCategory");
const ProductsCategory = (req, res) => {
  console.log("product category get request");

  ProductsCategoryModel.find({}, (error, allcategories) => {
    if (error) {
      res.send(error);
      //getSubCategories();
    } else {
      //res.send(allCategory);
      const categories = getCategories(allcategories);
      res.send(allcategories);
    }
  }).sort({ path: 1, categorylevel: 1 });
};

const getCategories = (allcategories) => {
  const parentCategories = allcategories.filter((categories) => {
    return categories.parent == null;
  });

  const subcategory = parentCategories.map((categories) => {
    const category1 = allcategories.filter((categories1) => {
      if (categories.parent != null) {
        return categories1.parent;
        //console.log(categories.path.includes(categories1.parent))
      }
    });
    return category1;
  });

  return subcategory;
};

const addNewProductCategory = (req, res) => {
  console.log("post request");

  let Categorydata = new ProductsCategoryModel(req.body);
  console.log(req.body);
  Categorydata.save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((error) => {
      res.status(400).send("unable to save to database", error);
    });
};

module.exports = {
  ProductsCategory,
  addNewProductCategory,
};
