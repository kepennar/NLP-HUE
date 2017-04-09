import { fork } from "redux-saga/effects";
import bulbsSagas from "./bulbs/bulbs.sagas";
import userSagas from "./user/user.sagas";

export default function* rootSaga() {
  yield fork(bulbsSagas);
  yield fork(userSagas);
}
