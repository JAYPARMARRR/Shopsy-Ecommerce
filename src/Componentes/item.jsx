import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "../Componentes/Item.css";
import jayu from "../Componentes/img/2.jpg";
const Item = () => {
  // const location = useLocation();
  // console.log(location);

  // useEffect(() => {
  //   data2();
  // }, []);

  // const data2 = async () => {
  //   try {
  //     const rep2 = await axios.get("https://dummyjson.com/products/1");
  //     console.log(">>>>>>>>>>>", rep2);
  //   } catch (error) {
  //     console.error("Error>>>>>>>>>>>>>>>>", error);
  //   }
  // };

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
