import { 
  call, 
  SagaReturnType, 
  take,
  put
} from "redux-saga/effects";

import * as actionTypes from "../actionTypes";
import * as userActions from "../actions/user";
import { UserService } from "@api";

const dummyUser = {
  name: "Tamer",
  surname: "Durgun"
}

function* getUser(action: { payload: object }) {
  try {
    /* type GetUser = SagaReturnType<typeof UserService.getUser>;
    const response: GetUser = yield call(
      UserService.getUser,
      action.payload
    );
    console.log("response : ", response); */

    yield put(userActions.setUser(dummyUser));
  } catch (error) {
    console.warn("user-error : ", error);
  }
}

export function* getUserWatcher() {
  while (true) {
    const action = yield take(actionTypes.GET_USER);
    yield call(getUser, action.payload);
  }
}
