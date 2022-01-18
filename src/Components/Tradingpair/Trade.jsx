import React from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Button from '@mui/material/Button';

function Trade() {
    return (
        <div>
            
            <h1>
                <MonetizationOnIcon sx={{ fontSize: 25 }} style={{color:"yellow", paddingTop:"20px"}}></MonetizationOnIcon>
                TRading Pair List:
            </h1>
            <lebel style={{padding:"10px 50px 0px 30px"}}>Exchange:</lebel>
            <label style={{padding:"8px 10px"}}><Button variant="contained" style={{width:"250px", backgroundColor:"red"}}>Binance</Button></label>
            <label style={{padding:"8px 10px"}}><Button style={{width:"250px"}} variant="contained" disabled>Huobi</Button></label>
            <label style={{padding:"8px 10px"}}><Button style={{width:"250px"}} variant="contained" disabled>Disabled</Button></label>
            <p><lebel style={{padding:"10px 50px 0px 30px"}}>Exchange:</lebel>
            <label style={{padding:"8px 10px"}}><Button variant="contained" style={{width:"250px", backgroundColor:"red"}}>All</Button></label>
            <label style={{padding:"8px 10px"}}><Button style={{width:"250px"}} variant="contained" disabled>Clcle strategy</Button></label>
            <label style={{padding:"8px 10px"}}><Button style={{width:"250px"}} variant="contained" disabled>One-shot strategy</Button></label>
            <label style={{padding:"8px 10px"}}><Button style={{width:"250px"}} variant="contained" disabled>Stop Margin call</Button></label>
            </p>
        </div>
    )
}

export default Trade;
