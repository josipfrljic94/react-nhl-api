import { Typography } from '@material-ui/core'
import React from 'react'
import {Grid} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {UnderBannerStyle} from "../Themes/Theme";



const UnderBanner = ({name,nameCity,city}) => {


    const classes = UnderBannerStyle({});
    return (
       <Paper className={classes.root}>
           <Grid container direction="column" justify="center" align="center" align="center">
                    <Typography variant="h6" component="h5"   className={classes.title}>{name}</Typography>
                    <Typography variant="h6" component="h6"  className={classes.title}>{nameCity}/{city}</Typography>
           </Grid>
       </Paper>
    )
}

export default UnderBanner
