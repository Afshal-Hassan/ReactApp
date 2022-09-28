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
                        <Link to='/home-arabic' >مسكن</Link>
                    </li>
                <li className='item'><Link to="/getallpostload-arabic" >تحميل</Link></li>
                    <li className='item' >
                        <Link to='/postload-arabic' >PostLoad</Link>
                    </li>
                    <li className='item'><Link to="/payment" >دفع
</Link></li>
                    <li className='item'><Link to='/aboutus' >معلومات عنا
</Link></li>
                    <li className='item'><Link to='/termsandconditions' >الأحكام والشروط
</Link></li>
                    <Button value="Submit" variant="outlined" type="submit" color="primary" id="Logout-Submit"  onClick={LogoutHandler}>Logout</Button>


                    
                </ul>
            </div>
        </div>
    );
}
