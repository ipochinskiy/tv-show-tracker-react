import { LOGGED_IN, SHOW_LIST_FOUND } from "../constants/action-types";

const initialState = {
    token: null,
    showList: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LIST_FOUND:
            return {
                ...state,
                showList: [
                    ...state.showList,
                    ...action.payload,
                ],
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

export default rootReducer;
