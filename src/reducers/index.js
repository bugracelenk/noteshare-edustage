import { combineReducers } from "redux";
import homePageReducer from "reducers/homePage";
import authReducer from "reducers/auth";

export default combineReducers({
  homePage: homePageReducer,
  auth: authReducer
});
