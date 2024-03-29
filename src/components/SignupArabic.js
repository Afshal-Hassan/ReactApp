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
        axios.get('https://spring-boot-deployed.herokuapp.com/token',{
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
            history.push('./postload-arabic');
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
    const [select, setSelect] = useState("+92");
    const[phoneNoCustom,setCustomPhoneNo]=useState();
    const onchangePhoneNoCustom=(event)=>{
        setCustomPhoneNo(event.target.value)
    }

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
    const onchangeSelect = (event) => {
        setSelect(event.target.value);
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
                phoneNo: select+phoneNo,
                userType: typeOfSignup,
                signUpDate: signupDate

            },{
                headers: {"Access-Control-Allow-Origin": "https://react-app-first-version.herokuapp.com" 
                
                
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
            <h1>اشتراك!!</h1>
            <p id="Login-Success">Successfully Registered</p>
            

            <form id="SignUpForm">
            <div id="NoteForSubscription">إذا قمت بالتسجيل كـ Transporter ، فيجب عليك دفع 3 دولارات شهريًا</div>
            <div id="SecondNoteForSubscription">إذا قمت بالتسجيل بصفتك وسيطًا ، فيجب عليك دفع 3 دولارات شهريًا</div>
            <div id="SecondNoteForSubscription">مجاني للشاحن</div>


                <input type="text" placeholder="اسم
" name="Name" id="name" value={name} onChange={onchangeName} />
                <input type="email" placeholder="البريد الإلكتروني
" name="Email" id="email" value={email} onChange={onchangeEmail} />
                <input type="password" placeholder="كلمة المرور
" name="Password" id="password" value={password} onChange={onchangePassword} />
                <input type="text" value={country} placeholder="دولة" id="country" onChange={onchangeText} />
                <div id='phoneNumber'>
                <NativeSelect
                  
                  id="NativeSelectphoneNo" 
                  value={select}
                  onChange={onchangeSelect}
              >
                     <option value="+92">+92 (Pakistan)</option>
                     <option value="+91">+91 (India)</option>
                     <option value="+93">+93 (Afghanistan)</option>
                     <option value="+61">+61 (Australia)</option>
                     <option value="+994">+994 (Azerbaijan)</option>
                     <option value="+880">+880 (Bangladesh)</option>
                     <option value="+55">+55 (Brazil)</option>
                     <option value="+1">+1 (Canada)</option>
                     <option value="+86">+86 (China)</option>
                     <option value="+33">+33 (France)</option>
                     <option value="+49">+49 (Germany)</option>
                     <option value="+30">+30 (Greece)</option>
                     <option value="+62">+62 (Indonesia)</option>
                     <option value="+98">+98 (Iran)</option>
                     <option value="+964">+964 (Iraq)</option>
                     <option value="+966">+966 (Saudia Arabia)</option>
                     <option value="+363">+363 (Ireland)</option>
                     <option value="+39">+39 (Italy)</option>
                     <option value="+81">+81 (Japan)</option>
                     <option value="+965">+965 (Kuwait)</option>
                     <option value="+60">+60 (Malaysia)</option>
                     <option value="+230">+230 (Mauritius)</option>
                     <option value="+52">+52 (Mexico)</option>
                     <option value="+977">+977 (Nepal)</option>
                     <option value="+850">+850 (North Korea)</option>
                     <option value="+48">+48 (Poland)</option>
                     <option value="+974">+974 (Qatar)</option>
                     <option value="+1">+1 (USA)</option>
                     <option value="+44">+44 (UK)</option>
                     <option value="+971">+971 (UAE)</option>
                     <option value="+20">+20 (Egypt)</option>
                     <option value="+968">+968 (Oman)</option>
                     <option value="+973">+973 (Bahrain)</option>
                     <option value="+961">+961 (Lebanon)</option>
                     <option value="+963">+963 (Syria)</option>
                     <option value="+962">+962 (Jordan)</option>
                     <option value="+218">+218 (Libya)</option>
                     <option value="+90">+90 (Turkey)</option>
                     <option value="+64">+64 (NZ)</option>
              </NativeSelect>
                <input type="tel" placeholder="رقم الهاتف:
" name="PhoneNumbers" onChange={onchangePhoneNo} id="phoneNo" value={phoneNo} /></div>
                <input type="tel" placeholder="(Optional) Custom Phone No:  " name="PhoneNumbers" onChange={onchangePhoneNoCustom} id="phoneNo" value={phoneNoCustom} />

                <div className="div-select">
                    <InputLabel htmlFor="select" id="LabelSignupAs">Signup As</InputLabel>
                    <NativeSelect
                        value={typeOfSignup}
                        id="NativeSelect" onChange={onchangeTypeOfSignup}
                    >

                        <option value="Transporter">الناقل</option>
                        <option value="Shipper">الشاحن</option>
                        <option value="Broker">وسيط</option>
                    </NativeSelect>

                </div>
                
                <Link to="/login-arabic" id="href-login">تسجيل الدخول؟</Link>
                <Button value="Submit" onClick={SubmtHandler} variant="outlined" color="primary" id="Signup-Submit" disabled={disabledValue}>اشتراك</Button>            
                </form>
               
            <ToastContainer />
        </div>
    );
}

