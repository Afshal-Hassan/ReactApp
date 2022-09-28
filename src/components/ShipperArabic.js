import React, { useEffect } from 'react';
import './Shipper.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, Route } from 'react-router-dom';
import GetAllShipper from './GetAllShipper';
import PostLoadNavBar from './PostLoadNavBar';
import { Switch } from 'react-router-dom';
import UpdateShipper from './UpdateShipper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';



export default function Shipper() {

    const [shipper, setShipper] = useState();
    const url = `http://localhost:8080/getAllShareContainerLoads`;

    const [shipperCompany, setShipperCompany] = useState();
    const [shipperLocation, setShipperLocation] = useState();

    useEffect(() => {
        let label;
        let getAllShareContainerLoad = [];

        axios.get(url).then((res) => {
            console.log(res);
            localStorage.setItem("ShareContainerLoads", JSON.stringify(res.data));
        }).catch((error) => {
            console.log(error);
            toast.error("Request Failed", {
                position: "top-right"
            })
            toast.info("Might be some problem from server", {
                position: "top-right"
            })
        })

        getAllShareContainerLoad=JSON.parse(localStorage.getItem("ShareContainerLoads"));
        if(!localStorage.getItem("ShareContainerLoads")){
            localStorage.setItem("ShareContainerLoads",JSON.stringify([]));
        }
        for (var i=0;i<getAllShareContainerLoad.length;i++){
            let allShareContainer=getAllShareContainerLoad[i].toString().split(",");
            const div=document.createElement("div");
            let para;

            if(allShareContainer=="Not Found"){
                const mediaQuery = window.matchMedia('(max-width: 500px)')
               
                label="Filters you Applied";
                console.log("Not Found")
                para=document.createElement("div");
                para.style.cssText="font-size:20px;font-weight:630;color:black;margin-bottom:15px;margin-left:25px"
                para.innerHTML=`${label}: ${allShareContainer}`;
                div.appendChild(para);
                div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:700px;height:300px"
                document.getElementById("matched-module").appendChild(div);
                if(mediaQuery.matches){
                div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:280px;height:200px"
                para.style.cssText="font-size:15px;font-weight:500;color:black;margin-bottom:15px;margin-left:21px"

            }
                break;

            }
            for (var j=0;j<allShareContainer.length;j++){
                const mediaQuerys = window.matchMedia('(max-width: 500px)')
                if(j==0){
                    label="Container Id";
                }
                if(j==1){
                    label="Name";
                }
                if(j==2){
                    label="Point Of Delivery";
                }
                if(j==3){
                    label="Point Of Loading";
                }
                if(j==4){
                    label="Product Weight (KG)";
                }
                if(j==5){
                    if(!localStorage.getItem("email")){
                        continue;
                    }
                    label="Phone No";
                }
                if(j==6){
                    label="Date Of Loading";
                }
                para=document.createElement("div");
                para.style.cssText="font-size:17px;font-weight:600;color:black;margin-bottom:20px;margin-left:25px"
                if(mediaQuerys.matches){
                    para.style.cssText="font-size:12.5px;font-weight:600;color:black;margin-bottom:8px;margin-left:17px"

                }
                para.innerHTML=`${label}: ${allShareContainer[j]}`;
                div.appendChild(para);
            }
            const mediaQuery = window.matchMedia('(max-width: 500px)')
            let divcontainer=document.createElement("div");
            divcontainer.style.cssText="display:flex;flex-direction:row; justify-content: space-between;align-items:center;position:relative;width:117px;"
            let call=document.createElement("a");
            let img=document.createElement("span");
            img.className="material-symbols-outlined";
            img.style.cssText="position:relative;top:6px;color:forestgreen"
            img.innerHTML="call";
            call.innerHTML="Whatsapp";
            divcontainer.appendChild(img);
            divcontainer.appendChild(call);
            call.style.cssText="margin-top:15px;text-decoration:none;color:forestgreen;font-size:16px;font-weight:bold"
            call.href="https://web.whatsapp.com";
            div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:700px;height:350px"
            if(mediaQuery.matches){
                div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:300px;height:200px"
                para.style.cssText="font-size:12.5px;font-weight:600;color:black;margin-bottom:15px;margin-left:17px"
                img.style.cssText="position:relative;top:6px;color:forestgreen"
                call.style.cssText="margin-top:15px;text-decoration:none;color:forestgreen;font-size:13px;font-weight:bold"
                divcontainer.style.cssText="display:flex;flex-direction:row; justify-content: space-between;align-items:center;position:relative;width:95px;margin-right:50px"




            }
            document.getElementById("searchedLCL").appendChild(div);
            document.getElementById("searchedLCL").appendChild(divcontainer);
            document.getElementById("share-container-loads-component").style.height = 85 + "vh"
          

        
        }

    })



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

        <div id='share-container-loads-component'>
            <div id='ShipperModule'>
                <div id="container-shipper">
                <ButtonGroup variant="outlined" aria-label="outlined button group" id="ButtonGroupAllPost">
                    <Button id='buttonGroup1'color='primary' variant='outlined'><Link to="/sharecontainerloads-arabic" id='link1'>مشاركة الحاوية
</Link></Button>
                    <Button id='buttonGroup1'color='primary' variant='outlined'><Link to="/getallpostload-arabic" id='link1'>حاوية كاملة</Link></Button>
                    </ButtonGroup>
                    <h1 id='Shipper-h1'>مشاركة حمولات الحاويات
</h1>
                    <h5 id='he'>بالنسبة للبريد الإلكتروني للقائم بالتحميل ، يمكنك الاتصال بنا
</h5>
                    <div id='searchedLCL'></div>

                </div>

            </div>
            <ToastContainer />

        </div>





    );
}