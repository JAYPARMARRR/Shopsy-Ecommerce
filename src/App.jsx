import React from 'react'
import Navbar from './Componentes/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Componentes/Shop';
import About from './Componentes/About';
import Home from './Componentes/Home';
import Item from './Componentes/item';


const App = () => {
  return (
    <div>

  
<BrowserRouter>
      <Navbar/>
 <Routes>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Shop' element={ <Shop/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/item' element={<Item/>}/>
 </Routes>
    
 

</BrowserRouter> 
     
      
    </div>
  )
}

export default App