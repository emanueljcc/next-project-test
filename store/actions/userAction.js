import { GET_USERS, SET_USER, UPDATE_USER, REMOVE_USER } from "../types";
import { get, create, update, remove } from "../../pages/api/user";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await get();

    dispatch({
      type: GET_USERS,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const setUser = (data) => async (dispatch) => {
  try {
    const res = await create(data);

    dispatch({
      type: SET_USER,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUser = (data) => async (dispatch) => {
  try {
    const res = await update(data);

    dispatch({
      type: UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeUser = (data) => async (dispatch) => {
  try {
    const res = await remove(data);

    dispatch({
      type: REMOVE_USER,
      payload: data,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
