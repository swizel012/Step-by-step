import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';




const useStyles = makeStyles(theme => ({
    main:{
        position:'absolute',
         top:'0',
        display:'flex',
        backgroundColor:'white',
        flexDirection:'column',
        margin:'20',
    },
    root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '30ch',
      align:'center',
      
    },
    
  },
}));

export default function EditProfile() {
  const classes = useStyles();
 
  const [values, setValues] = React.useState({
 
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.main}>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
<TextField required id="standard-required" label="Email" />

  <FormControl >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input className={classes.password}
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
         <TextField
          id="standard-multiline-static"
          label="Bio"
          multiline
          rows="4"
         
        />
        <TextField id="standard-required" label="Website" />
        <TextField id="standard-required" label="Location"  />
      </div>
     
    </form>
  );
}
