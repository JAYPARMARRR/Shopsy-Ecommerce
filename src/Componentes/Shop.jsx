import React, { useEffect } from "react";
import axios from "axios";

// import BoxImg from "../Componentes/img/2.jpg";
import "./Shop.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const navigate= useNavigate()

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    try {
      const rep = await axios.get("https://dummyjson.com/products");
      // console.log(">>>>>>>>>>>", rep.data);
      setProducts(rep?.data?.products);
    } catch (error) {
      console.error("Error>>>>>>>>>>>>>>>>", error);
    }
  };

  // console.log("products", products);

  return (
    <div className="mine-div">
      {products?.map((item, index) => {
        return (
          <div key={index} className="mine-box">
            <div className="img-main">
              <img src={item.images[0]} alt="My Image" className="img" />
            </div>

            <div className="card-heding">
              <h4 className="title">{item.title}</h4>
              <h4 className="price">${item.price}</h4>
            </div>
            <div className="tow-button-main">
              <button onClick={() => navigate('/item', {state:item.id})} className="btn1">Details</button>
              <button className="btn2">Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
