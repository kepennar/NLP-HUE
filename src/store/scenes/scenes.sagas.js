import { takeEvery, put, call, fork, select } from "redux-saga/effects";
import { delay } from "redux-saga";

import { getScenes, activateScene } from "../../services/HueService";
import { setScenes, GET_SCENES, ACTIVATE_SCENE } from "./scenes.actions";
import { bridgeIpSelector, usernameSelector } from "../user/user.selectors";
import { getBulbs } from "../bulbs/bulbs.actions";
import { bulbsSelector } from "../bulbs/bulbs.selectors";
import { sceneSelector } from "./scenes.selectors";

function* fetchScenes() {
  const bridgeIp = yield select(bridgeIpSelector);
  const username = yield select(usernameSelector);

  const scenes = yield call(getScenes, bridgeIp, username);
  yield put(setScenes(scenes));
}

function* fetchActivateScene({ value }) {
  const bridgeIp = yield select(bridgeIpSelector);
  const username = yield select(usernameSelector);
  const scene = yield select(sceneSelector, value);

  yield call(activateScene, bridgeIp, username, value);
  yield delay(2000)
}

function* watchGetScenes() {
  yield takeEvery(GET_SCENES, fetchScenes);
}
function* watchActivateScene() {
  yield takeEvery(ACTIVATE_SCENE, fetchActivateScene);
}

export default function* root() {
  yield fork(watchGetScenes);
  yield fork(watchActivateScene);
}
