import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getReviews } from '../../actions/actions.js';
import texas from '../../imgContent/texasIns.svg';

import logo from '../../imgContent/automaxLogo.svg';
import mPic from '../../imgContent/technician.png';
import shop from '../../imgContent/automaxS.svg';
import bgshape2 from '../../imgContent/BGShape2.svg';
import MapSection from '../googleMap/map.js';
import Form from '../form/form.js';
import ReviewPosts from '../reviews/reviewPosts';
import { Grow } from '@material-ui/core';







const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [currentId, dispatch]);

  console.log();


  return (
    <div className="container">
      <nav >
        <div className='title'>
          <h1 className="app">Automax</h1>
        </div>

        <div>
          <div className="content" activestyle="true">
            <button className="navButton">Make An Appointment</button>
            <Link activestyle="true" to='/OurShop'><button className="navButton">Our Shop</button></Link>
            <button href="#contact" className="navButton">Contact Us</button>
          </div>
        </div>
      </nav>

      <div className='main1'>
        <div className="section1">
          <p className='welcome'>Welcome to</p>
          <h3 className='main2'>Automax</h3>
          <p className="tagline">Here at Automax we take pride in taking care of your <br /> car as our top priority! Book an Appointment<br /> or checkout our walk-in services today!</p>
        </div>

        <div className='bgpic'>
          <div className='logo3' >
            <img className='logo34' alt='automax logo' src={logo} width='300px' height='300px' />
          </div>
          <img alt='miguel mechanic' src={mPic} height='630px' width='500px' className='miguel' />
        </div>
      </div>

      <img alt='bg shape' className='bgShape2b' src={bgshape2} />

      <div className="section2">
        <img className='shopd' alt='automax shop' src={shop} width='450px' height='450px' />
        <div className='bookNow'>
          <h3 className='font'>our shop</h3>
          <p className='shopContent'>our shop provides top quality services to our clients starting by <br /> taking care our your car and making sure your issues are gone! <br /> Book an Appointment today!</p>
          <div className='learnMore2'>
            <Link to='contactUs' activestyle>
              <button>Book Now</button>
            </Link>
          </div>
        </div>
      </div>

      <img alt='bg shape' className='bgShape2' src={bgshape2} />

      <div className='shape5b'>
        <div className='shape5'></div>
      </div>

      <section className='lineGraph'>
        <div className='mechanicIcons'></div>
        <div>
          <h4 className='main3'>We Offer</h4>
          <div className='linegraph2'></div>
        </div>
      </section>

      <section className='section4' id='map'>
        <div className='map'>
          <div className='bgPic2'></div>
          <MapSection />
        </div>
        <div className='content'>
          <div className='bgPic3'></div>
          <h3 className='main4 '>oil <br />change <br />walk-ins <br />til Noon</h3>
        </div>
      </section>




      <Form />

      <Grow in>
        <ReviewPosts setCurrentId={setCurrentId} />
      </Grow>






      <footer id='contact' className="footer">
        <div className="div1">
          <p className='main'>Contact us</p>
          <p>Automax@gmail.com</p>
          <p>512-670-3064</p>
          <br />
          <p className='main'>Our Address is</p>
          <a href='#map'>20012 Algreg St Pflugerville, TX 78660</a>
        </div>
        <div className='div3'>
          <p className='main'>Working Hours</p>
          <p>Mon - 8am-6pm</p>
          <p>Tues - 8am-6pm</p>
          <p>Wed - 8am-6pm</p>
          <p>Thurs - 8am-6pm</p>
          <p>Fri - 8am-6pm</p>
          <p>Sat - closed</p>
          <p>Sun - closed</p>
        </div>
        <div className="div2">
          <p className='main'>note*</p>
          <p>State Inspections are walk-ins <br /> ONLY, no Appointments.</p>
          <p>Automax offers repairs, state <br /> inspections, and engine swaps.</p>
          <p>Automax does not offer body <br /> repairs, paint jobs, balancing <br /> or alignment(unless serviced).</p>
        </div>
        <img className='logo2' alt='state inspection logo' width='150px' height='150px' src={texas} />
        <div className='logo'>
          <img alt='automax logo' src={logo} width='200px' height='200px' />
        </div>
      </footer>
    </div>
  );
}

export default Home;