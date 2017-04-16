import { takeLatest, put, fork, select } from "redux-saga/effects";

import { SET_HEADER_OFFSET, setHeaderHeight } from "./ui.actions";

function* changeOffset({ value }) {
  const currHeight = yield select(state => state.ui.headerHeight);
  const height = 200 - value;

  if (
    (currHeight > 56 && height < currHeight) ||
    (currHeight < 200 && height > currHeight)
  )
    yield put(setHeaderHeight(height));
}

function* watchSetOffset() {
  yield takeLatest(SET_HEADER_OFFSET, changeOffset);
}

export default function* root() {
  yield fork(watchSetOffset);
}
