import axios from "axios";
import React, { useState } from "react";
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { InputLabel, Switch } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/Menu";
import NativeSelect from "@mui/material/NativeSelect";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { height } from "@mui/system";



export default function Signup() {
   
    var token;

    let date = new Date();
    let signupDate;

    const history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:8080/token',{
            headers: {"Access-Control-Allow-Origin": "http://localhost:3000" ,
                "Content-Type": "X-Auth-Token",
                "Access-Control-Allow-Methods":" GET, POST, PATCH, PUT, DELETE"

                
            }

        }).then((res)=>{
            console.log(res.data.token);
            let config = {
                headers: {
                    'X-CSRF-TOKEN': res.data.token,
                }
              }
        })
        if (localStorage.getItem('email')) {
            history.push('./dashbord');
        }
    }, []);

    const [disabledValue, setDisabled] = useState(true);

    const [status, setStatus] = useState("null");
    const [email, setEmail] = useState("");
    const url = `http://localhost:8080/signup/${email}`;
    const [country, setCountry] = useState("");
    const [name, setName] = useState("");

    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [typeOfSignup, setTypeOfSignup] = useState("Transporter");


    const onchangeText = (event) => {
        setCountry(event.target.value);
        if (document.getElementById("name").value != 0) {
            if (document.getElementById("password").value != 0) {
                if (document.getElementById("country").value != 0) {
                    if (document.getElementById("phoneNo").value != 0) {
                        if (document.getElementById("email").value != 0) {
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
                else {
                    setDisabled(true);
                }

            }
            else {
                setDisabled(true);
            }

        }
        else {

            setDisabled(true);



        }

    }
    const onchangeTypeOfSignup = (event) => {
        setTypeOfSignup(event.target.value);

    }
    const onchangeName = (event) => {
        setName(event.target.value);
        if (document.getElementById("name").value != 0) {
            if (document.getElementById("password").value != 0) {
                if (document.getElementById("country").value != 0) {
                    if (document.getElementById("phoneNo").value != 0) {
                        if (document.getElementById("email").value != 0) {
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
                else {
                    setDisabled(true);
                }

            }
            else {
                setDisabled(true);
            }

        }
        else {

            setDisabled(true);



        }
    }
    const onchangePassword = (event) => {
        setPassword(event.target.value);
        if (document.getElementById("name").value != 0) {
            if (document.getElementById("password").value != 0) {
                if (document.getElementById("country").value != 0) {
                    if (document.getElementById("phoneNo").value != 0) {
                        if (document.getElementById("email").value != 0) {
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
                else {
                    setDisabled(true);
                }

            }
            else {
                setDisabled(true);
            }

        }
        else {

            setDisabled(true);



        }
    }
    const onchangeEmail = (event) => {
        setEmail(event.target.value);
        if (document.getElementById("name").value != 0) {
            if (document.getElementById("password").value != 0) {
                if (document.getElementById("country").value != 0) {
                    if (document.getElementById("phoneNo").value != 0) {
                        if (document.getElementById("email").value != 0) {
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
                else {
                    setDisabled(true);
                }

            }
            else {
                setDisabled(true);
            }

        }
        else {

            setDisabled(true);



        }
    }
    const onchangePhoneNo = (event) => {
        setPhoneNo(event.target.value);
        if (document.getElementById("name").value != 0) {
            if (document.getElementById("password").value != 0) {
                if (document.getElementById("country").value != 0) {
                    if (document.getElementById("phoneNo").value != 0) {
                        if (document.getElementById("email").value != 0) {
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
                else {
                    setDisabled(true);
                }

            }
            else {
                setDisabled(true);
            }

        }
        else {

            setDisabled(true);



        }
    }
    function SubmtHandler(e) {

        e.preventDefault();
        let tempStatus;
        let check = 0;
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        signupDate = month + "-" + day + "-" + year


        if (document.getElementById("name").value == 0) {
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
        else if (document.getElementById("password").value == 0) {
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
        else if (document.getElementById("email").value == 0) {
            tempStatus = "error"
            setStatus(tempStatus);
            if (status == "error") {
                toast.error("Not Registered", {
                    position: "top-right"
                })
            }
            toast.error("Enter Email", {
                position: "top-right"
            });
        }
        else if (document.getElementById("country").value == 0) {
            tempStatus = "error"
            setStatus(tempStatus);
            if (status == "error") {
                toast.error("Not Registered", {
                    position: "top-right"
                })
            }
            toast.error("Enter Country", {
                position: "top-right"
            });
        }
        else if (document.getElementById("phoneNo").value == 0) {
            tempStatus = "error"
            setStatus(tempStatus);
            if (status == "error") {
                toast.error("Not Registered", {
                    position: "top-right"
                })
            }
            toast.error("Enter PhoneNo", {
                position: "top-right"
            });
        }



        else {



            axios.post(url, {
                name: name,
                email: email,
                password: password,
                country: country,
                phoneNo: phoneNo,
                userType: typeOfSignup,
                signUpDate: signupDate

            },{
                headers: {"Access-Control-Allow-Origin": "http://localhost:3000" 
                
                
            }

            })
                .then((res) => {

                    if (res.data == "Email already exists") {
                        toast.error("Not Registered", {
                            position: "top-right"
                        })
                        toast.error("Email Already Exists", {
                            position: "top-right"
                        })
                    }
                    else {
                        tempStatus = "success";
                        setStatus(tempStatus);
                        toast.success("Successfull Registered", {
                            position: "top-right"
                        })
                        setTimeout(function () {
                            document.getElementById("Login-Success").style.display = "inline";

                        }, 100);
                        setTimeout(function () {
                            document.getElementById("Login-Success").style.display = "none";
                        }, 3000);

                    }



                })



        }
    }





    return (
        <div className="SignupModule">
            <h1>!!التسجيل</h1>
            <p id="Login-Success">Successfully Registered</p>
            

            <form id="SignUpForm">
            <div id="NoteForSubscription">إذا قمت بالتسجيل كناقل ، فيجب عليك دفع 3 دولارات شهريا</div>
            <div id="SecondNoteForSubscription">إذا قمت بالتسجيل كوسيط ، فيجب عليك دفع 3 دولارات شهريا</div>
            <div id="SecondNoteForSubscription">مجانا للشاحن</div>


                <input type="text" placeholder="اسم" name="Name" id="name" value={name} onChange={onchangeName} />
                <input type="email" placeholder="البريد الإلكتروني" name="Email" id="email" value={email} onChange={onchangeEmail} />
                <input type="password" placeholder="شعار" name="Password" id="password" value={password} onChange={onchangePassword} />
                <input type="text" value={country} placeholder="بلد" id="country" onChange={onchangeText} />
                <input type="tel" placeholder="رقم الهاتف" name="PhoneNumbers" onChange={onchangePhoneNo} id="phoneNo" value={phoneNo} />
                <div className="div-select">
                    <InputLabel htmlFor="select" id="LabelSignupAs">اشترك باسم</InputLabel>
                    <NativeSelect
                        value={typeOfSignup}
                        id="NativeSelect" onChange={onchangeTypeOfSignup}
                    >

                        <option value="Transporter">نقل</option>
                        <option value="Shipper">الشاحن</option>
                        <option value="Broker">سمسار</option>
                    </NativeSelect>

                </div>
                
                <Link to="/login-arabic" id="href-login">تسجيل الدخول؟</Link>
                <Button value="Submit" onClick={SubmtHandler} variant="outlined" color="primary" id="Signup-Submit" disabled={disabledValue}>التسجيل</Button>            
                </form>
               
            <ToastContainer />
        </div>
    );
}

