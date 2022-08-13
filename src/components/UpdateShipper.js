import React from 'react';
import "./UpdateShipper.css";
import { useState } from 'react';
import { Button } from "@mui/material";


export default function UpdateShipper() {
  const [shipper, setShipper] = useState();
  const [shipperCompany, setShipperCompany] = useState();
  const [shipperPhoneNo, setShipperPhoneNo] = useState();
  const [shipperPassword, setShipperPassword] = useState();
  const [disabledValue, setDisabled] = useState(true);



  const onchangeShipperPhoneNo = (event) => {

    setShipperPhoneNo(event.target.value);
    if (document.getElementById("ShipperphoneNo").value != 0) {
      if (document.getElementById("Shippername").value != 0) {
        if (document.getElementById("ShipperphoneNo").value != 0) {
          if (document.getElementById("Shipperpassword").value != 0) {
            if (document.getElementById("Shipperemail").value != 0){
              setDisabled(false);

            }
            else {
              setDisabled(true)
  
            }
            

          }
          else {
            setDisabled(true)

          }
        }
        else {
          setDisabled(true)

        }


      }
      else {
        setDisabled(true)

      }


    }
    else {
      setDisabled(true)

    }
  }
  const onchangeShipperPassword = (event) => {
    setShipperPassword(event.target.value);
    if (document.getElementById("ShipperphoneNo").value != 0) {
      if (document.getElementById("Shippername").value != 0) {
        if (document.getElementById("ShipperphoneNo").value != 0) {
          if (document.getElementById("Shipperpassword").value != 0) {
            if (document.getElementById("Shipperemail").value != 0){
              setDisabled(false);

            }
            else {
              setDisabled(true)
  
            }
            

          }
          else {
            setDisabled(true)

          }
        }
        else {
          setDisabled(true)

        }


      }
      else {
        setDisabled(true)

      }


    }
    else {
      setDisabled(true)

    }


  }

  const onchangeShipperEmail = (event) => {
    setShipperCompany(event.target.value);
    if (document.getElementById("ShipperphoneNo").value != 0) {
      if (document.getElementById("Shippername").value != 0) {
        if (document.getElementById("ShipperphoneNo").value != 0) {
          if (document.getElementById("Shipperpassword").value != 0) {
            if (document.getElementById("Shipperemail").value != 0){
              setDisabled(false);

            }
            else {
              setDisabled(true)
  
            }
            

          }
          else {
            setDisabled(true)

          }
        }
        else {
          setDisabled(true)

        }


      }
      else {
        setDisabled(true)

      }


    }
    else {
      setDisabled(true)

    }


  }
  const onchangeShipper = (event) => {
    setShipper(event.target.value)
    if (document.getElementById("ShipperphoneNo").value != 0) {
      if (document.getElementById("Shippername").value != 0) {
        if (document.getElementById("ShipperphoneNo").value != 0) {
          if (document.getElementById("Shipperpassword").value != 0) {
            if (document.getElementById("Shipperemail").value != 0){
              setDisabled(false);

            }
            else {
              setDisabled(true)
  
            }
            

          }
          else {
            setDisabled(true)

          }
        }
        else {
          setDisabled(true)

        }


      }
      else {
        setDisabled(true)

      }


    }
    else {
      setDisabled(true)

    }


  }
  return (
    <div id='UpdateShipperComponent'>
      <div id="UpdateShipperModule">
        <h1>Update Shipper</h1>
        <form id="update-shipper-form">
          <input type='text' placeholder='Shipper Name' name='ShipperName' onChange={onchangeShipper} value={shipper} id="Shippername" />
          <input type='email' placeholder='Email' name='ShipperEmail ' onChange={onchangeShipperEmail} value={shipperCompany} id="Shipperemail" />
          <input type='text' placeholder='Phone No' name='ShipperPhoneNo' onChange={onchangeShipperPhoneNo} value={shipperPhoneNo} id="ShipperphoneNo" />
          <input type='password' placeholder='Password' name='ShipperPassword' onChange={onchangeShipperPassword} value={shipperPassword} id="Shipperpassword" />
          <Button value="Login" variant="outlined" color="success" id="updateShipper-Submit" disabled={disabledValue}>Update Shipper</Button>

        </form>

      </div>
    </div>
  )
}
