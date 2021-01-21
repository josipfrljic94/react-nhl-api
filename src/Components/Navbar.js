import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import {NavStyles} from "../Themes/Theme";
import { connect } from "react-redux";
import {changeTheme} from "../actions/UIActions";


 function Navbar({changeTheme,dark}) {
  const classes = NavStyles();


  return (
    <Paper className={classes.root}>
      <AppBar  className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NHL Teams
          </Typography>
            <div style={{cursor:"pointer"}} onClick={changeTheme}>
                {dark ? <BrightnessHighIcon className={classes.themeBtn}/> : <Brightness5Icon className={classes.themeBtn}/> }
            </div>
           
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
const mapStateToProps=(state)=>({
    dark: state.ui.dark , 
   
   })
   export default connect(mapStateToProps,{changeTheme})(Navbar);