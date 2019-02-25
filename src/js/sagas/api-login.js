import { call, put, takeEvery } from 'redux-saga/effects';
import { apiErrored, loggedIn } from '../actions/show-actions';
import { APP_LOADED } from '../constants/action-types';

const API_KEY = '9EF1D1E7D28FDA0B';

export default function* watcherSaga() {
    yield takeEvery(APP_LOADED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(login);
        yield put(loggedIn(payload));
    } catch (e) {
        yield put(apiErrored(e));
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
