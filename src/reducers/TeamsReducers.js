import * as constants from  "../types";



export const TeamsReducer=(state={}, action)=> {
  const{type,payload}=action;
  switch (type) {
    case constants.FETCH_TEAMS_REQUEST:
      return {loading: true} ;
    case constants.FETCH_TEAMS_SUCCESS:
      return {...state,  teams: payload,loading: false};
    case constants.FETCH_TEAMS_FAIL:
      return { teams: payload,loading: false };
    default:
      return state;
  }
}

  export const TeamReducer=(state={}, action)=> {
    const{type,payload}=action;
    switch (type) {
      case constants.FETCH_TEAM_REQUEST:
        return {loading: true} ;
      case constants.FETCH_TEAM_SUCCESS:
        return {...state,  team: payload[0].type,stat:payload[0].splits[0].stat,regularstat:payload[1].splits[0].stat,loading: false,};
      case constants.FETCH_TEAM_FAIL:
        return { loading: false, team: payload };
      default:
        return state;
    }
  }