import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";
import rootReducer from "./reducers";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  /*
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(saga),
  devTools: process.env.NODE_ENV !== "production",
  */
});

//sagaMiddleware.run(saga);

export default store;
