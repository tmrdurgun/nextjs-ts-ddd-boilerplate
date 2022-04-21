import { all, call, SagaReturnType, takeLatest } from "redux-saga/effects";
import * as actionTypes from "@actionTypes";
import * as actions from "@actions";
import { FlightsService } from "@api";

function* searchAirport(action: { payload: string }) {
  try {
    type SearchAirport = SagaReturnType<typeof FlightsService.searchAirport>;
    const response: SearchAirport = yield call(
      FlightsService.searchAirport,
      action.payload
    );
    console.log("response : ", response);
  } catch (error) {
    console.warn("searchAirport-error : ", error);
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_AIRPORTS, searchAirport)]);
}

export default rootSaga;
