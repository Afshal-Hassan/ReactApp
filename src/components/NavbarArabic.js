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
                        <Link to='/arabic' >صفحة رئيسية</Link>
                    </li>
                    <li className='item'><Link to="/contact-arabic" >الاتصال</Link></li>
                    <li className='item'><Link to="/payment-arabic" >دفع</Link></li>

                    <li className='item'><Link to='/aboutus' >من نحن</Link></li>
                    <li className='item'><Link to='/termsandconditions' >الشروط والأحكام</Link></li>
                </ul>
            </div>
        </div>
    );
} 