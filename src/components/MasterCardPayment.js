import React, { useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './MasterCardPayment.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function MasterCardPayment() {

  const onToken = (token) => {
    console.log(token);
  }

  const [nameContact, setContactName] = useState();
  const [emailContact, setContactEmail] = useState();


 
  const onchangeContactName = (event) => {
    setContactName(event.target.value);
  }
  const onchangeContactEmail = (event) => {
    setContactEmail(event.target.value);
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
    <div className="container">
      <h1>Payment!!</h1>
      <h5 id='check'>Check Your Email for the payment link</h5>
      <h5 id='wait'>Wait few minutes</h5>
      <form id="Contact-form" onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" id="paymentName" value={nameContact} onChange={onchangeContactName} />
        <input type="email" placeholder="Email (Your Email)" name="email" id="paymentEmail" value={emailContact} onChange={onchangeContactEmail} />
        <input type="submit" value="Submit" id="Payment-Submit" />
      </form>
      <StripeCheckout token={onToken}
        stripeKey="pk_test_51LO0ALLRgVtSurNQBClUNbOQ8WmzYWfgFeHQWsUd22Q7yYVekRlf1TRMSk2Ub2GgkjcqvtSPATvd5CPKryQCmHaU00lY5Z0VrW">
        <button className="btn btn-primary">Pay
        </button>
      </StripeCheckout>

    </div>


  );
}

export default MasterCardPayment;