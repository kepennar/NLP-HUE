import { takeEvery, put, call, fork, select } from "redux-saga/effects";

import { START_LISTENING, STOP_LISTENING, setResponse } from "./speech.actions";
import { switchAllOn, switchAllOff } from "../bulbs/bulbs.actions";
import { start, stop } from "../../services/SpeechService";

function* startListening() {
  yield call(start);
}

function* stopListening() {
  const resp = yield call(stop);
  console.log(resp);
  const { speech, action } = resp.result;

  if (action === "lights.on") yield put(switchAllOn());
  if (action === "lights.off") yield put(switchAllOff());

  yield put(setResponse(speech));
}

function* watchStartListening() {
  yield takeEvery(START_LISTENING, startListening);
}
function* watchStopListening() {
  yield takeEvery(STOP_LISTENING, stopListening);
}

export default function* root() {
  yield fork(watchStartListening);
  yield fork(watchStopListening);
}
