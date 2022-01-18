import React from 'react';
import ButtonAppBar from '../nav';
import Header from './Header';
import Trade from './Trade';
import CustomFooter from './CustomFooter';



function Pairlist() {
    return (
        <div>
            <ButtonAppBar/>
            <Header/>
            <Trade/>
            <CustomFooter/>
           
           
           
        </div>
    )
}

export default Pairlist;
