// rootSaga.js
import { all } from "redux-saga/effects";
import productSaga from "./songSaga";
import watchAudioControl from "./audioSaga";

export default function* rootSaga() {
  yield all([
    productSaga(),
    watchAudioControl(),
  ]);
}
