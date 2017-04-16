import { fork } from "redux-saga/effects";
import bulbsSagas from "./bulbs/bulbs.sagas";
import userSagas from "./user/user.sagas";
import scenesSagas from "./scenes/scenes.sagas";
import speechSagas from "./speech/speech.sagas";
import uiSagas from "./ui/ui.sagas";

export default function* rootSaga() {
  yield fork(bulbsSagas);
  yield fork(userSagas);
  yield fork(scenesSagas);
  yield fork(speechSagas);
  yield fork(uiSagas);
}
