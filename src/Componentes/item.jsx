import { useLocation } from 'react-router-dom'
import React, { useEffect } from "react";


const Item = () => {
    const location= useLocation()
    console.log(location);



    useEffect(() => {
        data2();
      }, []);
    
      const data2 = async () => {

        try {
          const rep2 = await axios.get("https://dummyjson.com/products/1");
          console.log(">>>>>>>>>>>", rep2.data);
         
        } catch (error) {
          console.error("Error>>>>>>>>>>>>>>>>", error);
        }
      };
    






  return (



    <div>Item</div>



    
  )
}

export default Item