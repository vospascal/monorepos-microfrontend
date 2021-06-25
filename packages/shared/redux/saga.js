// import createSagaMiddleware from "redux-saga";
// export const sagaMiddleware = createSagaMiddleware();

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// Create the saga middleware
import { data, error, loading } from "./global.reducer";

function* fetchData(action) {
  try {
    yield put(error({ error: false }));
    yield put(loading({ loading: true }));
    const response = yield call(fetch, `${action.url}${action.query}`);
    const jsonData = yield response.json();
    yield call(console.log, jsonData);
    yield put(data({ data: jsonData }));
    yield put(loading({ loading: false }));
  } catch (e) {
    yield put(loading({ loading: false }));
    yield put(error({ error: true }));
  }
}

export function* mySaga() {
  yield takeEvery("GET_API_DATA", fetchData);
}
