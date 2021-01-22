import React,{useEffect,useCallback} from 'react';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { fetchTeams } from "../actions/teamActions";
import {HomeStyles} from "../Themes/Theme";
import Banner from "../Components/Banner";
import Skeleton from '@material-ui/lab/Skeleton';

const Home = ({teams,fetchTeams,dark}) => {

  const classes = HomeStyles();
  const triggerFetchTeams = useCallback(() => {
    fetchTeams()
  }, [fetchTeams]); 
  useEffect(() => {
    
    triggerFetchTeams()
  
  }, [triggerFetchTeams]); 

  const skeletonArray=[{broj:1},{broj:2},{broj:3},{broj:4},{broj:5},{broj:6}]

      if(!teams){
        return (
        <Paper style={{marginTop:"40px"}}>
              <Skeleton variant="rect" width="100%" height="60vh" />
          <Grid container justify="center">
          
               {skeletonArray.map(s=>{
                 return(
                  <Grid key={s.broj} item xs={12} md={10}  lg={8}  className={dark ? classes.card : classes.cardlight}>
                  <Card className={classes.card}>
                  <Skeleton />
              <Skeleton animation={false} />
              <Skeleton animation="wave" />
                  </Card>
                    </Grid>
                 )
               })}
                            
            
          
            </Grid>
        </Paper>);
      
      } else {
        return (  
         <Paper className={classes.root} >
           <Banner bg={"https://a.espncdn.com/photo/2019/1023/nhl_pwr_rankings_16x9.jpg"}/>
           <Grid container  justify="center" className={classes.container}>
                {
            teams.map(team=>{
              return(
                
                  <Grid key={team.id} item xs={12} md={10} lg={8}  className={dark ? classes.card : classes.cardlight}>
                     <Card component={Link}  elevation={3}  to={`/team/${team.id}`} className={classes.card} >
                     <Typography variant="h4" component="h5" className={classes.title2} >{team.name}</Typography> 
                     <Typography variant="h6" component="h6" className={classes.title2} >{team.venue.name}/{team.venue.city}</Typography> 
                      </Card>
                  </Grid>
               
              )
            })
          }
          </Grid>
         </Paper>
         );
      }
}
const mapStateToProps=(state)=>({
 teams: state.teams.teams,
 dark: state.ui.dark ,
 
})
export default connect(mapStateToProps,{fetchTeams})(Home);

