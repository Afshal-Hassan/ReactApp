import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import "./Whatsapp.css";

export default function Whatsapp() {
  return (
    <div>
        <div id='Whatsapp-module'>

        <ReactWhatsapp  id="whatsapp" number="1-212-736-5000" message="Hello World!!!"/>

        </div>
       
        
    </div>
  )
}
