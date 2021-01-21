import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { fetchTeam } from "../actions/teamActions";
import { fetchTeams } from "../actions/teamActions";
import {useParams} from "react-router-dom";
import StatThree from "../Components/StatThree";
import Banner from "../Components/Banner";
import UnderBanner from "../Components/UnderBanner";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card} from '@material-ui/core';
import {gridStyle} from "../Themes/Theme";
import Skeleton from '@material-ui/lab/Skeleton';
import HomeButton from '../Components/Button';

const TeamStat = ({team,fetchTeam,fetchTeams,loading,stat,reqstat,teams}) => {

    const classes = gridStyle();

  
    let slug=Number( useParams().hash); 
   
    
    useEffect(() => {
      fetchTeam(slug);
    }, []); 

    useEffect(() => {
        fetchTeams();
      }, []); 
    
const skeletonArray=[{broj:1},{broj:2},{broj:3},{broj:4},{broj:5},{broj:6}];

      if(!team  || !teams || loading){
          return(
            <Paper style={{marginTop:"40px"}}>  
               <Skeleton  style={{height:"60vh"}}/>
               <Grid container justify="center" spacing={2}>
          
          {skeletonArray.map(s=>{
            return(
             <Grid key={s.broj} item xs={12} md={6}  lg={4} >
             <Card className={classes.cardStyle}>
             <Skeleton style={{width:"100%"}} animation="wave"/>
         
             </Card>
               </Grid>
            )
          })}
                       
       
     
       </Grid>
          </Paper>
          )
      }
    else{
    return (
      
        
        
    <Paper>
      <Banner bg={"https://media.nhl.com/site/asset/public/images/2020/03/NHLShieldBlack-06124818.jpg"} title={"Stats"} title2={"Your choice"} children={<HomeButton text={"Back"}/>}/>
      <UnderBanner name={teams[slug].name} nameCity={teams[slug].venue.name} city={teams[slug].venue.city} />
      <Grid container spacing={3} justify="space-around" className={classes.root}>
        <StatThree data={{title:"season stat",firstt:"wins",firstv:stat.wins,secondt:"loses",secondv:stat.losses,thirdt:"wins(%)",thirdv:stat.ptPctg}}/>
        <StatThree data={{title:"season ranking",firstt:"wins",firstv:reqstat.wins,secondt:"loses",secondv:reqstat.losses,thirdt:"wins(%)",thirdv:reqstat.ptPctg}}/>
        <StatThree data={{title:"Season realization",firstt:"GPG",firstv:stat.goalsPerGame,secondt:"PPG",secondv:stat.powerPlayGoals,thirdt:"Shoots PG",thirdv:stat.shotsPerGame}}/>
        <StatThree data={{title:"Realization ranking",firstt:"GPG",firstv:reqstat.goalsPerGame,secondt:"loses",secondv:reqstat.powerPlayGoals,thirdt:"Shoots PG",thirdv:reqstat.shotsPerGame}}/>
        <StatThree data={{title:"Defence stat",firstt:"Conced/PG",firstv:stat.goalsAgainstPerGame,secondt:"AGARatio",secondv:stat.evGGARatio,thirdt:"Allowed",thirdv:stat.shotsAllowed}}/>
        <StatThree data={{title:"Defence ranking",firstt:"Conced/PG",firstv:reqstat.goalsAgainstPerGame,secondt:"AGARatio",secondv:reqstat.evGGARatio,thirdt:"Allowed",thirdv:reqstat.shotsAllowed}}/>
      </Grid>

      </Paper>
    
          
        
    )
}

}
const mapStateToProps=(state)=>({
  teams: state.teams.teams,
    team: state.team.team,
    stat: state.team.stat,
    reqstat: state.team.regularstat,
    loading:state.team.loading,
    
   
   })
   export default connect(mapStateToProps,{fetchTeam,fetchTeams})(TeamStat);


   



 

  