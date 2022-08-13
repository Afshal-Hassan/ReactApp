import React, { useEffect } from 'react';
import './GetAllPostLoad.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import {ButtonGroup} from '@mui/material';

export default function GetAllPostLoad() {

  const url = `http://localhost:8080/postload`;
  useEffect(() => {
    let label;
    let img, link;
    let allpostloads = [];

    axios.get(url).then((res) => {
      console.log(res);
      localStorage.setItem("PostLoads", JSON.stringify(res.data));
    }).catch((error) => {
      console.log(error);
      toast.error("Request Failed", {
        position: "top-right"
      })
      toast.info("Might be some problem from server",{
        position:'top-right'
      })
    })

    if(!localStorage.getItem("PostLoads")){
      localStorage.setItem("PostLoads",JSON.stringify([]));
    }
    allpostloads = JSON.parse(localStorage.getItem("PostLoads"));

    console.log(allpostloads.length);
      if(!localStorage.getItem("PostLoads")){
        allpostloads=[];
      }
  
    for (var i = 0; i < allpostloads.length; i++) {
      let postloads = allpostloads.slice(i, i + 1);
      let containerdiv;

      const div = document.createElement("div");
      let para;
      let keys = Object.keys(postloads[0]);

      let values = Object.values(postloads[0]);

      for (var j = 0; j < keys.length; j++) {

        if (keys[j] == "postLoadId") {

          label = "Post Load Id"
        }
        if (keys[j] == "typeOfVehicle") {
          const mediaQuerys = window.matchMedia('(max-width: 500px)')

          label = "Vehicle"
          img = document.createElement("span");

          img.className = "material-symbols-outlined";
          img.innerHTML = "no_crash";
          img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:darkorange;background:none;bottom:-35px;;left:-80px"
          if (mediaQuerys.matches) {
            img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:darkorange;background:none;bottom:-20px;;left:-80px"


          }
          containerdiv.appendChild(img)
        }

        if (keys[j] == "pointOfDelivery") {
          const mediaQuerys = window.matchMedia('(max-width: 500px)')
          label = "Point Of Delivery"
          img = document.createElement("span");
          img.className = "material-symbols-outlined";
          img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:red;background:none;bottom:-40px;;left:-140px"
          img.innerHTML = "pin_drop";
          if (mediaQuerys.matches) {
            img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:red;background:none;bottom:-20px;;left:-80px"


          }
          containerdiv.appendChild(img)
        }
        if (keys[j] == "pointOfLoading") {
          const mediaQuerys = window.matchMedia('(max-width: 500px)')


          label = "Point Of Loading";
          img = document.createElement("span");
          img.className = "material-symbols-outlined";
          img.innerHTML = "local_shipping";
          img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:forestgreen;background:none;bottom:-40px;;left:-30px"
          if (mediaQuerys.matches) {
            img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:forestgreen;background:none;bottom:-20px;;left:-30px"


          }
          containerdiv.appendChild(img)
        }
        if (keys[j] == "date1") {
          label = "Date"
        }
        if (keys[j] == "dateOfUploading") {
          label="Date Of Uploading";
        }
        if (keys[j] == "productWeight") {
          const mediaQuerys = window.matchMedia('(max-width: 500px)')

          label = "Product Weight (KG)"
          img = document.createElement("span");
          img.className = "material-symbols-outlined";
          img.innerHTML = "line_weight";
          img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:darkslategrey;background:none;bottom:-38px;;left:-150px"
          if (mediaQuerys.matches) {
            img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:darkslategrey;background:none;bottom:-20px;;left:-110px"


          }
          containerdiv.appendChild(img)
        }

        if (keys[j] == "phoneNo") {
          if(!localStorage.getItem("email")){
            continue;
          }
          const mediaQuerys = window.matchMedia('(max-width: 500px)')

          label = "Phone No (Carrier/Broker)"
          img = document.createElement("span");
          img.className = "material-symbols-outlined";
          img.innerHTML = "call";
          img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:green;background:none;bottom:-38px;;left:-100px"
          if (mediaQuerys.matches) {
            img.style.cssText = "position:relative;width:30px;height:30px;z-index:1; ;color:forestgreen;background:none;bottom:-20px;;left:-80px"


          }
          containerdiv.appendChild(img)
        }
        if (keys[j] == "userData") {
          continue;
        }
        if(keys[j]=="time"){
          continue
        }
        const mediaQuerys = window.matchMedia('(max-width: 500px)')
        containerdiv = document.createElement("div");
        para = document.createElement("div");
        para.innerHTML = `${label}: ${values[j]}`;
        para.style.cssText = "font-size:18px;font-weight:630;color:black;margin-bottom:15px;"

        if (mediaQuerys.matches) {
          para.style.cssText = "font-size:13px;font-weight:630;color:black;margin-bottom:15px;"
        }


        containerdiv.appendChild(para);
        containerdiv.style.cssText = "display:flex;flex-direction:row;position:relative;margin-bottom:30px; margin-top:25px; align-items: center;justify-content:flex-start;margin-left:15px"
        if (mediaQuerys.matches) {
          containerdiv.style.cssText = "display:flex;flex-direction:row;position:relative;margin-bottom:10px; margin-top:10px; align-items: center;justify-content:flex-start;margin-left:15px"

        }
        div.appendChild(containerdiv);

      }

      const mediaQuery = window.matchMedia('(max-width: 500px)')



      const callDiv = document.createElement("div");
      callDiv.style.cssText = "position:relative;width:120px;;display:flex;justify-content: space-between;"
      let callimg = document.createElement("span");
      callimg.className = "material-symbols-outlined";
      callimg.innerHTML = "call";
      callimg.style.cssText = "position:relative;color:forestgreen;"
      link = document.createElement("a");
      link.innerHTML = "Whatsapp";
      link.href = "https://web.whatsapp.com";
      link.style.cssText = "color:forestgreen;font-size:15.5px;font-weight:670;"
      callDiv.appendChild(callimg);
      callDiv.appendChild(link);
   
      div.style.cssText = "display: block;flex-direction: column; align-items: center;justify-content: center; border:5px double grey;width:800px;height:570px;border-radius:25px;background-color: #D3D3D3;margin-top:90px";
      if(!localStorage.getItem("email")){
        div.style.cssText = "display: block;flex-direction: column; align-items: center;justify-content: center; border:5px double grey;width:800px;height:510px;border-radius:25px;background-color: #D3D3D3;margin-top:90px";

      }
      if (mediaQuery.matches) {
        div.style.cssText = "display: block;flex-direction: column; align-items: center;justify-content: center; border:5px double grey;width:300px;height:370px;border-radius:25px;background-color: #D3D3D3;margin-top:90px";
        callDiv.style.cssText = "position:relative;width:106px;;display:flex;justify-content: space-between;margin-top:20px"
        if(!localStorage.getItem("email")){
          div.style.cssText = "display: block;flex-direction: column; align-items: center;justify-content: center; border:5px double grey;width:300px;height:320px;border-radius:25px;background-color: #D3D3D3;margin-top:90px";

        }
      }

      document.getElementById("allPostLoads").appendChild(div);
      div.appendChild(callDiv)
      document.getElementById("all-postload-component").style.height = 163 + "vh"

    }

  })

  return (
    <div id='all-postload-component'>
       
      <Button value="Submit" variant="outlined" color="primary" id="Filter"><Link to="/filter" id='filter'>Filter</Link></Button>
      <div id='all-postload-module'>
      <ButtonGroup variant="outlined" aria-label="outlined button group" id="ButtonGroupAllPost">
                    <Button id='buttonGroup1'color='primary' variant='outlined'><Link to="/sharecontainerloads" id='link1'>Share Container</Link></Button>
                    <Button id='buttonGroup1'color='primary' variant='outlined'><Link to="/getallpostload" id='link1'>Full Container</Link></Button>
                    </ButtonGroup>
        <h1 id='GetPostLoadh1'>LoadBoared</h1>
        <h5>To post a Load you need to Login</h5>
        <h5>To contact a PostLoader you need to Login</h5>
        <div id='allPostLoads'>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
