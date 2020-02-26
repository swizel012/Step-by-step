import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import Navibar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Deck from '../../components/cardDeck/cardDeck';
import {Link} from 'react-router-dom';
import classes from './Home.module.css';


class Home extends Component {
  render() {
    return (
      <div>
        
        <Logo> </Logo>
        <div className={classes.Link}>
          
        <Link to="/login">login /</Link>
        <Link to="/register">Register</Link>

        
        </div>
        <Navibar> </Navibar>
        <Carousel></Carousel>
        <center> <h3> Popular</h3></center>
        <Deck> </Deck>
        <Deck> </Deck>

        
      </div>
    );
  }
}

export default Home;