import { takeEvery, put, call, fork, select } from "redux-saga/effects";

import { START_LISTENING, STOP_LISTENING } from "./speech.actions";
import { start, stop } from "../../services/SpeechService";

function* startListening() {
  const scenes = yield call(start);
}

function* stopListening() {
  const scenes = yield call(stop);
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
