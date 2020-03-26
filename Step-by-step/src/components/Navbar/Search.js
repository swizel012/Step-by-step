import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '4px 15px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    position: 'absolute',
    top:'3%',
    right:'30%',
    
  },
  ip: {
    
    flex: 1,
    boxShadow: '0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)',
    
  
    },
  iconButton: {
    padding: 10,
  },
  
}));

export default function Search() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.ip}
        placeholder="Search for a dish or chef"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}
