import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react"


import './Login.css'
import { Button } from "@mui/material";



export default function Login() {

    const history = useHistory();
    const [emailLogin, setLoginEmail] = useState();
    const [passwordLogin, setLoginPassword] = useState();
    const url = `https://spring-boot-deployed.herokuapp.com/dosignin`;
    const url2 = `https://spring-boot-deployed.herokuapp.com/loginData/${emailLogin}`;

    var bodyform = new FormData();
    bodyform.append("email", emailLogin);
    bodyform.append("password", passwordLogin);








    useEffect(() => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let current = month + "-" + day + "-" + year;

        if (localStorage.getItem('email')) {
            if (localStorage.getItem("userType") == "Broker" || localStorage.getItem("userType") == "Transporter") {
                let subscriptionDate1 = localStorage.getItem("Subscription Date");

                var currentDate = new Date(current);
                var SubscriptionDate2 = new Date(subscriptionDate1);



                // To calculate the time difference of two dates
                var Difference_In_Time = currentDate.getTime() - SubscriptionDate2.getTime();

                // To calculate the no. of days between two dates
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                console.log(Difference_In_Days);
                if (Difference_In_Days > 30) {
                    console.log("Yes Over");
                    history.push('./login');
                    setTimeout(function () {
                        toast.error("Your Subscription was only for one month", {
                            position: "top-right"
                        })
                        toast.error("You need to pay to get your Subscription", {
                            position: "top-right"
                        })
                    }, 800)
                    localStorage.removeItem("Subscription Date");
                    localStorage.removeItem("email");
                    localStorage.removeItem("userType");

                }
                else {
                    history.push('./getallpostload');
                }

            }
            else {
                history.push('./getallpostload');
            }

        }
        else {
            history.push('./login');
        }






    }, [])


    const [status, setStatus] = useState("null");

    const [disabledValue, setDisabled] = useState(true);



    const onchangeLoginName = (event) => {
        setLoginEmail(event.target.value);
        if (document.getElementById("name-login").value != 0) {
            if (document.getElementById("password-login").value != 0) {
                setDisabled(false);
            }
            else {
                setDisabled(true);
            }

        }
        else {

            setDisabled(true);



        }
    }

    const onchangeLoginPassword = (event) => {
        setLoginPassword(event.target.value);
        if (document.getElementById("name-login").value != 0) {
            if (document.getElementById("password-login").value != 0) {
                setDisabled(false);
            }
            else {
                setDisabled(true);
            }

        }
        else {

            setDisabled(true);
        }
    }
    function LoginHandler(e) {
        e.preventDefault();


        let tempStatus;
        let check = 0;

        // let signupDate=new Date();






        // console.log(DiffInDays);

        if (document.getElementById("name-login").value == 0) {
            tempStatus = "error"
            setStatus(tempStatus);
            if (status == "error") {
                toast.error("Not Registered", {
                    position: "top-right"
                })
            }
            toast.error("Enter Name", {
                position: "top-right"
            });
        }
        else if (document.getElementById("password-login").value == 0) {
            tempStatus = "error"
            setStatus(tempStatus);
            if (status == "error") {
                toast.error("Not Registered", {
                    position: "top-right"
                })
            }
            toast.error("Enter Password", {
                position: "top-right"
            });
        }
        else {
            let name = document.getElementById("name-login").value;
            let password = document.getElementById("password-login").value

            axios.post(url, bodyform, {
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then((res) => {
                    axios.get(url2).then((res) => {
                        console.log(res);
                        localStorage.setItem("email", res.data[0]);
                        localStorage.setItem("userType", res.data[1]);
                        localStorage.setItem("Subscription Date", res.data[2]);
                    })

                    if (res.status == 200) {
                        tempStatus = "success";
                        setStatus(tempStatus);
                        toast.success("Successfully Logged In", {
                            position: "top-right"
                        })
                        setTimeout(function () {
                            document.getElementById("loader").style.cssText = "display:none";
                        }, 10)
                        setTimeout(function () {
                            document.getElementById("loader").style.cssText = "display:none";
                        }, 1800);
                        setTimeout(function () {
                            window.location.href = "/getallpostload";
                        }, 2000);
                    }





                }).catch((err) => {
                    toast.error("Enter correct Email or Password", {
                        position: "top-right"
                    })
                })


        }
    }
    return (
        <div id="Login-Module">
            <div class="progress" id="loader">
                <div class="indeterminate" id='loader'></div>
            </div>
            <h1>Login!!</h1>
            <form>
                <input type="email" placeholder="Email" name="email" id="name-login" value={emailLogin} onChange={onchangeLoginName} />
                <input type="password" placeholder="Password" name="password" id="password-login" value={passwordLogin} onChange={onchangeLoginPassword} />
                <Link to="/signup" id="href-signup">Signup?</Link>
                <Button value="Submit" variant="outlined" type="submit" color="primary" id="Login-Submit" disabled={disabledValue} onClick={LoginHandler}>Login</Button>
            </form>
            <ToastContainer />
        </div>);


}
