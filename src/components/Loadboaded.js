import React from 'react';
import  Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./Loadboaded.css"

export default function Loadboaded() {
  return (
    <div id='loadboaded'>
        <div id='loadboaded-component'>
            <h1 id="loadboaded-heading">Loadboarded</h1>
            <Button  id="FullContainer" variant='outlined'><Link to="/getallpostload" id='linked1' >Full Container</Link></Button>
            <Button color='primary' variant='outlined' id="ShareContainer"><Link to="/sharecontainerloads" id='linked2'>Share Container</Link></Button>


        </div>
    </div>
  )
}
