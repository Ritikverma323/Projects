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

  function getproductCategory(productCategory) {
    return (
      <ul className={`categories__${ productCategory[0] != undefined
        ? productCategory[0].categorylevel
        : ""}`}>
        {console.log(
          productCategory[0] != undefined
            ? productCategory[0].categorylevel
            : ""
        )}

        {productCategory.map((categories,categoryindex) => {
          console.log(categories);
          return (
            <li className={` subcategories subcategories__${categoryindex}`}>
              <NavLink
                activeClassName="active"
                to={`/products/categories/${categories.path.replace(
                  /,/g,
                  "/"
                )}`}
              >
                {categories.categoryname}
              </NavLink>

              {
                //categories.subcategories
                categories.subcategories !== undefined
                  ? getproductCategory(categories.subcategories)
                  : ""
              }
            </li>
          );
        })}
      </ul>
    );
  }

  return <React.Fragment>
    <nav>{getproductCategory(productCategory)}</nav>
    </React.Fragment>
}

export default ProductCategory;
