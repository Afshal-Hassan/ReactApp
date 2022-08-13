import React, { useEffect } from 'react';
import "./MatchedContainers.css"

export default function MatchedContainers() {

    useEffect(()=>{
        let label;
        let matched=JSON.parse(localStorage.getItem("FindContainerMatched"));
        if(!localStorage.getItem("FindContainerMatched")){
            localStorage.setItem("FindContainerMatched",JSON.stringify([]));
        }
        for(var i=0;i<matched.length;i++){
           
            
            let matchedData = matched[i].toString().split(",");
            const div=document.createElement("div");
            let para;
            if(matchedData=="Not Found"){
                const mediaQuery = window.matchMedia('(max-width: 500px)')
               
                label="Filters you Applied";
                console.log("Not Found")
                para=document.createElement("div");
                para.style.cssText="font-size:20px;font-weight:630;color:black;margin-bottom:15px;margin-left:25px"
                para.innerHTML=`${label}: ${matchedData}`;
                div.appendChild(para);
                div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:700px;height:300px"
                document.getElementById("matched-module").appendChild(div);
                if(mediaQuery.matches){
                div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:280px;height:200px"
                para.style.cssText="font-size:17px;font-weight:630;color:black;margin-bottom:15px;margin-left:21px"

            }
                break;

            }
            
          
            for(var j=0;j<matchedData.length;j++){
                const mediaQuerys = window.matchMedia('(max-width: 500px)')

                if(j==0){
                    label="Vehicle";
                }
                if(j==1){
                    label="Point Of Delivery";
                }
                if(j==2){
                    label="Point Of Loading";
                }
                if(j==3){
                    label="Phone No (PostLoader)";
                }
                if(j==4){
                    label="Postloader Email";
                }
                if(j==5){
                    label="PostLoader Phone No";
                }

                para=document.createElement("div");
                para.style.cssText="font-size:20px;font-weight:600;color:black;margin-bottom:15px;margin-left:25px"
                if(mediaQuerys.matches){
                    para.style.cssText="font-size:10.5px;font-weight:600;color:black;margin-bottom:8px;margin-left:17px"

                }

                para.innerHTML=`${label}: ${matchedData[j]}`;
                div.appendChild(para);
            }
          
           const mediaQuery = window.matchMedia('(max-width: 500px)')
            let divcontainer=document.createElement("div");
            divcontainer.style.cssText="display:flex;flex-direction:row; justify-content: space-between;align-items:center;position:relative;width:148px;"
            let call=document.createElement("a");
            let img=document.createElement("span");
            img.className="material-symbols-outlined";
            img.style.cssText="position:relative;top:6px;color:forestgreen"
            img.innerHTML="call";
            call.innerHTML="Message/Call";
            divcontainer.appendChild(img);
            divcontainer.appendChild(call);
            call.style.cssText="margin-top:15px;text-decoration:none;color:forestgreen;font-size:18px;font-weight:bold"
            call.href="https://web.whatsapp.com";
            div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:700px;height:300px"
            if(mediaQuery.matches){
                div.style.cssText="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#D3D3D3;border:5px double gray;border-radius:23px; margin-top:30px;width:250px;height:200px"
                para.style.cssText="font-size:10.5px;font-weight:600;color:black;margin-bottom:15px;margin-left:17px"
                img.style.cssText="position:relative;top:6px;color:forestgreen"
                call.style.cssText="margin-top:15px;text-decoration:none;color:forestgreen;font-size:13px;font-weight:bold"
                divcontainer.style.cssText="display:flex;flex-direction:row; justify-content: space-between;align-items:center;position:relative;width:118px;margin-right:50px"




            }
            document.getElementById("allmatchedloads").appendChild(div);
            document.getElementById("allmatchedloads").appendChild(divcontainer);
            document.getElementById("matched-component").style.height = 80 + "vh"


        }
       
        
    })
    return (
        <div id="matched-component">
            <div id="matched-module">
            <h1 id='matchedh1'>Matched Share Containers</h1>
            <div id="allmatchedloads"></div>


            </div>
        </div>
    )
}
