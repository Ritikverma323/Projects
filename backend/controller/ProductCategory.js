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
      res.send(categories);
    }
  }).sort({ path: 1, categorylevel: 1 });
};

const getsucategories = (parentcategory, allcategories) => {
  let subcategory = allcategories.map((subcategories) => {
    if (subcategories.parent == parentcategory.path) {
      if (getsucategories(subcategories, allcategories).length) {
        return {
          categoryname: subcategories.category,
          path: subcategories.path,
          categorylevel:subcategories.categorylevel,
          subcategories: getsucategories(subcategories, allcategories)
        };
      } else {
        return {
          categoryname: subcategories.category,
          path: subcategories.path,
          categorylevel:subcategories.categorylevel

        };
      }
    }
  });

  // if subcategory have undefined and null value
  subcategory = subcategory.filter((categories) => {
    console.log(categories);
    if (categories) {
      return categories;
    }
  });

  return subcategory;
};

const getCategories = (allcategories) => {
  const categoryobject = [];
  allcategories.map((parentcategory) => {
    if (parentcategory.parent == null) {
      categoryobject.push({
        categoryname: parentcategory.category,
        path: parentcategory.path,
        categorylevel:parentcategory.categorylevel,
        subcategories: getsucategories(parentcategory, allcategories)
      });
    }
  });

  return categoryobject;
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
