import * as React from 'react';
import Box from '@mui/material/Box';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Main() {
    return ( <
        Box sx = {
            {
                width: 1705,
                height: 150,
                backgroundColor: 'primary.dark',


            }
        }
        >
        <div style={{color:'white'}}>
            <h3 style={{paddingLeft:'30px'}}>Total assets converted(USDT):</h3> 
            <h1 style={{paddingLeft:'30px'}}>120.077605
            <RemoveRedEyeIcon sx={{ fontSize: 30 }} style={{paddingLeft:"20px"}} /></h1>
        </div>
        </Box>
    );
}