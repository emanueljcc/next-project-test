import {
  GET_USERS,
  GET_USERS_PENDING,
  GET_USERS_FULFILLED,
  GET_USERS_REJECTED,
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_USERS_FULFILLED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case GET_USERS_REJECTED:
      return {
        ...state,
        data: [],
        loading: false,
        error: true,
      };
    case GET_USERS:
      return {
        ...state,
        data: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case UPDATE_USER:
      const users = state.data.map((res) => {
        if (res.id === action.payload.id) {
          res = action.payload;
        }
        return res;
      });

      return {
        ...state,
        data: users,
      };

    case REMOVE_USER:
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default userReducer;
