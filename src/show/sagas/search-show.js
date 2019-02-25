import { call, put, takeEvery } from 'redux-saga/effects';
import { apiErrored, showListFound } from '../actions/show-actions';
import { SEARCH_SHOW } from '../constants/action-types';

export default function* watcherSaga() {
    yield takeEvery(SEARCH_SHOW, workerSaga);
}

function* workerSaga(action) {
    try {
        const response = yield call(searchShow, action.payload);
        yield put(showListFound(response.data));
        return;
    } catch (e) {
        console.warn(e);
        yield put(apiErrored(e));
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
