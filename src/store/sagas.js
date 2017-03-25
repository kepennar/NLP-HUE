import { fork } from "redux-saga/effects";
import bulbsSagas from "./bulbs/bulbs.sagas";

export default function* rootSaga() {
  yield fork(bulbsSagas);
}
