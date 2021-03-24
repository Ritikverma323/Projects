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
      res.send(getparentCategories(allcategories));
    }
  });
};

function countcategory(category) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < category.length; i++) {
    // check if the character is at that position
    if (category.charAt(i) === "/") {
      count += 1;
    }
  }
  return count;
}

const getparentCategories = (allcategories) => {
  const parentCategory = allcategories.filter((categories) => {
    return categories.parent == null;
  });

  const category = parentCategory.map((categories, index) => {
    const categorylevel = 1;
    const subcategories = getSubCategories(
      categories,
      categorylevel,
      allcategories
    );

    console.log("parentcategory",parentCategory);
    console.log("subcategory",subcategories)
     if(subcategories.length){
      return (parentCategory[index].nestedsubcategory=(subcategories));

     }
     else{
      return (parentCategory);

     }
  });

  return category;
};

const getSubCategories = (parentCategory, categorylevel, allcategories) => {
  const subcategories = allcategories.filter((subcategory) => {
    return (
      subcategory.path.includes(parentCategory.path) &&
      countcategory(subcategory.path) === categorylevel + 1
    );
  });
  return subcategories;
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
