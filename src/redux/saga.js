import { takeEvery, put, delay } from 'redux-saga/effects';
import { SUBMIT_FORM, submitFormSuccess } from './actions';

function* handleFormSubmission() {
  yield delay(1000); // Simulate API delay
  yield put(submitFormSuccess());
}

export default function* rootSaga() {
  yield takeEvery(SUBMIT_FORM, handleFormSubmission);
}
