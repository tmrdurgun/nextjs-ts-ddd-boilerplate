import { all } from 'redux-saga/effects';

import {
    getUserWatcher
  } from './user';

  export default function* rootSaga() {
    yield all([
        getUserWatcher()
    ]);
}