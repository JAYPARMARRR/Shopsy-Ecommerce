/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Cart.css";
// import cartImg from "../Componentes/img/5465858.png";



// eslint-disable-next-line react/prop-types
const Cart = ({ cartItem }) => {

  const [itemQuantities, setItemQuantities] = useState(() => {
    const quantities = {};
    cartItem.forEach((item) => {
      quantities[item.id] = 1;
    });
    return quantities;
  });




  const Decrease = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[itemId] = Math.max(updatedQuantities[itemId] - 1, 1);
      return updatedQuantities;
    });
  };




  const Increase = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[itemId] = updatedQuantities[itemId] + 1;
      return updatedQuantities;
    });
  };




  const filterData = () => {
    let arr = [];
    let arrId = [];
    cartItem.forEach((e) => {
      if (!arrId.includes(e.id)) {
        arr.push(e);
        arrId.push(e.id);
      }
    });
    return arr;
  };




  const totalCartPrice = filterData().reduce((total, item) => {
    const itemPrice = item.price * itemQuantities[item.id];
    return total + itemPrice;
  }, 0);






  const [showForm, setShowForm] = useState(false);
// const [name, setName] =useState("")
// const [lastName , setlastName] = useState("")
// const [email ,setemail] = useState("")
// const [phone, setphone] =useState("")
// const [totalprice, totalprice]= useState("")

  const OpanFrom = () => {
    setShowForm(!showForm);
  
  };





  return (
    <>
      <div id="cart-main">





        <div id="left-cart" >
          <h1 id="Your-cart-heding" >Your cart</h1>

          <nav id="cart-nav">

            <ul id="product-total" >
              <li id="product-left" >Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>
            </ul>

          </nav>

          {filterData().map((item, index) => {
            return (
              <div id="item-main-div" key={index}>
                <div className="text-img">
                  <img src={item.thumbnail} id="cartImg-img" />
                  <h4 id="titleOfCart">{item.title}</h4>
                </div>
                <div>${item.price}</div>
                <div>
                  <span onClick={() => Decrease(item.id)}>⏪</span>
                  {itemQuantities[item.id]}
                  <span onClick={() => Increase(item.id)}>⏩</span>
                </div>
                <div>${item.price * itemQuantities[item.id]}</div>
                <div className="remove-an-item">
                  <span>✖</span>
                </div>
              </div>
            );
          })}
        </div>










        <div id="right-cart" >
          <h2 className="cart-right-heding">Order Summary</h2>
          <div className="Shipping-cart-right">
            <h5>Shipping Charge</h5>
            <h5>Free</h5>
          </div>
          <div className="Total-main-div">
            <h2>Total</h2>
            <h3>${totalCartPrice}</h3>
          </div>
          <button id="cart-buy-button" onClick={OpanFrom}>
            <p>Proceed to Buy</p>
          </button>
        </div>



      </div>

      {showForm && (

        <div className="form-main">
        <form className="form">
          <h2>Submit a Diteles</h2>
          <div className="form-m" > 
          <label htmlFor="name">Name</label>
          <input type="text " id="name" value={name} required />

          </div>
          
        </form>
          </div>

         

      )}
    </>
  );
};

export default Cart;
