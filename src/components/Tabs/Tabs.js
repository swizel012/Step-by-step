import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyRecipes from '../../components/RecipeCard/MyRecipes';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)',
    
  },
  neo:{
    boxShadow: '0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)',
  },
  myStyles: {
    backgroundColor: '#F5F5F5',
    padding:'2%',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    gap: '1% 1%',
  },
  Addrecipecard: {
    justifyContent:'center',
    padding:'15%',
    width:'20%',
    height:'30%',
    boxShadow: '0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)',
  },
}));

export default function ProfileTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar  position="static" color="white">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          className={classes.neo}
        >
          <Tab label="My Recipes" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Add Recipe" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Followers" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Following " icon={<PersonPinIcon />} {...a11yProps(3)} />
          <Tab label="Saved " icon={<PersonPinIcon />} {...a11yProps(4)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.myStyles}>
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
      <Link to="/newrecipe"> 
      <div className={classes.Addrecipecard} > 
       
      <Tooltip title="Add" aria-label="add">
      <Fab color="primary" className={classes.fab}>
         <AddIcon />
       </Fab>
      </Tooltip>
      
      </div>
      </Link>
      </TabPanel>

      <TabPanel value={value} index={2}>
        Followers
      </TabPanel>
      <TabPanel value={value} index={3}>
        Following
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className={classes.myStyles}>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        </div>
      </TabPanel>

    </div>
  );
}
