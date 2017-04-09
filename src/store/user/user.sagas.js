import { takeEvery, put, call, fork, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import { fetchBridgeIp, connect } from "../../services/HueService";
import {
  setBridgeIp,
  GET_BRIDGE_IP,
  CONNECT_BRIDGE,
  setUsername
} from "./user.actions";
import { bridgeIpSelector } from "./user.selectors";

export function* fetchIp() {
  const bridgeIp = yield call(fetchBridgeIp);
  yield put(setBridgeIp(bridgeIp));
}
export function* watchGetBridgeIp() {
  yield takeEvery(GET_BRIDGE_IP, fetchIp);
}

export function* connectBridge() {
  const bridgeIp = yield select(bridgeIpSelector);
  try {
    const username = yield call(connect, bridgeIp);
    yield put(setUsername(username));
  } catch (error) {
    yield call(delay, 2000);
    yield call(connectBridge);
  }
}
export function* watchConnect() {
  yield takeEvery(CONNECT_BRIDGE, connectBridge);
}

export default function* root() {
  yield fork(watchGetBridgeIp);
  yield fork(watchConnect);
}
