
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../reducers/example-reducer';


function* fetchDataSaga(): Generator<any, void, any> {
  try {
    const response: Response = yield call(fetch, 'http://localhost:8080/data');
    const data: any = yield response.json();
    yield put(fetchDataSuccess(data)); // 派发成功的 action
  } catch (error: any) {
    yield put(fetchDataFailure(error.message)); // 派发失败的 action
  }
}

function* watchFetchDataSaga() {
  yield takeLatest('example/fetchData', fetchDataSaga);
}

export default function* rootSaga() {
  yield all([watchFetchDataSaga()]);
}
