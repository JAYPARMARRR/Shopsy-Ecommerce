// import HomeImg from "../Componentes/img/girl-Photo.png";
import GifHome from "./img/home-main-gif.gif"
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {

 
const navugate = useNavigate()

  return (
    <div id="main-home">
      <div id="left-home">
        <img src={GifHome} alt="Not" id="GifHome" />
        <h1 id="home-heding">Save <span>35%</span></h1>
        <button id="home-button-shop-right" onClick={()=>{navugate("/Shop")}} ><p>Shop Right Now</p></button>
      </div>


    </div>
  );
};

export default Home;
