import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({cartItem}) => {
  const navigate = useNavigate();

  // const jayu = ()=>{
  //     console.log("> Hey i am cart");
  // }

  return (
    <div id="main">
      <nav>
        <h1 className="Shopsy-logo">Jayu Parmar</h1>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <div className="save-but">
            <div style={{ position: "relative" }}>
              <FaShoppingCart
                id="cart"
                onClick={() => {
                  navigate("/cart");
                }}
              />
              <span className="cart">{cartItem.length}</span>  
            </div>
          </div>
        </ul>

        <button id="btn">
          <p>Log in!</p>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
