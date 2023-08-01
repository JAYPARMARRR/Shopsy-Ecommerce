import React from "react";
import HomeImg from "../Componentes/img/girl-Photo.png";
import GifHome from "./img/home-main-gif.gif"
import "./Home.css";
const Home = () => {
  return (
    <div id="main-home">
      <div id="left-home">
       <img src={GifHome} alt="Not" id="GifHome" />
       <h1 id="home-heding">Save <span>35%</span></h1>
       <button id="home-button-shop-right" ><p>Shop Right Now</p></button>
      </div>


      <div id="right-home">
      <img src={HomeImg} alt="" id="HomeImg-main"  /> 

      </div>
    </div>
  );
};

export default Home;
