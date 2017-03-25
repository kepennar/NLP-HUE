import { takeEvery, put, call, fork } from "redux-saga/effects";

import { getLights } from "../../services/HueService";
import { setBulbs, GET_BULBS } from "./bulbs.actions";

export function* fetchBulbs() {
  const bulbs = yield call(getLights);
  yield put(setBulbs(bulbs));
}
export function* watchGetBulbs() {
  yield takeEvery(GET_BULBS, fetchBulbs);
}

export default function* root() {
  yield fork(watchGetBulbs);
}
