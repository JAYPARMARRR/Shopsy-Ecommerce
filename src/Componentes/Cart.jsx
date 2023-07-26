import "./Cart.css";
import cartImg from "../Componentes/img/5465858.png";
import React from "react";
{
  /* <img src={cartImg} alt="Not"  id='cart-img'/>      */
}

const Cart = () => {
  return (
    <div>
      <div>
        <div>
          <img src={cartImg} alt="Not" />;
        </div>
        {/* ///////////////////////////////////////////////////////////////////// */}
        <div>
          <h1>title</h1>
            <h3>$88.26</h3>
            <h5>discountPercentage <span>12.69</span></h5>
            <h5>stock <span>94</span></h5>

            <p>An apple mobile which is nothing like apple</p>
          </div>
          <button id="cart-buttun">
            <p>Proceed To Buy</p>
          </button>
        </div>
      </div>
  );
};

export default Cart;
