import React from "react";
import "./About.css";
import aboutImg from "./img/-1_orig.jpeg";
import IntaImg from "./img/instagram.png"
import LinkdinImg from "./img/linkedin.png"
import GitImg from "./img/git.png"
import VercelImg from "./img/vercel.png"
import MoonlImg from "./img/Astronauts walk  ( loading ).gif"





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
      <div>
        <div id="about-main-img">
          <img src={aboutImg} alt="not " id="background-main-img" />

          <div id="tow-main" >

            <div id="lift-side-box-about">
              <h1 id="about-heding-jayu">Jayu Parmar</h1>
              <p id="about-heding-font">Front-end developer</p>

              <p id="peracef-of-about">
                I am a <span id="peracef-about-span"> Web developer</span> who is
                proficient in both back-end and front-end frameworks. My passion
                lies in learning about the latest technologies
              </p>

              <h6 id="about-email">
                <span id="about-email-span">Email😀</span>:
                jayuparmar717@gmail.com
              </h6>
              <h6 id="about-phone">
                {" "}
                <span id="about-phone-span">Phone📞</span>: +95 10923353
              </h6>

              <button id="button-about">
                <p>Get Started</p>
              </button>
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////// */}
            <div class="circular-image-container">
  <div class="circular-image"></div>
  <div class="pulsating-ring"></div>
</div>


            <div id="right-side-main">
              <h6 id="right-heding">Social Media </h6>
              <div id="icons-about">
                <img src={IntaImg} alt="Not" className="icons-about-peg"  onClick={IntaClick}  style={{ cursor: 'pointer' }}/>
                <img src={LinkdinImg} alt="Not" className="icons-about-peg" onClick={LinkdinClick}  style={{ cursor: 'pointer' }} />
                <img src={GitImg} alt="Not" className="icons-about-peg"  onClick={GitImgClick} style={{ cursor: 'pointer' }}/>
                <img src={VercelImg} alt="Not" className="icons-about-peg" id="vercel-m" onClick={VercelClick}  style={{ cursor: 'pointer' }}/>
              </div>
              <p>Send me messeng in email</p>

              <div>
                <input type="text" />
                <button>Send</button>
              </div>

             <div>
     <img src={MoonlImg} alt="not" id="Astronauts-walk"/>
             </div>





            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
