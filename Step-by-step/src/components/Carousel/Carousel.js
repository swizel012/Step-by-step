import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import classes from './Carousel.module.css';
import {Link} from 'react-router-dom'
const Carousel =()=>
{
  return (
    <div className={classes.card}>
      <div className={classes.text}> 
        <h5 >Share your kitchen stories</h5>
          <h1> Make a Recipe Blog for Free!</h1>
          <Button > <Link to="/register" className={classes.link}>Get Started</Link></Button>  <button > <Link to="/login">Login</Link></button>
          </div>
          <div>
             <img width= "90%" height="90%" src="/assets/main.jpg"/> 
          </div>
    </div>
  );

}


export default Carousel;
