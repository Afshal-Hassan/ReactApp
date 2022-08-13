import React from 'react'
import DarkModeContext from './DarkModeContext';
import { useState } from 'react';
import { alertTitleClasses } from '@mui/material';
import { border } from '@mui/system';

export default function DarkModeState(props) {
    const[textColor,setTextColor]=useState({
        color:null
      });

    

    
    
      const[navbarBorder,setNavBarBorder]=useState({
          borderBottom:"3px solid black",
          backgroundColor:"white"
    
      });
      const[home,setHome]=useState({
        backgroundColor:"white",


      })
      const[homeBackground,sethomeBackground]=useState({
        backgroundColor:"white",
        border: "6px double black"

      })
   
      const ToggleMode=()=>{
        console.log("Clicked");
        if(navbarBorder.backgroundColor=="white"){
            setNavBarBorder({
                borderBottom:"3px solid grey",
                backgroundColor:"black"
            })
            setTextColor({
             color:"white"
          })
        
            sethomeBackground({
                backgroundColor:"black",
                border: "6px double white"
            })
            setHome({
                backgroundColor:"black",

            })
         
        }
        else{
            setNavBarBorder({
                borderBottom:"3px solid black",
          backgroundColor:"white"
            })
            setTextColor({
                color:"black",
            })
            sethomeBackground({
                backgroundColor:"white",
                border: "6px double black"
            })
            setHome({
                backgroundColor:"white",

            })
           

        }
      //  if(document.getElementById("mode").checked==true)
        //{
          //  console.log("Mode is true") ;
            
          
            //setTextColor("white");
            //setNavBarBorder({
              //  borderBottom:"3px solid grey"
    
   ///         })
          
    
      //  }
       // else{
         //   console.log("Mode is false");
            
           // setTextColor("black");
            
            //setNavBarBorder({
              //  borderBottom:"3px solid black"
    
            //})
      
    
            
            
    
    //    }
    }
  return (
    <DarkModeContext.Provider value={{navbarBorder,textColor,ToggleMode,homeBackground,home}}>
        {props.children}
    </DarkModeContext.Provider>
  )
}
