import React, { Component } from "react"
import Logo from '../../components/Logo/Logo';
import classes from './Login.modules.scss';
import {Link} from 'react-router-dom';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import MyProfile from '../Profile/MyProfile'


require('dotenv').config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "condescending-banach-cee563.netlify.com"
})

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    
  return (
    <div>
      {this.state.isSignedIn ? (
   
     <MyProfile> </MyProfile>
      
      ) : (
        <div>
            <Logo> </Logo>
            <div class="body" >
              <img width="46%"   src="./assets/5.jpg"/> 
              <form>
        
        <div class="segment">
          <h1>Sign in</h1>
        </div>
        
        <label>
          <input class="ip" type="text" placeholder="Email or username"/>
        </label>
        <label>
          <input class="ip"  type="password" placeholder="Password"/>
        </label>
        <Link to="/myprofile"  > 
        <button  class="red but" type="button"><i class="icon ion-md-lock"></i> Log in</button>
        </Link>
       
        <StyledFirebaseAuth 
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        
  
        Forgot passwrod? <a href="#">Click Here </a>

        <br/>
        <center>- or- </center>
        <br/>
        <Link to="/register">  
        <button class="red but" type="button"><i class="icon ion-md-lock"></i> Register
        <br/>
        </button>
        </Link>   
 
      </form>
              
            </div>
      
    </div>
        )}
      </div>
    

    
  );
}
}
export default Login
