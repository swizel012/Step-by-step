import React from 'react';
import Logo from '../../components/Logo/Logo';
import classes from './Register.modules.css';
import {Link} from 'react-router-dom';

class Register extends React.Component {
  render() {
    return(
      <div  > 
        <Logo> </Logo>
      <div class="body" >
        <img width="46%"  src="./assets/5.jpg"/> 
        <form>
  
  <div>
  <div class="segment">
    <h1>Sign up</h1>
  </div>
  <label>
    <input class="ip" type="text" placeholder="Name"/>
  </label>
  <label>
    <input class="ip" type="text" placeholder="Email Address"/>
  </label>

  
  <label>
    <input class="ip"  type="password" placeholder="Create password"/>
  </label>
  <label>
    <input class="ip"  type="password" placeholder="Re-enter password"/>
  </label>


  <button class="red but" type="button">Register<i class="icon ion-md-lock"></i> </button>
  
 

  <br/>
  Already a member ? <Link to="/login"> login </Link><br/>
  </div>

</form>


        
      </div>
      
      </div>
    )
  }
}
export default Register