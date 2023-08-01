import  { useEffect } from "react";
import axios from "axios";
import "./Shop.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






// eslint-disable-next-line react/prop-types
const Shop = ({cartItem, setcartItem}) => {
  const [products, setProducts] = useState([]);

  const navigate= useNavigate()


  
  
  
  useEffect(() => {
    data();
  }, []);


  

  const data = async () => {
    try {
      const rep = await axios.get("https://dummyjson.com/products");
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", rep.data);
      setProducts(rep?.data?.products);
    } catch (error) {
      console.error("Error>>>>>>>>>>>>>>>>", error);
    }
  };

  const AddCart = (a) => {
    console.log(cartItem);
      if(!cartItem.map((e) => e.id).includes(a.id)){
        setcartItem((items) => [...items, a]);
      }


  };

  

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
              <button onClick={() => navigate('/item', {state:item.id})} id="btn1"><p>Details</p></button>
              
              <button id="btn2" onClick={ ()=>AddCart(item)}><p>Add to cart</p></button>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Shop;
