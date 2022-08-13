import React, { useState } from 'react'
import FormGroup from '@mui/material/FormControl'
import Label from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Mes from '@mui/material/FormHelperText'
import "./ShareAContainer.css"
import { Button } from "@mui/material";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function ShareAContainer() {
    const[name,setName]=useState();
    const[point_of_delivery,setPOD]=useState();
    const[point_of_loading,setPOL]=useState();
    const[product_weight,setPW]=useState();
    const[disabledValue,setDisabled]=useState(true);
    const url = `http://localhost:8080/postload/${point_of_delivery}/${point_of_loading}`;
    const url2=`http://localhost:8080/savecontainer`;

    const onChangeName=(event)=>{
        setName(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
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
    const onChangePOL=(event)=>{
        setPOL(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
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
    const onChangePOD=(event)=>{
        setPOD(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
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
    const onChangePW=(event)=>{
        setPW(event.target.value);
        if(document.getElementById("name_shipper").value !=0){
            if(document.getElementById("point_of_loading").value !=0){
                if(document.getElementById("point_of_delivery").value !=0){
                    if(document.getElementById("product_weight").value !=0){
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
    const Search=(e)=>{
        e.preventDefault();
        axios.post(url2,{
            name:name,
            pointOfDelivery:point_of_delivery,
            pointOfLoading:point_of_loading,
            productWeight:product_weight
        }).then((res)=>{

            axios.get(url).then((res)=>{
                localStorage.setItem("FindContainerMatched",JSON.stringify(res.data));
                toast.info("Searching",{
                    position:"top-right"
                })
                setTimeout(function(){
                    window.location.href="/matchedcontainers";
                },1000);
            }).catch((error)=>{
                console.log(error);
                toast.error("Request Failed",{
                    position:"top-right"
                })
                toast.info("Might be some problem with server",{
                    position:"top-right"
                })
            })
        })
       
    }

    return (
        <div id='shareContainerComponent'>
            <div id='shareModule'>
                <h1>مشاركة حاوية</h1>
                <div id='label'>اكتب التفاصيل الخاصة بك</div>
                <div id='label'>سوف نجد وفقا لمتطلباتك</div>
                <div class="input-field col s6" id='div-input'>
                    <input id="name_shipper" type="text" class="validate" value={name} onChange={onChangeName}/>
                    <label for="name_shipper" id='label-shipper'>اسم</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="point_of_loading" type="text" class="validate" value={point_of_loading} onChange={onChangePOL}/>
                    <label for="point_of_loading">نقطة التحميل</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="point_of_delivery" type="text" class="validate" value={point_of_delivery} onChange={onChangePOD}/>
                    <label for="point_of_delivery">نقطة التسليم</label>
                </div>
                <div class="input-field col s6" id='div-input'>
                    <input id="product_weight" type="text" class="validate" value={product_weight}  onChange={onChangePW}/>
                    <label for="product_weight">وزن المنتج</label>
                </div>
                <Button value="Submit" variant="outlined"  color="success" id="Search-Submit" disabled={disabledValue} onClick={Search}>بحث</Button>



            </div>
            <ToastContainer/>
        </div>
    )
}
