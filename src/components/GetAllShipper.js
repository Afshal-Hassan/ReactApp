import axios from 'axios';
import React, { useEffect } from 'react'
import "./GetAllShipper.css";

export default function GetAllShipper() {
  const url = `http://localhost:8080/getallshippers/Shipper`;

  useEffect(() => {
    let label;
    let getAllShippers = [];
    axios.get(url).then((res) => {
      localStorage.setItem("Shippers", JSON.stringify(res.data));
    }).catch((error) => {
      console.log(error);
    })
    getAllShippers = JSON.parse(localStorage.getItem("Shippers"));

    console.log(getAllShippers)


    for (var i = 0; i < getAllShippers.length; i++) {
      let allShippers = getAllShippers.slice(i, i + 1);
      const div = document.createElement("div");
      let para;
      console.log(allShippers)
      if(allShippers[0]=="Shipper is not present"){
        para=document.createElement("div");
        para.innerHTML=`Shipper is not present`;
        para.style.cssText = "font-size:22px;font-weight:630;color:#ADEFD1FF;margin-top:10px";
        div.appendChild(para);
        div.style.cssText = "display: flex;flex-direction: column; align-items: center;justify-content: center; border:5px double #00203FFF;width:400px;height:280px;border-radius:25px;background-color:#00203FFF;margin-top:50px";
        document.getElementById("allShippers").appendChild(div);
        break;
      }
      let keys = Object.keys(allShippers[0]);
      let values = Object.values(allShippers[0])
      for(var j=0;j<keys.length;j++){
        para=document.createElement("div");
        para.innerHTML=`${keys[j]}: ${values[j]}`;
        para.style.cssText = "font-size:22px;font-weight:630;color:#ADEFD1FF;margin-top:10px";
        div.appendChild(para);
      }
      
      div.style.cssText = "display: flex;flex-direction: column; align-items: center;justify-content: center; border:5px double #00203FFF;width:400px;height:280px;border-radius:25px;background-color:#00203FFF;margin-top:50px";
      document.getElementById("allShippers").appendChild(div);




    }

  }, [])

  return (
    <div id='GetAllShipperComponent'>
      <div id="GetAllShipperModule">
        <h1>GetAllShipper</h1>
        <div id='allShippers'></div>
      </div>

    </div>
  )
}
