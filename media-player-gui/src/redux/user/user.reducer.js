import {
  DELETE_ONE_TOP_SEARCH,
  DELETE_ONE_USER_SUCCESS,
  DELETE_USERS_SUCCESS,
  FETCH_ONE_USER,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_SUCCESS
} from "./user.actions";

export const INITIAL_STATE = {
  ids: [],
  map: {}
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case DELETE_ONE_TOP_SEARCH:
      console.log("Profile", state.map[payload.username]);
      console.log("payload", payload);
      state.map[payload.username].topSearches = payload.topSearches;
      return { ...state };
    case FETCH_ONE_USER:
      if (state.ids.indexOf(user => user.username === payload.username) === -1) {
        state.ids.push(payload.username);
      }
      state.map[payload.username] = payload;
      return { ...state };
    case UPDATE_USER_SUCCESS:
      if (state.ids.indexOf(user => user.username === payload.username) === -1) {
        state.ids.push(payload.username);
      }
      state[payload.username] = payload;
      return { ...state };
    case DELETE_USERS_SUCCESS:
      const ids = state.ids.filter(id => payload.findIndex(otherId => id === otherId) === -1);
      const map = state.ids.map(id => state.map[id]);
      return { ...state, ids, map };
    case DELETE_ONE_USER_SUCCESS:
      delete state.map[payload];
      state.ids = state.ids.filter(id => id !== payload);
      return { ...state };
    case FETCH_USERS_SUCCESS:
      return {
        ids: payload.rows.map(user => user.username),
        map: payload.rows.reduce((prev, curr) => {
          prev[curr.username] = curr;
          return prev;
        }, {})
      };
    default:
      return state;
  }
}

export default userReducer;
