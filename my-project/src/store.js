import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { LIST_TRIPLET } from './actions/constants';
import thunk from 'redux-thunk';
import { loader } from './components/loader/middleware';

const middlewares = [
    loader([LIST_TRIPLET]),
    thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const myStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));

