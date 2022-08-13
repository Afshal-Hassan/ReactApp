import React, { useState } from 'react'
import FormGroup from '@mui/material/FormControl'
import Label from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Mes from '@mui/material/FormHelperText'
import "./ShareAContainer.css"
import { Button } from "@mui/material";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'

export default function ShareAContainer() {
    const history=useHistory();
    const[name,setName]=useState();
    const[point_of_delivery,setPOD]=useState();
    const[point_of_loading,setPOL]=useState();
    const[product_weight,setPW]=useState();
    const[disabledValue,setDisabled]=useState(true);
    const[phoneNo,setPhoneNo]=useState();
    const[date_of_uploading,setDOU]=useState();
    const url = `http://localhost:8080/postload/${point_of_delivery}/${point_of_loading}`;
    const url2=`http://localhost:8080/savecontainer`;
 
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
             history.push('./sharecontainer');
        }



       }
       else {
        history.push('./sharecontainer');
        }



        }
        else {
        history.push('./login');

       }
  }, [])
 

    const onChangeName=(event)=>{
        setName(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
                        if(document.getElementById("phone_No").value !=0){
                            if(document.getElementById("date_of_uploading").value !=0){
                                setDisabled(false)

                            }
                            else{
                                setDisabled(true);
                            }
                          

                        }
                        else{
                            setDisabled(true);
                        }
                       
                    }
                    else{
                        setDisabled(true);
                    }
                }
                else{
                    setDisabled(true);
                }
            }
            else{
                setDisabled(true);
            }
            
        }
        else{
            setDisabled(true);
        }
    }
    const onChangeDOU=(event)=>{

        setDOU(event.target.value);
        console.log(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
                        if(document.getElementById("phone_No").value !=0){
                            if(document.getElementById("date_of_uploading").value !=0){
                                setDisabled(false)

                            }
                            else{
                                setDisabled(true);
                            }
                          

                        }
                        else{
                            setDisabled(true);
                        }
                       
                    }
                    else{
                        setDisabled(true);
                    }
                }
                else{
                    setDisabled(true);
                }
            }
            else{
                setDisabled(true);
            }
            
        }
        else{
            setDisabled(true);
        }
    }
    const onChangePOL=(event)=>{
        setPOL(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
                        if(document.getElementById("phone_No").value !=0){
                            if(document.getElementById("date_of_uploading").value !=0){
                                setDisabled(false)

                            }
                            else{
                                setDisabled(true);
                            }
                          

                        }
                        else{
                            setDisabled(true);
                        }
                       
                    }
                    else{
                        setDisabled(true);
                    }
                }
                else{
                    setDisabled(true);
                }
            }
            else{
                setDisabled(true);
            }
            
        }
        else{
            setDisabled(true);
        }
    }
    const onChangePOD=(event)=>{
        setPOD(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
                        if(document.getElementById("phone_No").value !=0){
                            if(document.getElementById("date_of_uploading").value !=0){
                                setDisabled(false)

                            }
                            else{
                                setDisabled(true);
                            }
                          

                        }
                        else{
                            setDisabled(true);
                        }
                       
                    }
                    else{
                        setDisabled(true);
                    }
                }
                else{
                    setDisabled(true);
                }
            }
            else{
                setDisabled(true);
            }
            
        }
        else{
            setDisabled(true);
        }
    }
    const onChangePW=(event)=>{
        setPW(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
                        if(document.getElementById("phone_No").value !=0){
                            if(document.getElementById("date_of_uploading").value !=0){
                                setDisabled(false)

                            }
                            else{
                                setDisabled(true);
                            }
                          

                        }
                        else{
                            setDisabled(true);
                        }
                       
                    }
                    else{
                        setDisabled(true);
                    }
                }
                else{
                    setDisabled(true);
                }
            }
            else{
                setDisabled(true);
            }
            
        }
        else{
            setDisabled(true);
        }
    }
    const onchangePhoneNo=(event)=>{
        setPhoneNo(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
                        if(document.getElementById("phone_No").value !=0){
                            if(document.getElementById("date_of_uploading").value !=0){
                                setDisabled(false)

                            }
                            else{
                                setDisabled(true);
                            }
                          

                        }
                        else{
                            setDisabled(true);
                        }
                       
                    }
                    else{
                        setDisabled(true);
                    }
                }
                else{
                    setDisabled(true);
                }
            }
            else{
                setDisabled(true);
            }
            
        }
        else{
            setDisabled(true);
        }
    }
    const Search=(e)=>{
        e.preventDefault();
        axios.get(url).then((res)=>{
            localStorage.setItem("FindContainerMatched",JSON.stringify(res.data));
            toast.info("Searching",{
                position:"top-right"
            })
            axios.post(url2,{
                name:name,
                pointOfDelivery:point_of_delivery,
                pointOfLoading:point_of_loading,
                productWeight:product_weight,
                phoneNo:phoneNo,
                dateOfUploading:date_of_uploading
            }).then((res)=>{
                toast.success("Successfully Loaded on Share Container",{
                    position:"top-right"
                });
               
            })
            setTimeout(function(){
                window.location.href="/matchedcontainers";
            },1500);
        }).catch((error)=>{
            console.log(error);
            toast.error("Request Failed",{
                position:"top-right"
            })
            toast.info("Might be some problem with server",{
                position:"top-right"
            })
        })
       
       
    }

    return (
        <div id='shareContainerComponent'>
            <div id='shareModule'>
                <h1>Share A Container</h1>
                <h4>LCL</h4>
                <div id='label'>Type your own details</div>
                <div id='label'>We will find shipper according to your requirements</div>
                <div class="input-field col s6" id='div-input'>
                    <input id="name_shipper" type="text" class="validate" value={name} onChange={onChangeName}/>
                    <label for="name_shipper" id='label-shipper'>Name</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="point_of_loading" type="text" class="validate" value={point_of_loading} onChange={onChangePOL}/>
                    <label for="point_of_loading">Point Of Loading</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="point_of_delivery" type="text" class="validate" value={point_of_delivery} onChange={onChangePOD}/>
                    <label for="point_of_delivery">Point Of Delivery</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="product_weight" type="text" class="validate" value={product_weight}  onChange={onChangePW}/>
                    <label for="product_weight">Product Weight (KG)</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="phone_No" type="text" class="validate" value={phoneNo}  onChange={onchangePhoneNo}/>
                    <label for="phone_No">PhoneNo</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="date_of_uploading" type="date" class="validate" value={date_of_uploading}  onChange={onChangeDOU}/>
                    <label for="date_of_uploading">Date Of Uploading</label>
                </div>
                <Button value="Submit" variant="outlined"  color="success" id="Search-Submit" disabled={disabledValue} onClick={Search}>Search and Post</Button>



            </div>
            <ToastContainer/>
        </div>
    )
}
