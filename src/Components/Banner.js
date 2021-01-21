import React from 'react'
import {BannerStyle} from "../Themes/Theme";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
const Banner = ({bg,title,title2,children}) => {
    const classes = BannerStyle({bg});
   

    return (
       <Paper  className={classes.root} >
   
           <Typography variant="h3" component="h2" color="primary" className={classes.title} >{title}</Typography>
           <Typography variant="h5" component="h5"  color="primary" className={classes.title2} >{title2}</Typography>
           {children}
       </Paper>
    )
}

export default Banner
