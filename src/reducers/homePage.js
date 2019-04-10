import { SET_HOME_PAGE_DATA } from "actions/types";

const initalState = {
  features: [],
  events: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_HOME_PAGE_DATA:
      return { ...state, features: action.payload.features, events: action.payload.events}
    default:
      return state;
  }
};
