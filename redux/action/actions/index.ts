import * as actionTypes from "@actionTypes";
export const loadAirports = (payload: string) => ({
  type: actionTypes.LOAD_AIRPORTS,
  payload: payload,
});
