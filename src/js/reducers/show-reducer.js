import { LOGGED_IN, SEARCH_SHOW, SHOW_LIST_FOUND } from "../constants/action-types";

const initialState = {
    token: null,
    showList: [],
    isShowListLoading: false,
};

function showReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SHOW:
            return {
                ...state,
                showList: [],
                isShowListLoading: true,
            }
        case SHOW_LIST_FOUND:
            return {
                ...state,
                showList: [
                    ...action.payload,
                ],
                isShowListLoading: false,
            };
        case LOGGED_IN:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
}

export default showReducer;
