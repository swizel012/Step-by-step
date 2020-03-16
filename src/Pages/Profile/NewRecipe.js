import React from 'react'
import Logo from '../../components/Logo/Logo';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    flex2:{
      position: 'absolute',
      top:'3%',
      right:'2%',
    },
    flex:{
      position: 'absolute',
      top:'3%',
      right:'50%',
    },
}));
export default function NewRecipe() {
    const classes = useStyles();
  
  return (
    <div>
      
        <Logo> </Logo> 
  
        <p className={classes.flex}> Search</p>
        <p className={classes.flex2}>Logout </p>
      
      

     
      <hr/>
       
      
       


    </div>
  );
}
