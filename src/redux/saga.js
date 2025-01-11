import { takeEvery, put, delay } from 'redux-saga/effects';
import { submitForm, submitFormSuccess } from './reducers';

function* handleFormSubmission(action) {
  // Simulate an API call delay
  yield delay(1000);
  yield put(submitFormSuccess());
}

export default function* rootSaga() {
  yield takeEvery(submitForm.type, handleFormSubmission);
}
