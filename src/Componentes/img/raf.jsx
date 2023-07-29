import React from "react";

const raf = () => {
  return (
    <div>
        {/* //////////////////////////////////////////// */}
      <div id="lift-side-box-about">
        <h1 id="about-heding-jayu">Jayu Parmar</h1>
        <p id="about-heding-font">Front-end developer</p>

        <p id="peracef-of-about">
          I am a <span id="peracef-about-span"> Web developer</span> who is
          proficient in both back-end and front-end frameworks. My passion lies
          in learning about the latest technologies
        </p>

        <h6 id="about-email">
          <span id="about-email-span">Email😀</span>: jayuparmar717@gmail.com
        </h6>
        <h6 id="about-phone">
          {" "}
          <span id="about-phone-span">Phone📞</span>: +95 10923353
        </h6>

        <button id="button-about">
          <p>Get Started</p>
        </button>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="circle-image">
  <img src={JayulImg} alt="Placeholder" />
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

             <div></div>
    </div>
  );
};

export default raf;
