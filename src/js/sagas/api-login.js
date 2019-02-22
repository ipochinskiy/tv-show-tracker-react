import { call, put, takeEvery } from 'redux-saga/effects';
import { API_ERRORED, APP_LOADED, LOGGED_IN } from '../constants/action-types';

const API_KEY = '9EF1D1E7D28FDA0B';

export default function* watcherSaga() {
    yield takeEvery(APP_LOADED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(login);
        yield put({ type: LOGGED_IN, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function login() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ apiKey: API_KEY }),
    };
    return fetch(`/login`, options).then(response =>
        response.json()
    ).then(response => {
        const token = response && response.token;
        if (!token) {
            return Promise.reject();
        }
        return Promise.resolve(token);
    });
}
