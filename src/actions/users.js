import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS_INITIATED, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from 'UTILS/actionConstants';

export function fetchUsersInitiate() {
  return {
    type: FETCH_USERS_INITIATED,
  }
}

function fetchUsersSuccess(data) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  }
}

function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  }
}

function* fetchUsers() {
  try {
    const response = yield call(() => fetch(`https://jsonplaceholder.typicode.com/users`));
    const data = yield call(() => response.json.bind(response)());
    yield put(fetchUsersSuccess(data))
  } catch (error) {
    yield put(fetchUsersFail(error))
  }
}

export function* sagas() {
  yield takeEvery(FETCH_USERS_INITIATED, fetchUsers)
}
