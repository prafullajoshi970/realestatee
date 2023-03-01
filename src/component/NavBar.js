import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function NavBar(){
   
    return (
        <div className='NavBar'>
            <img className='NavImg' src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXN0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=' '></img>
           <h4>PJ RealEstate website</h4>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" style={{color: "white"}} >Sell</Button>
                <Button variant="outlined" style={{color: "white"}} >Buy</Button>
                <Button variant="outlined" style={{color: "white"}} >Contact</Button>
                <Button variant="outlined" style={{color: "white"}} >More</Button>
            </Stack>
        </div>
    )
}

export default NavBar