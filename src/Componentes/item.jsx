import { useLocation } from "react-router-dom";
import React, {  useState } from "react";
import axios from "axios";
import "../Componentes/Item.css";
import jayu from "../Componentes/img/2.jpg";
const Item = () => {


const [loc , setloc] = useState()



  const location = useLocation();
// console.log(">>>>",location.state);
setloc(location.state)
console.log(loc);

  return (
    <div>
      <div className="main-item-box">
        <div className="left-side-main-box">
          <div className="mine-img-box">
            <div className="side-4-img">
              <img src={jayu} alt="Not" className="img2" />
              <img src={jayu} alt="Not" className="img2" />
              <img src={jayu} alt="Not" className="img2" />
              <img src={jayu} alt="Not" className="img2" />
            </div>

            <div>
              <img src={jayu} alt="Not" id="img" />
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        <div className="right-side-main-box">
          <div>
            <h1 id="heding-right-side-box">iphone x </h1>
            <p id="brand-right-side-box"> by Apple</p>

          </div>

          <div>

            <h1 id="price-right-side-box">$717.25</h1>
            <p id="description">An apple mobile which is nothing like apple</p>
          </div>
          <button id="Cart">
            <p>Add To Cart!</p>
          </button>


        </div>
      </div>
    </div>
  );
};

export default Item;
