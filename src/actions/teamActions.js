import * as constants from  "../types";



export const fetchTeams = () => async (dispatch) => {
    try {
      dispatch({ type: constants.FETCH_TEAMS_REQUEST});
      const res = await fetch("https://statsapi.web.nhl.com/api/v1/teams/");
      const data= await res.json();
      
      console.log(data)
      dispatch({ type: constants.FETCH_TEAMS_SUCCESS, payload: data.teams});
    } catch (error) {
        console.log(error);
      dispatch({ type: constants.FETCH_TEAMS_FAIL, payload: error.message });
    }
  };

  export const fetchTeamName = (id) => async (dispatch) => {
    try {
      dispatch({ type: constants.FETCH_TEAMNAME_REQUEST, payload: id });
      const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/`);
      const data= await res.json();
      let teamName= await data.teams.find(team=>team.id === id);
      console.log(teamName);

      dispatch({ type: constants.FETCH_TEAMNAME_SUCCESS, payload: teamName});
    } catch (error) {
        console.log(error);
      dispatch({ type: constants.FETCH_TEAMNAME_FAIL, payload: error.message });
    }
  };




  export const fetchTeam = (id) => async (dispatch) => {
    try {
      dispatch({ type: constants.FETCH_TEAM_REQUEST, payload: id });
      const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`);
      const data= await res.json();
      

      dispatch({ type: constants.FETCH_TEAM_SUCCESS, payload: data.stats});
    } catch (error) {
        console.log(error);
      dispatch({ type: constants.FETCH_TEAM_FAIL, payload: error.message });
    }
  };


