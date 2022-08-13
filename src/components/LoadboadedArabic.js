import React from 'react';
import  Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./Loadboaded.css"

export default function Loadboaded() {
  return (
    <div id='loadboaded'>
        <div id='loadboaded-component'>
            <h1 id="loadboaded-heading">اللوح المحمل</h1>
            <Button  id="FullContainer" variant='outlined'><Link to="/postload-arabic" id='linked1' >حاوية كاملة</Link></Button>
            <Button color='primary' variant='outlined' id="ShareContainer"><Link to="/sharecontainer-arabic" id='linked2'>مشاركة الحاوية</Link></Button>


        </div>
    </div>
  )
}
