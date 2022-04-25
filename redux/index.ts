import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import rootReducer from "./reducers";
import { save } from "redux-localstorage-simple";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [ 
    sagaMiddleware,
    save({
      namespace: "state",
      debounce: 1000
    }),
  ],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(sagas);

export default store;
