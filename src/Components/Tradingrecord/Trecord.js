import React from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function Trecord() {
    
    const [value, setValue] = React.useState([null, null]);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div  ClassName='col-md2'>
            <ExploreIcon />
            <span>Trading Records</span>
            <div>



                <Stack direction="row" spacing={1.5}>
                    <Button  color="success" >
                        Binance
                    </Button>
                    <Button  color="success">
                        Huobi
                    </Button>
                    <Button  color="success">
                        CoinbasePro
                    </Button>

                    <Divider orientation="vertical" flexItem />
                    <Stack direction="row" spacing={.5}>
                        <Button  color="success">
                            All
                        </Button>
                        <Button  color="success">
                            Sell
                        </Button>
                        <Button  color="success">
                            Buy in
                            </Button >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Box >
                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange} style={{ width: '100px', height:'30px',marginTop:'13px'}}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>&nbsp;&nbsp;
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
      <Stack spacing={3}>
        <DesktopDateRangePicker
        
          startText=" start"
          endText="end"
          
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) =>  (
            <React.Fragment >
            
              <TextField {...startProps} style={{ width: '200px', height:'10px',marginTop:'13px',border:'non'}} />

              <TextField {...endProps} />
                  
            </React.Fragment>
          )}
        />
      </Stack>
    </LocalizationProvider>
    
                    </Stack>
                </Stack>




            </div>

           
        </div>
    )
}

export default Trecord;
