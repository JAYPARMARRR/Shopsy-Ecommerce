import React from "react";
import cartImg from "../Componentes/img/Vector.jpg";
import Logoimg from "./img/home-heding.png"
import Heding2 from "./img/Heding2.png"

import "./MainHome.css";
import { useNavigate } from "react-router-dom";
const MainHome = () => {




const navigate = useNavigate()  
  return (
    <div id="home-box">
      <div>
        <img src={cartImg} alt="Not" id="#main-img" />;
      </div>

      <div id="right-sede-home-box">

      <h1 >
       <span><img src= {Logoimg }alt="Not" id="img-jayu-shop-home" /></span>
      </h1>



      <h2 >
        <img src={Heding2} alt="not"  id="heding-2" />
      </h2>
      <p id="pericarp-home1">
        <span>Jayu Shop</span> is a one-stop online platform for all of your
        Shopping hauls! Browse over more than 100+ products from 40+ popular and
        trending brands. so Explore your ecstacy and lifetsyle flourishment at Jayu shop
      </p>


 <div id="main-button">
 <button id="main-b">
  <p onClick={()=>{navigate('/About')}} >About us!</p>
</button>
 <button id="main-b">
  <p id="main-home-button" onClick={()=>{navigate('/Shop')}}>Shop New!</p>
</button>


 </div>
      </div>
    </div>
  );
};

export default MainHome;
