import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { TeamsReducer } from "./reducers/TeamsReducers";
import { TeamNameReducer } from "./reducers/TeamsReducers";
import { TeamReducer } from "./reducers/TeamsReducers";
import { toggleTheme } from "./reducers/UIReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    teams: TeamsReducer,
    team: TeamReducer,
    teamName:TeamNameReducer,
    ui:toggleTheme
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;