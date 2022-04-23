import * as actionTypes from "../actionTypes";

export const getUser = () => ({ type: actionTypes.GET_USER });

export const setUser = (payload: object) => ({
  type: actionTypes.SET_USER,
  payload: payload,
});
