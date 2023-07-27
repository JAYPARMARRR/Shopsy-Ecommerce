import {useState} from 'react'
import Navbar from './Componentes/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Componentes/Shop';
import About from './Componentes/About';
import Home from './Componentes/Home';
import Item from './Componentes/item';
import Cart from './Componentes/Cart';
import MainHome from './Componentes/MainHome';


const App = () => {
  const[ cartItem , setcartItem] = useState([])
  
  console.log(cartItem,">>>>>>");
  return (
    <div>
      <BrowserRouter>
        <Navbar cartItem={cartItem} />
        <Routes>
          
          <Route path='/' element={<MainHome/>} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Shop' element={<Shop setcartItem={setcartItem} />} />
          <Route path='/About' element={<About />} />
          <Route path='/item' element={<Item />} />
          <Route path='/cart' element={<Cart  />} />
        </Routes>



      </BrowserRouter>


    </div>
  )
}

export default App