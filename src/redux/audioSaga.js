import { takeEvery, put } from 'redux-saga/effects';
import { playAudio, stopAudio } from './action';

function* playAudioSaga() {
  // Add any async tasks if needed
  yield put(playAudio());
}

function* stopAudioSaga() {
  yield put(stopAudio());
}

function* watchAudioControl() {
  yield takeEvery('START_PLAYBACK', playAudioSaga);
  yield takeEvery('STOP_PLAYBACK', stopAudioSaga);
}

export default watchAudioControl;
