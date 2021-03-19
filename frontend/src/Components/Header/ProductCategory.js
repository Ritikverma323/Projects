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

//   console.log(productCategory);
  return (
    <div>
      <ul>
        {/* {productCategory.map((products) => {
                 //  alert(products);

           return <li>${products}</li>;
        })} */}

        {productCategory.map((products) => {
          return (
            <li key={products._id}>
              <NavLink activeClassName="active" to={products.path}>
                {products.category}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductCategory;
