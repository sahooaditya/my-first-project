import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1005 }}>
      <AppBar position="static">
        <Toolbar>
          Total assets converted(USDT): 
          <h1 style={{paddingLeft:'30px'}}>120.077605</h1>
          <RemoveRedEyeIcon sx={{ fontSize: 40 }} style={{paddingLeft:"20px"}} />
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <div style={{paddingRight:"100px"}}>
          <Button variant="contained" color="success">Batch Settings</Button>
          </div>
      </Toolbar>
      </AppBar>
    </Box>
  );
}
