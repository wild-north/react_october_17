import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import {
    LOADER_HIDE,
    LOADER_SHOW
} from './actions/constants';

const loader = store => next => action => {
    if (typeof action === 'function') {
        return next(action);
    }

    const arr = action.type.match(/(.*)(_REQUEST$|_SUCCESS$|_FAILURE$)/);
    let id;

    if (arr && arr.length >= 1){
        id = arr[1];
    }

    if (/.*_REQUEST$/.test(action.type)) {
        store.dispatch({
            type: LOADER_SHOW,
            payload: id
        });
    }
    if (/.*_SUCCESS$/.test(action.type)
        || /.*_FAILURE$/.test(action.type)
    ) {
        store.dispatch({
            type: LOADER_HIDE,
            payload: id
        });
    }

    return next(action);
};

const middlewares = [
    loader,
    thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const myStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));

