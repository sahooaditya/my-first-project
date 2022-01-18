import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 10 }}
          ><Link href="Home" color="primary" style={{textDecoration: 'none' }}>QueenBot</Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ButtonGroup variant="text" size="large" color="primary"  aria-label="text button group">
            <Button><Link href="TradingPair" color="primary" style={{textDecoration: 'none' }}>Trading pair list</Link></Button>
            <Button><Link href="ApiBinding" color="primary" style={{textDecoration: 'none' }}>API binding</Link></Button>
            <Button><Link href="Tredingview" color="primary" style={{textDecoration: 'none' }}>Trading Records</Link></Button>
            <Button><Link href="Billing" color="primary" style={{textDecoration: 'none' }}>Billing Details</Link></Button>
          </ButtonGroup>
          </Typography>
          <Button variant="contained" color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
