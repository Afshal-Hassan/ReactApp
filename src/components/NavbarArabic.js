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
                        <Link to='/home-arabic' >مسكن
</Link>
                    </li>
                    <li className='item'><Link to="/getallpostload-arabic" >تحميل</Link></li>
                    <li className='item' >
                        <Link to='/postload-arabic' >PostLoad</Link>
                    </li>
                    <li className='item'><Link to="/contact-arabic" >اتصال</Link></li>
                    <li className='item'><Link to="/payment" >دفع
</Link></li>

                    <li className='item'><Link to='/aboutus' >معلومات عنا
</Link></li>
                    <li className='item'><Link to='/termsandconditions' >الأحكام والشروط
</Link></li>
                </ul>
            </div>
        </div>
    );
} 