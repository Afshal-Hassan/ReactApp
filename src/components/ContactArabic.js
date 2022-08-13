import React, { useState } from "react";
import './Contact.css'
import './Signup.css'
import emailjs from '@emailjs/browser';
import { Button } from "@mui/material";

export default function Contact() {
    const [nameContact, setContactName] = useState();
    const [emailContact, setContactEmail] = useState();
    const [message, setMessage] = useState();

    const onchangeContactName = (event) => {
        setContactName(event.target.value);
    }
    const onchangeMessage = (event) => {
        setMessage(event.target.value);
    }
    const onchangeContactEmail = (event) => {
        setContactEmail(event.target.value);
    }

    const SubmitContactHandler=(e)=>{
        e.preventDefault();
        console.log("clicked");
       emailjs.sendForm('service_9hww3zi','template_kix4gp9',e.target,'eGWgHRaCoCFJzaDKl').then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className="Contact" >
            <h1>الاتصال!!</h1>
            <form id="Contact-form" onSubmit={SubmitContactHandler}>
                <input type="text" placeholder="اسم" name="ContactName" id="contact-name" value={nameContact} onChange={onchangeContactName}  />
                <input type="email" placeholder="البريد الإلكتروني" name="ContactEmail" id="contact-email" value={emailContact} onChange={onchangeContactEmail}  />
                <textarea id="contact-textarea" placeholder="رسالة" name="message" value={message} onChange={onchangeMessage}/>
                <Button variant="outlined" color="primary" id="Contact-Submit" type="submit">إرسال</Button>            
            </form>
        </div>
    );
}