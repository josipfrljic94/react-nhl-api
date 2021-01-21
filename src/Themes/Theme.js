
import {createMuiTheme,makeStyles } from "@material-ui/core/styles";

 export const Theme = createMuiTheme({
    palette:{
        type:"dark",
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#fe5f55',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          light: '#0066ff',
          main: '#a8e8f9',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#00537a',
        },
    }
})


export const Light = createMuiTheme({
  palette:{
      primary: {
      
        main: '#a8e8f9',
       
      },
      secondary: {
       
     
        main: '#fe5f55',
        // dark: will be calculated from palette.secondary.main,
      
      },
  }
})







export const useStyles = makeStyles({
   
    carpet:{
      minHeight:"100vh",
      margin:0,
     marginTop:"65px",
   width:"100%",
   padding:0,
   overflow:"auto",

    },
    singleCard:{
      height:"150px",
     width:"250px",
      textAlign:"center",
      padding:"2px",
      background:"red",
     boxSizing:"border-box",

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    title2: {
      fontSize: "12px",
    },
    value:{
      fontSize:11,
    },
    pos: {
      marginBottom: 12,
    },
  });

  export const gridStyle = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(0),
    flexGrow: 0,
    maxWidth: `100%`,
    flexBasis: `100%`
      
    },
    cardStyle:{
      minHeight:150,
      background: '#353535',
    },
    title:{
      textAlign:"center",
      textTransform:"uppercase",
    },
    title2:{
      textAlign:"center",
      textTransform:"uppercase",
      fontSize:"1rem"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  export const BannerStyle=makeStyles({
    root:{
      height:"60vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      background:props=>`url(${props.bg})`,
      backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat:" no-repeat",
  backgroundSize: "cover",

    },
    title:{
      textAlign:"center",
      textTransform:"uppercase",
      fontWeight:"600",
      
    },
    title2:{
      textAlign:"center",
      textTransform:"uppercase",
      fontWeight:"400"
    },
    themeBtn:{
      cursor:"pointer",
    }
  });

  export const UnderBannerStyle=makeStyles(()=>({
    root:{
      height:150
    },
    title:{
      textAlign:"center",
      textTransform:"uppercase",
     marginTop:25,
      
    },
    title2:{
      textAlign:"center",
      textTransform:"uppercase",
    }

    }),

  )

  export const ButtonStyle=makeStyles({

    root:{
      width:100,
      height:30,
      color:props=> props.dark ? "#fe5f55" : "#a8e8f9",
      background:props=> props.dark ? "#a8e8f9" : "#fe5f55",
      padding:5,
      border:0,
      borderRadius:3,
      cursor:"pointer",
      "&:hover":{
        background:props=> props.dark ? "#a1c1e9" : "#ed4f43",
      }

    }
  })

  

  export const NavStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar:{
        position:"fixed",
        top:"0vh",
        left:0,
        height:50,
    }
  }));


  export const HomeStyles = makeStyles(() => ({
    root: {
      marginTop:40,
        
    },
    container:{
      paddingTop:25,
      padding:"0 10%",
    },
    card:{
      borderTop:"2px solid #a8e8f9",
      borderBottom:"2px solid #a8e8f9",
      minHeight:100,
      marginTop:20,
      padding:"10px 0",
      textDecoration:"none",
      textAlign:"center",
    '&:hover':{
      background:"#fe5f55",
    }
    },
    cardlight:{
      borderTop:"2px solid #fe5f55",
      borderBottom:"2px solid #fe5f55",
      minHeight:100,
      marginTop:20,
      padding:"10px 0",
      textDecoration:"none",
      textAlign:"center",
    '&:hover':{
      background:"#a8e8f9",
    }
    },


  }));


  