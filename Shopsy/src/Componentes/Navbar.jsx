import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div id='main'>
            <nav>
                <h1 className='Shopsy-logo'> Shopsy</h1>


                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <div className='save-but'>
                        <FaShoppingCart id='cart' />
                        <FaHeart id='hart' />
                    </div>
                </ul>
                <button id='btn'>Visit Repo</button>
            </nav>

        </div>
    )
}

export default Navbar