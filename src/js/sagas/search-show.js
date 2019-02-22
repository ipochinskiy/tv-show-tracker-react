import { call, put, takeEvery } from 'redux-saga/effects';
import { API_ERRORED, SEARCH_SHOW, SHOW_LIST_FOUND } from '../constants/action-types';

export default function* watcherSaga() {
    yield takeEvery(SEARCH_SHOW, workerSaga);
}

function* workerSaga(action) {
    try {
        const response = yield call(searchShow, action.payload);
        yield put({ type: SHOW_LIST_FOUND, payload: response.data });
        return;
    } catch (e) {
        console.warn(e);
        yield put({ type: API_ERRORED, payload: e });
    }
}

function searchShow({ searchQuery, token }) {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };
    return fetch(`/search/series?name=${searchQuery.replace(' ', '+')}`, options).then(response =>
        response.json()
    );
}
