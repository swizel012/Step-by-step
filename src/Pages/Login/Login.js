import React from 'react'
import classes from './Login.modules.scss';
import Logo from '../../components/Logo/Logo';
class Login extends React.Component {
  render() {
    return (
      <div  > 
        <Logo> </Logo>
      <div class="body" >
        <img width="46%"   src="./assets/5.jpg"/> 
        <form>
  
  <div class="segment">
    <h1>Sign in</h1>
  </div>
  
  <label>
    <input class="ip" type="text" placeholder="Email Address"/>
  </label>
  <label>
    <input class="ip"  type="password" placeholder="Password"/>
  </label>
  <button class="red but" type="button"><i class="icon ion-md-lock"></i> Log in</button>
  <br/>
  Forgot passwrod? <a href="#">Click Here </a>
  
  
  
</form>
        
      </div></div>
    )
  }
}
export default Login