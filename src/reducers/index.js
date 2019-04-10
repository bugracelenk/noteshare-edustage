import { combineReducers } from 'redux';
import homePageReducer from 'reducers/homePage';

export default combineReducers({
  homePage: homePageReducer
});