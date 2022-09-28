import React, { useState } from 'react'
import NativeSelect from "@mui/material/NativeSelect";
import { InputLabel } from "@mui/material";
import "./Filter.css";
import { Button } from "@mui/material";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Filter() {
    const [filtercity, setfilterCity] = useState("Karachi");
    const[pointOfDelivery,setPOD]=useState("Karachi");
    const[date,setDate]=useState();
    const url=`http://localhost:8080/filterpostload/${pointOfDelivery}/${filtercity}/${date}`;
    
    const onChangeFilterCity = (event) => {
        setfilterCity(event.target.value);
    }
    const onChangeFilterCity2 = (event) => {
        setPOD(event.target.value);
    }
    const onChangeDate=(event)=>{
        let dateValue = document.getElementById("date").value;
       let replacevalue= dateValue.replace("/","-");
       console.log(replacevalue);
       console.log(event.target.value);

        setDate(event.target.value);
    }
    
    const onchangePOD=(event)=>{
        setPOD(event.target.value);
    }
    const Apply=(event)=>{
        event.preventDefault();
        axios.get(url).then((res)=>{
            console.log(res);
            localStorage.setItem("FindContainerMatched",JSON.stringify(res.data));
            toast.info("Applying Filters",{
                position:"top-right"
            })
            toast.warn("Please Wait for few seconds",{
                position:"top-right"
            })
            setTimeout(function(){
                window.location.href="/matchedcontainers";
            },1600);
        }).catch((error)=>{
            console.log(error);
            toast.error("Request Failed",{
                position:"top-right"
            })
            toast.error("Might be some problems from server",{
                position:"top-right"
            })
        })
    }
    return (
        <div id='filter-component'>
            <div id='filter-module'>
                <h1>Filter</h1>
                <label htmlFor='select' id='City'>Point Of Loading</label>
                <NativeSelect
                    value={filtercity}
                    id="NativeSelect" onChange={onChangeFilterCity}
                >

                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Murree">Murree</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Multan">Multan</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Sargodha">Sargodha</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Sukkur">Sukkur</option>
                    <option value="Larkana">Larkana</option>
                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                    <option value="Sheikhupura">Sheikhupura</option>
                    <option value="Jhang">Jhang</option>
                    <option value="Dera Gazi Khan">Dera Gazi Khan</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Sahiwal">Sahiwal</option>
                    <option value="Wah Cantontment">Wah Cantontment</option>
                    <option value="Mardan">Mardan</option>
                    <option value="Kasur">Kasur"</option>
                    <option value="Okara">Okara</option>
                    <option value="Mingora">Mingora</option>
                    <option value="Nawabshah">Nawabshah</option>
                    <option value="Chiniot">Chiniot</option>
                    <option value="Kotri">Kotri</option>
                    <option value="Kamoke">Kamoke</option>
                    <option value="Hafizabad">Hafizabad</option>
                    <option value="Sadiqabad">Sadiqabad</option>
                    <option value="Mir Pur Khas">Mir Pur Khas</option>
                    <option value="Kohat">Kohat</option>
                    <option value="Burewala">Burewala</option>
                    <option value="Khanewal">Khanewal</option>
                    <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                    <option value="Turbat">Turbat</option>
                    <option value="Muzaffiragarh">Muzaffiragarh</option>
                    <option value="Abbotabad">Abbotabad</option>
                    <option value="Mandi Bahudin">Mandi Bahudin</option>
                    <option value="Shikarpur">Shikarpur</option>
                    <option value="Jacobabad">Jacobabad</option>
                    <option value="Jhelum">Jhelum</option>
                    <option value="Khanpur">Khanpur</option>
                    <option value="Khairpur">Khairpur</option>
                    <option value="Khuzdar">Khuzdar</option>
                    <option value="PakPattan">PakPattan</option>
                    <option value="Hub">Hub</option>
                    <option value="Daska">Daska</option>
                    <option value="Gojra">Gojra</option>
                    <option value="Dadu">Dadu</option>
                    <option value="Muridke">Muridke</option>
                    <option value="Dadu">Dadu</option>

                    <option value="Bahawalnagar">Bahawalnagar</option>

                    <option value="Samundari">Samundari</option>

                    <option value="Muzaffarabad">Muzaffarabad</option>

                    <option value="Attock">Attock</option>

                    <option value="Chakwal">Chakwal</option>

                    <option value="Mansehra">Mansehra</option>

                    <option value="Laiyah">Laiyah</option>

                    <option value="Mirpur">Mirpur</option>

                    <option value="Chaman">Chaman</option>

                    <option value="Nowshehra">Nowshehra</option>

                    <option value="Mianwali">Mianwali</option>

                    <option value="Bhakkar">Bhakkar</option>


                    <option value="Gwadar">Gwadar</option>

                    <option value="Kandhkot">Kandhkot</option>

                    <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>

                    <option value="Jatoi">Jatoi</option>

                    <option value="Ghotki">Ghotki</option>

                    <option value="Badin">Badin</option>

                    <option value="Narowal">Narowal</option>

                    <option value="Bhalwal">Bhalwal</option>
                </NativeSelect>
                <label htmlFor='select' id='City2'>Point Of Delivery</label>
                <NativeSelect
                    value={pointOfDelivery}
                    id="NativeSelect" onChange={onChangeFilterCity2}
                >

                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Murree">Murree</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Multan">Multan</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Sargodha">Sargodha</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Sukkur">Sukkur</option>
                    <option value="Larkana">Larkana</option>
                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                    <option value="Sheikhupura">Sheikhupura</option>
                    <option value="Jhang">Jhang</option>
                    <option value="Dera Gazi Khan">Dera Gazi Khan</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Sahiwal">Sahiwal</option>
                    <option value="Wah Cantontment">Wah Cantontment</option>
                    <option value="Mardan">Mardan</option>
                    <option value="Kasur">Kasur"</option>
                    <option value="Okara">Okara</option>
                    <option value="Mingora">Mingora</option>
                    <option value="Nawabshah">Nawabshah</option>
                    <option value="Chiniot">Chiniot</option>
                    <option value="Kotri">Kotri</option>
                    <option value="Kamoke">Kamoke</option>
                    <option value="Hafizabad">Hafizabad</option>
                    <option value="Sadiqabad">Sadiqabad</option>
                    <option value="Mir Pur Khas">Mir Pur Khas</option>
                    <option value="Kohat">Kohat</option>
                    <option value="Burewala">Burewala</option>
                    <option value="Khanewal">Khanewal</option>
                    <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                    <option value="Turbat">Turbat</option>
                    <option value="Muzaffiragarh">Muzaffiragarh</option>
                    <option value="Abbotabad">Abbotabad</option>
                    <option value="Mandi Bahudin">Mandi Bahudin</option>
                    <option value="Shikarpur">Shikarpur</option>
                    <option value="Jacobabad">Jacobabad</option>
                    <option value="Jhelum">Jhelum</option>
                    <option value="Khanpur">Khanpur</option>
                    <option value="Khairpur">Khairpur</option>
                    <option value="Khuzdar">Khuzdar</option>
                    <option value="PakPattan">PakPattan</option>
                    <option value="Hub">Hub</option>
                    <option value="Daska">Daska</option>
                    <option value="Gojra">Gojra</option>
                    <option value="Dadu">Dadu</option>
                    <option value="Muridke">Muridke</option>
                    <option value="Dadu">Dadu</option>

                    <option value="Bahawalnagar">Bahawalnagar</option>

                    <option value="Samundari">Samundari</option>

                    <option value="Muzaffarabad">Muzaffarabad</option>

                    <option value="Attock">Attock</option>

                    <option value="Chakwal">Chakwal</option>

                    <option value="Mansehra">Mansehra</option>

                    <option value="Laiyah">Laiyah</option>

                    <option value="Mirpur">Mirpur</option>

                    <option value="Chaman">Chaman</option>

                    <option value="Nowshehra">Nowshehra</option>

                    <option value="Mianwali">Mianwali</option>

                    <option value="Bhakkar">Bhakkar</option>


                    <option value="Gwadar">Gwadar</option>

                    <option value="Kandhkot">Kandhkot</option>

                    <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>

                    <option value="Jatoi">Jatoi</option>

                    <option value="Ghotki">Ghotki</option>

                    <option value="Badin">Badin</option>

                    <option value="Narowal">Narowal</option>

                    <option value="Bhalwal">Bhalwal</option>
                </NativeSelect>
                <input type="date"  id="date" value={date} onChange={onChangeDate} />
                <Button value="Submit" variant="outlined" type="submit" color="primary" id="Apply-Submit" onClick={Apply}>Apply</Button>
            </div>
            <ToastContainer/>
        </div>
    )
}

