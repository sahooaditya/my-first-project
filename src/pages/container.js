import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }} style={{textAlign:'left',padding:'0px'}}>
    
      <Typography variant="h4" gutterBottom component="div">
      Precautions

      </Typography>
      <Typography variant="h5" gutterBottom component="div">
      Binance
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
      1. Please confirm that the API permission has checked "Enable Spot & Margin Trading"
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
      2. Please enter the correct API, please do not enter special characters
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
      Huobi
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
      1. Please make sure that "Trade" is checked for API permissions
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
      2. Please enter the correct API, please do not enter special characters
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
      Coinbase Pro
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
      1. Please make sure that "View" and "Trade" are checked in the API permissions
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
      2. Please enter the correct API, please do not enter special characters
      </Typography>
    </Box>
  );
}