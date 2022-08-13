import React, { Component, useEffect, useState } from 'react'
import './Findload.css'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import emailjs from '@emailjs/browser';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, Route } from 'react-router-dom';



export default function Findload() {

    const [vehicle, setVehicle] = useState();
    const [pointOfLoading, setPointOfLoading] = useState();
    const [pointOfDelivery, setPointOfDelivery] = useState();
    const [productWeight, setProductWeight] = useState();
    const [timeOfLoading, setTimeOfLoading] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [shipperEmail, setShipperEmail] = useState();

    const history = useHistory();
    const url = `http://localhost:8080/postload/${phoneNo}/${pointOfDelivery}/${pointOfLoading}/${productWeight}/${timeOfLoading}/${vehicle}/${shipperEmail}`;

    useEffect(() => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let current = month + "-" + day + "-" + year;
        //  if (localStorage.getItem('email')) {
        //   if (localStorage.getItem("userType") == "Broker" || localStorage.getItem("userType") == "Transporter") {
        //    let subscriptionDate1 = localStorage.getItem("Subscription Date");

        //   var currentDate = new Date(current);
        //  var SubscriptionDate2 = new Date(subscriptionDate1);



        // To calculate the time difference of two dates
        //     var Difference_In_Time = currentDate.getTime() - SubscriptionDate2.getTime();

        // To calculate the no. of days between two dates
        //   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //    console.log(Difference_In_Days);
        //    if (Difference_In_Days > 30) {
        //       console.log("Yes Over");
        //       history.push('./login-arabic');
        //   }
        //   else {
        //       history.push('./postload-arabic');
        //  }



        // }
        // else {
        //  history.push('./postload-arabic');
        //  }



        //  }
        //  else {
        //  history.push('./login-arabic');

        // }
    }, [])




    const onchangePointOfDelivery = (event) => {
        setPointOfDelivery(event.target.value);
    }
    const onchangeShipperEmail = (event) => {
        setShipperEmail(event.target.value);
    }
    const onchangePhoneNo = (event) => {
        setPhoneNo(event.target.value);
    }
    const onchangeTimeOfLoading = (event) => {
        setTimeOfLoading(event.target.value);
    }

    const onchangeProductWeight = (event) => {
        setProductWeight(event.target.value);
    }

    const onchangePointOfLoading = (event) => {
        setPointOfLoading(event.target.value);
    }

    const onchangeVehicle = (event) => {
        setVehicle(event.target.value);
    }

    const SubmitLoad = (e) => {
        e.preventDefault();
        axios.post(url).then((response) => {
            console.log(response);
            if (response.data == "Saved Successfully") {

                emailjs.sendForm('service_9hww3zi', 'template_7qk1n7m', e.target, 'eGWgHRaCoCFJzaDKl').then((res) => {
                    console.log(res);
                })
               
                toast.success("Successfully Loaded", {
                    position: "top-right"
                });
            }
            else{
                toast.error("Enter correct Shipper Email",{
                    position:"top-right"
                })
            }
           
        }).catch((error)=>{
            console.log(error);
            toast.error("Request Failed", {
                position: "top-right"
            });
            toast.info("Might be some problem from server", {
                position: "top-right"
            });
            
        })
    }

    return (
        <div className='FindLoadModule'>
            
            <div className='container'>
            <ButtonGroup variant="outlined" aria-label="outlined button group" id="ButtonGroupAllPost">
                    <Button id='buttonGroup1'color='primary' variant='outlined'><a href="/getallpostload-arabic" id='link1'>احصل على كل ما بعد التحميل</a></Button>
                    <Button id="buttonLCL" color='warning' variant='outlined'><Link to="/sharecontainer-arabic" id='link2'>مشاركة الحاوية</Link></Button>
                </ButtonGroup>
                <h1 id='FindLoad-h1'>نشر تحميل</h1>
                <form id='postLoadForm' onSubmit={SubmitLoad}>
                    <input type='text' placeholder='نوع السيارة' name='vehicle' onChange={onchangeVehicle} value={vehicle} id="name" />
                    <input type='text' placeholder='نقطة التحميل' name='Pol' onChange={onchangePointOfLoading} value={pointOfLoading} id="location" />
                    <input type='text' placeholder='نقطة التسليم' name='Pod' onChange={onchangePointOfDelivery} value={pointOfDelivery} id="shipper-name" />
                    <input type='text' placeholder='وزن المنتج (بالكيلوغرام)' name='Pw' onChange={onchangeProductWeight} value={productWeight} id="product-weight" />
                    <label for="وقت التحميل" id='label-time-of-loading'>TimeOfLoading</label>
                    <input type='time' placeholder='Time of Loading' name='Timeloading' onChange={onchangeTimeOfLoading} value={timeOfLoading} id="time-of-loading" />
                    <input type='tel' placeholder='رقم الهاتف' name='Pn' onChange={onchangePhoneNo} value={phoneNo} id="phone-no" />
                    <input type="email" placeholder='بريدك الإلكتروني' name='shipper-email' value={shipperEmail} onChange={onchangeShipperEmail} id="shipperEmail" />
                    <Button id='buttonGroup1Post'color='primary' variant='outlined'type='submit'>إرسال</Button>
                </form>
            </div>
            <ToastContainer />


        </div>
    );
}