import * as constants from  "../types";


export const toggleTheme=(state={dark:true}, action)=> {
    const{type}=action;
    switch (type) {
      case constants.CHANGE_THEME:
       return { ...state,dark:!state.dark}
      default:
        return state;
    }
  }