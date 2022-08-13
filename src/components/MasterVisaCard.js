import React, { useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './MasterCardPayment.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import NativeSelect from '@mui/material/NativeSelect';
import { InputLabel } from '@mui/material';
import "./MasterVisaCard.css"
import axios from "axios";
import { Button } from 'bootstrap';
import { useHistory } from 'react-router-dom';


export default function MasterVisaCard() {
 
  let date = new Date();
  let day = JSON.stringify(date.getDate());
  let month = JSON.stringify(date.getMonth() + 1);
  let year = JSON.stringify(date.getFullYear());
  const currentDate =month+"-"+day+"-"+year ;


  const [nameContact, setContactName] = useState();
  const [emailContact, setContactEmail] = useState();
  const [countryPayment, setCountryPayment] = useState();
  const [userType, setUserTypePayment] = useState("Transporter");
  const url = `http://localhost:8080/payment/${currentDate}/${emailContact}`;
  const url2 = `http://localhost:8080/checkPayer/${emailContact}`;
  useEffect(()=>{
    toast.warning("Enter your correct Email",{
      position:"top-right"
    })
  },[])

  const onOpen = () => {
    axios.get(url2).then((res) => {

      if (res.data == "User Not Found") {
        toast.error("Email you entered isn't Correct", {
          position: "top-center"
        });

        setTimeout(function(){
          window.location.href = "/payment";

        },2200)
        
       




      }
      else {
        console.log("User Found");
      }
    })
  }

  const onToken = (token) => {
    console.log(token);
    axios.post(url, {
      name: nameContact,
      email: emailContact,
      country: countryPayment,
      userType: userType
    }).then((res) => {
      console.log(res);
      if (res.data == "Successfully Paid") {
        toast.success("Successfully Paid", {
          position: "top-right"
        })
      }
    })

  }






  const onchangeContactName = (event) => {
    if (document.getElementById("paymentName").value != 0) {
      if (document.getElementById("paymentEmail").value != 0) {
        if (document.getElementById("paymentCountry").value != 0) {
          document.getElementById("Pay").style.cssText = "display:inline;"

        }
        else {
          document.getElementById("Pay").style.cssText = "display:none;"

        }

      }
      else {
        document.getElementById("Pay").style.cssText = "display:none;"

      }


    }
    else {
      document.getElementById("Pay").style.cssText = "display:none;"

    }
    setContactName(event.target.value);

  }
  const onchangeContactEmail = (event) => {
    setContactEmail(event.target.value);
    if (document.getElementById("paymentName").value != 0) {
      if (document.getElementById("paymentEmail").value != 0) {
        if (document.getElementById("paymentCountry").value != 0) {
          document.getElementById("Pay").style.cssText = "display:inline;"

        }
        else {
          document.getElementById("Pay").style.cssText = "display:none;"

        }

      }
      else {
        document.getElementById("Pay").style.cssText = "display:none;"

      }


    }
    else {
      document.getElementById("Pay").style.cssText = "display:none;"

    }
  }
  const onchangePaymentCountry = (event) => {
    setCountryPayment(event.target.value);
    if (document.getElementById("paymentName").value != 0) {
      if (document.getElementById("paymentEmail").value != 0) {
        if (document.getElementById("paymentCountry").value != 0) {
          document.getElementById("Pay").style.cssText = "display:inline;"

        }
        else {
          document.getElementById("Pay").style.cssText = "display:none;"

        }

      }
      else {
        document.getElementById("Pay").style.cssText = "display:none;"

      }


    }
    else {
      document.getElementById("Pay").style.cssText = "display:none;"

    }
  }
  const onchangeUserTypePayment = (event) => {
    setUserTypePayment(event.target.value);

  }


  const sendEmail = (e) => {
    e.preventDefault();
    console.log("clicked");

    if (document.getElementById("paymentName").value == 0) {
      console.log("Here is error");
      toast.error("Enter Name", {
        position: "top-right"

      });
    }


    else if (document.getElementById("paymentEmail").value == 0) {

      toast.error("Enter Email", {
        position: "top-right"

      });
    }
    else {


      setTimeout(function () {
        document.getElementById("wait").style.cssText = "display:inline;";
      }, 10);

      setTimeout(function () {
        document.getElementById("wait").style.cssText = "display:none;";
      }, 1310);
      emailjs.sendForm('service_9hww3zi', 'template_yjg99jp', e.target, 'eGWgHRaCoCFJzaDKl').then(res => {
        toast.success("Check your Email for the Payment", {
          position: "top-right"
        })
        console.log(res)

        setTimeout(function () {
          document.getElementById('check').style.cssText = "display:inline;";
        }, 10);

        setTimeout(function () {
          document.getElementById('check').style.cssText = "display:none;";
        }, 4000);

      }).catch(err => {
        console.log(err);
        toast.error("Something went Wrong ", {
          position: "top-right"
        });
        toast.error("Type your correct Email ", {
          position: "top-right"
        });

      })
    }
  }

  return (
    <div id='Payment-component'>
      <div id='Payment-Module'>
        <h1 id='Payment'>Payment!!</h1>
        <form id="Payment-form" onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" id="paymentName" value={nameContact} onChange={onchangeContactName} />
          <input type="email" placeholder="Email (Your Email)" name="email" id="paymentEmail" value={emailContact} onChange={onchangeContactEmail} />
          <input type="text" placeholder="Country" name="country" id="paymentCountry" value={countryPayment} onChange={onchangePaymentCountry} />
          <InputLabel htmlFor="select" id="LabelUserType"> Are You?</InputLabel>
          <NativeSelect
            value={userType}
            id="NativeSelect" onChange={onchangeUserTypePayment}
          >

            <option value="Transporter">Transporter</option>
            <option value="Broker">Broker</option>
          </NativeSelect>


        </form>
        <div id='Pay'>
          <StripeCheckout token={onToken}
            name="Buy Subscription"
            description='Subscription for 1 month'
            stripeKey="pk_live_51LPedhL5pgdDtYn94rIhlAgMqXyFQOo1vZbqRT0Au16L0AYLSuBFaewcxzADjoJE85daZyK6EjJ99XBg0w65YauN00iKU6iQPw"
            amount={3 * 100}
            currency="USD"
            email={emailContact}
            billingAddress={true}
            zipCode={true}
            opened={onOpen}

          >
           <span><button className="btn btn-primary" id='Pay-Button'>Pay 3$
            </button></span>
          </StripeCheckout>


        </div>

      </div>

      <ToastContainer />
    </div>
  )
}
