import { useEffect, useState } from "react";
import "../Componentes/Item.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Item = () => {
  const [itemm, setitemm] = useState({});

  const location = useLocation();

  const itemFetch = async () => {
    try {
      const rep2 = await axios.get(
        `https://dummyjson.com/products/${location?.state}`
      );

      setitemm(rep2.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    itemFetch();
  }, []);

  console.log("itemm", itemm);

  return (
    <div>
      <div className="main-item-box">
        <div className="left-side-main-box">
          <div className="mine-img-box">
            <div className="side-4-img">
              
              {Array.isArray(itemm?.images) ? (
                itemm?.images?.map((url) => {
                  return <img src={url} alt="Not" className="img2" />;
                })
              ) : (
                <img src={itemm?.images} alt="Not" className="img2" />
              )}
            </div>

            <div>
              {Array.isArray(itemm?.images) ? (
                <img src={`${itemm?.images[0]}`} alt="Not" id="img" />
              ) : (
                <img src={itemm?.images} alt="Not" className="img2" />
              )}
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        <div className="right-side-main-box">
          <div>
            <h1 id="heding-right-side-box">{itemm?.title}</h1>
            <p id="brand-right-side-box"> by {itemm?.brand}</p>
          </div>

          <div>
            <h1 id="price-right-side-box">${itemm?.price}</h1>
            <p id="description">{itemm?.description}</p>
          </div>
          <button id="Cart">
            <p>Add To Cart!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
