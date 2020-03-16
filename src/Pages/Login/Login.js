import React from 'react'
import classes from './Login.modules.scss';
import Logo from '../../components/Logo/Logo';
import {Link} from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
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
        <button onClick={handleToggle} class="red but" type="button"><i class="icon ion-md-lock"></i> Log in</button>
        </Link>
        <br/>
        Forgot passwrod? <a href="#">Click Here </a>
        <br/>
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
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
