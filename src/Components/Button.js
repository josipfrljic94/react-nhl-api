import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {ButtonStyle} from "../Themes/Theme";

  const  HomeButton=({text,dark})=>{

    const classes = ButtonStyle({dark});

    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }
  
    return (
      <button type="button" className={classes.root} onClick={handleClick}>
            {text}
      </button>
    );
  }

  const mapStateToProps=(state)=>({
    dark: state.ui.dark 
    
 })
 export default connect(mapStateToProps,{})(HomeButton);