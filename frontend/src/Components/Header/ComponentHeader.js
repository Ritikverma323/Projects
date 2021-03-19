import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProductCategory from "./ProductCategory"

function ComponentHeader() {


  return (
    <React.Fragment>
      <div>
       <ProductCategory/>
      </div>
      <div className="header__navigation">
        <input type="text" placeholder="search" />
      </div>
      <div className="header__navigation">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/clients">
              client
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/user-login">
              Login
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to="/user-register">
              Registration
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ComponentHeader;
