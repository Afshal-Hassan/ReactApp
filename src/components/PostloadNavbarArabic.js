import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import logo from './logo.png';
import { Button } from "@mui/material";
import "./PostLoadNavBar.css";

export default function PostLoadNavBar() {
    const history=useHistory();
const LogoutHandler=(e)=>{
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("userType");
    localStorage.removeItem("Subscription Date");
    localStorage.removeItem("FindContainerMatched");
    history.push('./login-arabic');

}
    return (
        <div className='Navbar' id='NavbarId' >
            <div className='logo'>
                <img src={logo} className='MainApp-logo' alt='logo' />
            </div>
            <div>
                <ul className='ul-nav'>
                    <li className='item' >
                        <Link to='/postload-arabic' >ما بعد التحميل</Link>
                    </li>
                    <li className='item'><Link to="/shipper-arabic" >الشاحن</Link></li>
                    <li className='item'><Link to="/payment-arabic" >دفع</Link></li>

                    <li className='item'><Link to='/aboutus' >من نحن</Link></li>
                    <li className='item'><Link to='/termsandconditions' >الشروط والأحكام</Link></li>
                    <Button value="Submit" variant="outlined" type="submit" color="primary" id="Logout-Submit"  onClick={LogoutHandler}>الخروج</Button>


                    
                </ul>
            </div>
        </div>
    );
}
