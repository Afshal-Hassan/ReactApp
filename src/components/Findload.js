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
import { NativeSelect, Select } from '@mui/material';




export default function Findload() {

    const [vehicle, setVehicle] = useState();
    const [pointOfLoading, setPointOfLoading] = useState();
    const [pointOfDelivery, setPointOfDelivery] = useState();
    const [productWeight, setProductWeight] = useState();
    const [timeOfLoading, setTimeOfLoading] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [shipperEmail, setShipperEmail] = useState();
    const [dateOfUploading, setDateOfUploading] = useState();
    const [select, setSelect] = useState("+92");
    const[phoneNoCustom,setCustomPhoneNo]=useState();

    const onchangePhoneNoCustom=(event)=>{
        setCustomPhoneNo(event.target.value)
    }


let date;
let day;
let month;
let year;
let current;
date = new Date();
day = date.getDate();
month = date.getMonth() + 1;
year = date.getFullYear();
current = year + "-" + +"0"+month + "-" + day;
    const history = useHistory();
    const url = `http://localhost:8080/postload/${select+phoneNo}/${pointOfDelivery}/${pointOfLoading}/${productWeight}/${timeOfLoading}/${vehicle}/${shipperEmail}/${current}/${dateOfUploading}`;

    useEffect(() => {
        
          if (localStorage.getItem('email')) {
           if (localStorage.getItem("userType") == "Broker" || localStorage.getItem("userType") == "Transporter") {
            let subscriptionDate1 = localStorage.getItem("Subscription Date");

           var currentDate = new Date(current);
          var SubscriptionDate2 = new Date(subscriptionDate1);




            var Difference_In_Time = currentDate.getTime() - SubscriptionDate2.getTime();

     
           var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if (Difference_In_Days > 30) {
               console.log("Yes Over");
               history.push('./login');
           }
           else {
               history.push('./postload');
          }



         }
         else {
          history.push('./postload');
          }



          }
          else {
          history.push('./login');

         }
    }, [])


    const onchangeDateOfUploading = (event) => {
        setDateOfUploading(event.target.value);
    }
    const onchangeSelect = (event) => {
        setSelect(event.target.value);
    }

    const onchangePointOfDelivery = (event) => {
        setPointOfDelivery(event.target.value);
    }
    const onchangeShipperEmail = (event) => {
        setShipperEmail(event.target.value);
    }
    const onchangePhoneNo = (event) => {
       setPhoneNo(event.target.value);
       console.log(select+event.target.value);

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
                toast.error("Enter your correct Email",{
                    position:"top-right"
                })
            }
           
        }).catch((error)=>{
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
                    <Button id='buttonGroup1'color='primary' variant='outlined'><Link to="/postload" id='link1'>Post Full Container</Link></Button>
                    <Button id="buttonLCL" color='warning' variant='outlined'><Link to="/sharecontainer" id='link2'>Post Share Container</Link></Button>
                </ButtonGroup>
                <h1 id='FindLoad-h1'>Post a Load</h1>
                <h4>FCL</h4>
                <form id='postLoadForm' onSubmit={SubmitLoad}>
                    <input type='text' placeholder='Type of Vehicle for example (refer 40 ft)' name='vehicle' onChange={onchangeVehicle} value={vehicle} id="name" />
                    <input type='text' placeholder='Point of Loading' name='Pol' onChange={onchangePointOfLoading} value={pointOfLoading} id="location" />
                    <input type='text' placeholder='Point of Delivery' name='Pod' onChange={onchangePointOfDelivery} value={pointOfDelivery} id="shipper-name" />
                    <input type='text' placeholder='Product Weight (in Kg)' name='Pw' onChange={onchangeProductWeight} value={productWeight} id="product-weight" />
                    <label for="TimeOfLoading" id='label-time-of-loading'>TimeOfLoading</label>
                    <input type='time' placeholder='Time of Loading' name='Timeloading' onChange={onchangeTimeOfLoading} value={timeOfLoading} id="time-of-loading" />
                    <div id='phoneNumber'>
                    <NativeSelect
                  
                  id="NativeSelectphoneNo" 
                  value={select}
                  onChange={onchangeSelect}
              >
                     <option value="+92">+92 (Pakistan)</option>
                     <option value="+91">+91 (India)</option>
                     <option value="+93">+93 (Afghanistan)</option>
                     <option value="+61">+61 (Australia)</option>
                     <option value="+994">+994 (Azerbaijan)</option>
                     <option value="+880">+880 (Bangladesh)</option>
                     <option value="+55">+55 (Brazil)</option>
                     <option value="+1">+1 (Canada)</option>
                     <option value="+86">+86 (China)</option>
                     <option value="+33">+33 (France)</option>
                     <option value="+49">+49 (Germany)</option>
                     <option value="+30">+30 (Greece)</option>
                     <option value="+62">+62 (Indonesia)</option>
                     <option value="+98">+98 (Iran)</option>
                     <option value="+964">+964 (Iraq)</option>
                     <option value="+966">+966 (Saudia Arabia)</option>
                     <option value="+363">+363 (Ireland)</option>
                     <option value="+39">+39 (Italy)</option>
                     <option value="+81">+81 (Japan)</option>
                     <option value="+965">+965 (Kuwait)</option>
                     <option value="+60">+60 (Malaysia)</option>
                     <option value="+230">+230 (Mauritius)</option>
                     <option value="+52">+52 (Mexico)</option>
                     <option value="+977">+977 (Nepal)</option>
                     <option value="+850">+850 (North Korea)</option>
                     <option value="+48">+48 (Poland)</option>
                     <option value="+974">+974 (Qatar)</option>
                     <option value="+1">+1 (USA)</option>
                     <option value="+44">+44 (UK)</option>
                     <option value="+971">+971 (UAE)</option>
                     <option value="+20">+20 (Egypt)</option>
                     <option value="+968">+968 (Oman)</option>
                     <option value="+973">+973 (Bahrain)</option>
                     <option value="+961">+961 (Lebanon)</option>
                     <option value="+963">+963 (Syria)</option>
                     <option value="+962">+962 (Jordan)</option>
                     <option value="+218">+218 (Libya)</option>
                     <option value="+90">+90 (Turkey)</option>
                     <option value="+64">+64 (NZ)</option>
              </NativeSelect>
                   <input type='tel' placeholder='Phone No' name='Pn' onChange={onchangePhoneNo} value={phoneNo} id="phone-no" /></div>
                   <input type="tel" placeholder="(Optional) Custom Phone No:  " name="PhoneNumbers" onChange={onchangePhoneNoCustom} id="phoneNo" value={phoneNoCustom} />

                    <input type="email" placeholder='Your Email' name='shipper-email' value={shipperEmail} onChange={onchangeShipperEmail} id="shipperEmail" />
                    <input type="date" placeholder='Your Email' name='date_of_uploading' value={dateOfUploading} onChange={onchangeDateOfUploading} id="shipperEmail" />

                    <Button id='buttonGroup1Post'color='primary' variant='outlined'type='submit'>Submit</Button>
                </form>
            </div>
            <ToastContainer />


        </div>
    );
}