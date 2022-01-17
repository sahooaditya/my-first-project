import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
// import SimpleContainer from './container';
// import Container from '@mui/material/Container';

const action = (
  
  <Button color="secondary" style={{backgroundColor:"yellow"}} size="large">
    Update
  </Button>
  
);
const action2 = (
  
  <Button color="secondary" style={{backgroundColor:"yellow"}} size="large">
    Bind
  </Button>
  
);


export default function LongTextSnackbar() {
  return (
    // <Container maxWidth="sm">
    <div style={{ paddingTop:"70px",paddingLeft:"100px"}}>
    <Stack spacing={3} sx={{ maxWidth:800,maxHeight:800 }}>
      <SnackbarContent message="Binance." action={action} style={{height:"150px"}} />
      <SnackbarContent
        message="Huobi

        ."
        action={action2}
        style={{height:"150px"}}/>
      <SnackbarContent
        message={ 'Coinbase Pro.'}
        action={action2}
        style={{height:"150px"}}/>
    </Stack>
    {/* <SimpleContainer/> */}
    </div>
    // </Container>
  );
}