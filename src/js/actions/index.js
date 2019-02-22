import { APP_LOADED, SEARCH_SHOW } from "../constants/action-types";

export function searchShow(searchQuery, token) {
    return { type: SEARCH_SHOW, payload: { searchQuery, token } };
}

export function appLoaded() {
    return { type: APP_LOADED };
}
