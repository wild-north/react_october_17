import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const myStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware( ...middlewares )
));

sagaMiddleware.run(rootSaga);
