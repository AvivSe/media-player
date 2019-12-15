import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_ONE_TOP_SEARCH,
  DELETE_ONE_USER_SUCCESS,
  DELETE_USERS_SUCCESS,
  FETCH_ONE_USER,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_SUCCESS
} from "./user.actions";

export const INITIAL_STATE = {
  ids: [],
  map: {},
  pending: false,
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  let ids = [...state.ids], map = { ...state.map};

  switch (type) {
    case DELETE_ONE_TOP_SEARCH:
      map[payload.username].topSearches = payload.topSearches;
      return {...state, map, ids };
    case FETCH_ONE_USER:
      if (ids.indexOf(username => username === payload.username) === -1) {
        ids.push(payload.username);
      }
      map[payload.username] = payload;
      return { ...state, ids, map };
    case UPDATE_USER_SUCCESS:
      if (ids.indexOf(user => user.username === payload.username) === -1) {
        ids.push(payload.username);
      }
      map[payload.username] = payload;
      return { ids, map };
    case CREATE_USER_SUCCESS:
      ids.push(payload.username);
      map[payload.username] = payload;
      return { ...state, ids, map, pending: false};
    case CREATE_USER_REQUEST:
      return { ...state, ids, map, pending: true};
    case CREATE_USER_ERROR:
      return { ...state, pending: false};
    case DELETE_USERS_SUCCESS:
      ids = ids.filter(id => payload.findIndex(otherId => id === otherId) === -1);
      map = ids.reduce((prev, current) => {
        prev[current] = map[current];
        return prev;
      }, {});
      return { ...state, ids, map };
    case DELETE_ONE_USER_SUCCESS:
      delete map[payload];
      ids = ids.filter(id => id !== payload);
      return { ...state, ids, map };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
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
