import { SET_HOME_PAGE_DATA } from "actions/types";
import axios from "axios";

export function getHomePageData() {
  return dispatch => {
    return axios
      .get("https://noteshare-backend.herokuapp.com/api/home-page")
      .then(res => {
        return dispatch({
          type: SET_HOME_PAGE_DATA,
          payload: res.data
        });
      });
  };
}
