import {
  take,
  takeEvery,
  takeLatest,
  throttle,
  put,
  call,
  fork,
  select
} from "redux-saga/effects";
import { delay } from 'redux-saga'
import {
  getLights,
  switchOnById,
  switchOffById,
  putBriValue
} from "../../services/HueService";
import {
  getBulbs,
  setBulbs,
  GET_BULBS,
  SWITCH_ON,
  SWITCH_OFF,
  CHANGE_BRI
} from "./bulbs.actions";
import { bridgeIpSelector, usernameSelector } from "../user/user.selectors";

function* fetchBulbs() {
  const bridgeIp = yield select(bridgeIpSelector);
  const username = yield select(usernameSelector);

  const bulbs = yield call(getLights, bridgeIp, username);
  yield put(setBulbs(bulbs));

  yield delay(1500)
  yield put(getBulbs())
}

function* switchOnBulb({ value }) {
  const bridgeIp = yield select(bridgeIpSelector);
  const username = yield select(usernameSelector);

  yield call(switchOnById, bridgeIp, username, value);
}

function* switchOffBulb({ value }) {
  const bridgeIp = yield select(bridgeIpSelector);
  const username = yield select(usernameSelector);

  yield call(switchOffById, bridgeIp, username, value);
}

function* changeBri({ value }) {
  const bridgeIp = yield select(bridgeIpSelector);
  const username = yield select(usernameSelector);

  yield call(
    putBriValue,
    bridgeIp,
    username,
    value.bulbId,
    parseInt(value.bri, 10)
  );
}

function* watchGetBulbs() {
  yield takeLatest(GET_BULBS, fetchBulbs);
}
function* watchSwitchOnBulb() {
  yield takeEvery(SWITCH_ON, switchOnBulb);
}
function* watchSwitchOffBulb() {
  yield takeEvery(SWITCH_OFF, switchOffBulb);
}
function* watchChangeBri() {
  yield throttle(500, CHANGE_BRI, changeBri);
}

export default function* root() {
  yield fork(watchGetBulbs);
  yield fork(watchSwitchOnBulb);
  yield fork(watchSwitchOffBulb);
  yield fork(watchChangeBri);
}
