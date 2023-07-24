import React, { useEffect } from 'react';
import axios from 'axios';

import BoxImg from "../Componentes/img/2.jpg"
import "./Shop.css"


const Shop = () => {

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const rep = await axios.get('https://dummyjson.com/products');
      console.log('API Response:>>>>>>>>>>>', rep.data); 
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };










  return (
    <div>
      <div className='mine-box'>
        <div> 
          <img src={BoxImg} alt="My Image"  className='img' />
        </div>

        <div  className='card-heding'>
          <h4>iphone 9 </h4>
          <h4>$444.2</h4>

        </div>
        <div className='tow-button-main'>

        <button className='btn1'>Details</button>
        <button className="btn2"   >Add to cart</button>
        </div>

      </div>


    </div>
  )
}

export default Shop