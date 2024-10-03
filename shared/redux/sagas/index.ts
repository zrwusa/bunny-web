
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../reducers/example-reducer';


function* fetchDataSaga(): Generator<any, void, any> {
  try {
    const response: Response = yield call(fetch, '/bizz-lines/inventory-supply-chain/scm/api/products');
    const body: any = yield response.json();
    yield put(fetchDataSuccess(body.data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchDataSaga() {
  yield takeLatest('example/fetchData', fetchDataSaga);
}

export default function* rootSaga() {
  yield all([watchFetchDataSaga()]);
}
