import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "../middlewares";
import rootReducer from "../reducers/show-reducer";
import loginSaga from "../sagas/api-login";
import getShowListSaga from "../sagas/search-show";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(logger, initialiseSagaMiddleware),
);

initialiseSagaMiddleware.run(loginSaga);
initialiseSagaMiddleware.run(getShowListSaga);

export default store;
