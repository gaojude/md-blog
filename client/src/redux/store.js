import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root-reduer";
import {logger} from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store;
