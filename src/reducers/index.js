import { combineReducers } from "redux";
import homePageReducer from "reducers/homePage";
import authReducer from "reducers/auth";
import flashMessages from "reducers/flashMessage";

export default combineReducers({
  homePage: homePageReducer,
  auth: authReducer,
  flashMessage: flashMessages
});
