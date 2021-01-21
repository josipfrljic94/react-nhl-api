import * as constants from  "../types";

export const changeTheme = () =>(dispatch) => {
    dispatch({ type: constants.CHANGE_THEME});
  };