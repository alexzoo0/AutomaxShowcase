import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../imgContent/automaxLogo.svg';
import mPic from '../../imgContent/technician.png';


function OurShop() {


    
  return (
    <div>
    <nav >
      <div className='title'>
        <Link style={{textDecoration: 'none'}} to='../'><h1 className="app">Automax</h1></Link>
      </div>
      <div className="content">
      <button className="navButton">Make An Appointment</button>
      <Link to='../OurShop'><button className="navButton">Our Shop</button></Link>
      <button className="navButton">Contact Us</button>
    </div>
    </nav>
     
     <div className='main1'>
     
    </div>

    <div className='main1'>
      <div className="section1">
        <p className='welcome'>Welcome to</p>
        <h3 className='main2'>our shop</h3>
        <p className="tagline">Here at Automax we take pride in taking care of your <br/> car as our top priority! Book an Appointment<br /> or checkout our walk-in services.</p>
      </div>
     
      <div className='bgpic'>
          <div className='logo3' >
          <img className='logo34' alt='automax logo' src={logo} width='300px' height='300px'/>
          </div>
          <img alt='miguel mechanic' src={mPic} height='630px' width='500px' className='miguel'/>
        </div>
    </div>
    </div>
  );
}

export default OurShop;