import React from 'react'
import {gridStyle} from "../Themes/Theme";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const StatThree = ({data}) => {
    const classes = gridStyle();
    return (
       
              <Grid item xs={12} sm={6} md={5} lg={4}>
        <Card className={classes.cardStyle}>
        <Typography variant="h4" component="h4" className={classes.title} color="primary">{data.title}</Typography>
        <Grid container justify="space-around">
        <Paper color="primary" className={classes.paper}>
       <Typography variant="h6" component="h6" className={classes.title2} >{data.firstt}</Typography>
         {data.firstv}                
         </Paper>

         <Paper color="primary" className={classes.paper}>
       <Typography variant="h6" component="h6"  className={classes.title2}>{data.secondt}</Typography>
         {data.secondv}                
         </Paper>

         <Paper color="primary" className={classes.paper}>
       <Typography variant="h6" component="h6"  className={classes.title2}>{data.thirdt}</Typography>
         {data.thirdv}                
         </Paper>

         </Grid>
         </Card>

        </Grid>
       
    )
}

export default StatThree
