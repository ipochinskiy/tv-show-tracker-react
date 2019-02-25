import { API_ERRORED, APP_LOADED, LOGGED_IN, SEARCH_SHOW, SHOW_LIST_FOUND } from "../constants/action-types";

export function searchShow(searchQuery, token) {
    return { type: SEARCH_SHOW, payload: { searchQuery, token } };
}

export function appLoaded() {
    return { type: APP_LOADED };
}

export function apiErrored(payload) {
    return { type: API_ERRORED, payload };
}

export function showListFound(payload) {
    return { type: SHOW_LIST_FOUND, payload };
}

export function loggedIn(payload) {
    return { type: LOGGED_IN, payload };
}
