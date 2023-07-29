import React from "react";
import "./About.css";
import IntaImg from "./img/instagram.png"
import LinkdinImg from "./img/linkedin.png"
import GitImg from "./img/git.png"
import VercelImg from "./img/vercel.png"
import MoonlImg from "./img/Astronauts walk  ( loading ).gif"
import JayulImg from "./img/Jayu.jpg"




const About = () => {

  const IntaClick = () => {
   
    window.open('https://www.instagram.com/nick_owen777/', '_blank');
   
  };

  const GitImgClick = () => {

    window.open('https://github.com/JAYPARMARRR?tab=repositories', '_blank');

  };
  const LinkdinClick = () => {
    window.open('https://www.linkedin.com/in/jaykumar-vinodbhai-852823260', '_blank');
  };
  const VercelClick = () => {

    window.open('https://vercel.com/dashboard', '_blank');
    
  };



  return (
    <div>
     
    </div>
  );
};

export default About;
