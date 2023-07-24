import React from 'react'
import BoxImg from "../Componentes/img/2.jpg"
import "./Shop.css"

const Shop = () => {
  // https://dummyjson.com/products


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