import produce from "immer";
//import { HYDRATE } from "next-redux-wrapper";
import * as actionTypes from "@actionTypes";

const initialState = {
  airportSearchList: [],
};

export default produce((draft, action) => {
  switch (action.type) {
    case "HYDRATE": {
      //TODO: birden fazla reducer olma durumunda bunun yönetimi nasıl olması gerekiyor araştırılması lazım.
      //TODO: sunucu taraflı initial payload işlemi immer ile nasıl yapılır araştırılacak.
      draft = action.payload;
      break;
    }
    case actionTypes.UPDATE_AIRPORT_LIST: {
      draft.airportSearchList = action.payload;
      break;
    }
  }
}, initialState);
