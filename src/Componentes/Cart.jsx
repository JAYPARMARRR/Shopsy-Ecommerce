import "./Cart.css";
import cartImg from "../Componentes/img/5465858.png";



const Cart = () => {
  return (
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
        {/* ////////////////////////////////////// */}
        <div id="item-main-div">
          <div className="text-img">

          <img src={cartImg}  id="cartImg-img"/>
          <h4 id="titalOfCart" >MacBook Pro</h4>
          </div>
          <div>$499</div>
          <div><span>⏪</span>2<span>⏩</span></div>
          <div>$840</div>
          <div className="rimove-a-item"><span>✖</span></div>
        </div>

      </div>









      <div id="right-cart" >
        <h2 className="cart-right-heding">Order Summary</h2>
        <div className="Shipping-cart-right">
        <h5>Shipping Charg</h5>
        <h5>Free</h5>

        </div>
        <div className="Total-main-div">
          <h2>Total </h2>
          <h3>$480</h3>
        </div>
        <button>Proceed to Buy</button>
      </div>








    </div>
  );
};

export default Cart;
