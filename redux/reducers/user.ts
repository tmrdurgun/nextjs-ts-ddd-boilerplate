import produce from "immer";
//import { HYDRATE } from "next-redux-wrapper";
import * as actionTypes from "redux/actionTypes";

const initialState = {
  user: null
};

export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: {
      draft.user = action.payload;
      break;
    }
  }
}, initialState);
