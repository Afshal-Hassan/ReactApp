import React from 'react';
import  Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./Loadboaded.css"

export default function Loadboaded() {
  return (
    <div id='loadboaded'>
        <div id='loadboaded-component'>
            <h1 id='Language'>Select A Language</h1>
            <Button  id="FullContainer" variant='outlined'><Link to="/home" id='linked1' >English</Link></Button>
            <Button color='primary' variant='outlined' id="ShareContainer"><Link to="/home-arabic" id='linked2'>Arabic</Link></Button>


        </div>
    </div>
  )
}
