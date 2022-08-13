import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from './logo.png'



export default function Navbar() {
   

  
 

    



    return (
        <div className='Navbar' id='NavbarId' >
            <div className='logo'>
                <img src={logo} className='MainApp-logo' alt='logo' />
            </div>
            <div>
                <ul className='ul-nav'>
                    <li className='item' >
                        <Link to='/home' >Home</Link>
                    </li>
                    <li className='item'><Link to="/getallpostload" >LoadBoared</Link></li>
                    <li className='item' >
                        <Link to='/postload' >PostLoad</Link>
                    </li>
                    <li className='item'><Link to="/contact" >Contact</Link></li>
                    <li className='item'><Link to="/payment" >Payment</Link></li>

                    <li className='item'><Link to='/aboutus' >About us</Link></li>
                    <li className='item'><Link to='/termsandconditions' >Terms And Conditions</Link></li>
                </ul>
            </div>
        </div>
    );
} 