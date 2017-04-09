import { fork } from "redux-saga/effects";
import bulbsSagas from "./bulbs/bulbs.sagas";
import userSagas from "./user/user.sagas";
import scenesSagas from "./scenes/scenes.sagas";

export default function* rootSaga() {
  yield fork(bulbsSagas);
  yield fork(userSagas);
  yield fork(scenesSagas);
}
