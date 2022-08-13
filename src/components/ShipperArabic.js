import React from 'react';
import './Shipper.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, Route } from 'react-router-dom';
import GetAllShipper from './GetAllShipper';
import PostLoadNavBar from './PostLoadNavBar';
import { Switch } from 'react-router-dom';
import UpdateShipper from './UpdateShipper';
import axios from "axios";



export default function Shipper() {

    const [shipper, setShipper] = useState();
    const url= `http://localhost:8080/findshipper/${shipper}/Shipper`;
    
    const [shipperCompany, setShipperCompany] = useState();
    const [shipperLocation, setShipperLocation] = useState();

    const search=(e)=>{
        
        axios.get(url).then((res)=>{
            console.log(res);
            let div=document.createElement("div");
            div.innerHTML=`${res.data}`
            document.getElementById("searchedShipper").appendChild(div);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const onchangeShipperLocation = (event) => {
        setShipperLocation(event.target.value);
    }

    const onchangeShipperCompany = (event) => {
        setShipperCompany(event.target.value);
    }
    const onchangeShipper = (event) => {
        setShipper(event.target.value);
    }



    return (
        <>
         <div id='ShipperModule'>
            <div id="container-shipper">
                <h1 id='Shipper-h1'>الشاحن</h1>
                <input type='email' placeholder='البريد الإلكتروني للشاحن' name='ShipperName' onChange={onchangeShipper} value={shipper} id="shipper-module-name" />
                <Button value="Submit" variant="outlined"   color="success" id="Search-Submit" onClick={search}>Search</Button>
                <div id='searchedShipper'></div>
                </div>
</div>
        </>
       
    );
}