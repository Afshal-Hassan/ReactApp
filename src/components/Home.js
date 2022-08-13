import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Banner from "./Banner.png"
import Switch from "@mui/material/Switch";
import DarkModeContext from "./DarkModeContext";
import { useContext } from "react";
import { style } from "@mui/system";
export default function Home(){

    const {navbarBorder,textColor,ToggleMode,homeBackground,home} = useContext(DarkModeContext);

    
    return(

        <div className="Home" >
           <img src={Banner} alt="logo" className="banner" />
            <Link className="Signup1" to="/signup" ><span></span>SignUp</Link>
            <Link className="Login" to="/login" ><span id="Login-span"></span>Login</Link>
        </div>
    );
}