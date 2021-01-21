import React from 'react'
import Paper from '@material-ui/core/Paper';
import {Route,Switch} from "react-router-dom";
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/Home';
import TeamStat from './pages/TeamStat';
import {ThemeProvider} from "@material-ui/core/styles";
import {Theme} from "./Themes/Theme";
import {Light} from "./Themes/Theme";
import { connect } from "react-redux";



const App = ({dark}) => {
  
  return (
    <ThemeProvider theme={dark ? Theme : Light}>
    <Paper>
      <Navbar/>
       <ScrollToTop/>
      <Switch>
      <Route  exact path="/">
        <Home/>
      </Route>
    <Route exact path="/team/:hash">
    <TeamStat/>
    </Route>
    </Switch>
    </Paper>
    </ThemeProvider>
  )
}

const mapStateToProps=(state)=>({
   dark: state.ui.dark 
   
})
export default connect(mapStateToProps,{})(App);
