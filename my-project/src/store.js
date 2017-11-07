import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

// const logger = store => next=> action => {
//     console.log('dispatching', action);
//     const result = next(action);
//     console.log('next state', store.getState());
//     return result;
// };
// const omitAction = actionsArray => store => next => action => {
//     if (!actionsArray.some(val => val === action.type)) {
//         return next(action);
//     }
//     console.log('Sorry, this action is deprecated');
// };
// const ping = store => next => action => {
//     console.log('ping');
//     return next(action);
// };
// const pong = store => next => action => {
//     console.log('pong');
//     return next(action);
// };

const middlewares = [
    // ping,
    // pong,
    // logger,
    // omitAction(["DELETE_ITEM"])
    thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const myStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));

