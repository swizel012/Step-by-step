import React from 'react';
import Logo from '../../components/Logo/Logo';
import classes from './Register.modules.css';

class Register extends React.Component {
  render() {
    return(
      <div  > 
        <Logo> </Logo>
      <div class="body" >
        <img width="46%"  src="./assets/5.jpg"/> 
        <form>
  
  <div class="segment">
    <h1>Sign up</h1>
  </div>
  
  <label>
    <input class="ip" type="text" placeholder="Email Address"/>
    <input class="ip" type="text" placeholder="Email Address"/>
  </label>
  <label>
    <input class="ip"  type="password" placeholder="Password"/>
  </label>
  <label>
    <input class="ip"  type="password" placeholder="Re-enter password"/>
  </label>

  <button class="red but" type="button">Register<i class="icon ion-md-lock"></i> </button>
  
  <br/>
  Forgot passwrod? <a href="#">Click Here </a>


</form>


        
      </div>
      
      </div>
    )
  }
}
export default Register