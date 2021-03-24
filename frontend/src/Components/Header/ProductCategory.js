import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import axios from "axios";
function ProductCategory() {
  const [productCategory, SetProductCategory] = useState([]);

  useEffect(async () => {
    axios
      .get("http://localhost:5000/product-category")
      .then((product) => {
        SetProductCategory(product.data);
        console.log(product.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(productCategory);

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

  function getparentCategories() {
    const parentCategory = productCategory.filter((parentscategory) => {
      return parentscategory.parent == null;
    });
    return parentCategory;
  }
  function getSubCategories(parentCategory, subcategorylevel) {
    console.log(parentCategory);
    const subCategories = productCategory.filter((subcategory) => {
      console.log(subcategory.path.includes(parentCategory));
      return (
        subcategory.path.includes(parentCategory) &&
        subcategory.parent !== null &&
        countcategory(subcategory.path) === subcategorylevel + 1
      );
    });

    console.log(subCategories, productCategory);
    return (
      <ul>
        {subCategories.map((subcategory) => {
          return <li>{subcategory.category + "1"}</li>;
        })}
      </ul>
    );
  }
  return (
    <div>
      <ul>
        {getparentCategories().map((products) => {
          return (
            <>
              <li key={products._id}>
                <NavLink activeClassName="active" to={products.path}>
                  {products.category}
                </NavLink>
                {getSubCategories(products.path, 1)}

              </li>

              {getSubCategories(products.path, 2)}

            </>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductCategory;
