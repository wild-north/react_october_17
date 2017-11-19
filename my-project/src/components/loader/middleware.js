import { LOADER_SHOW, LOADER_HIDE } from './constants';

export const loader = triplets => store => next => action => {
    if (typeof action === 'function') {
        return next(action);
    }

    const found = triplets
        .find(triplet =>
            triplet.some(actionName =>
                actionName === action.type));

    if (!found) {
        return next(action);
    }

    const [ REQUEST, SUCCESS, FAILURE ] = found;

    if (action.type === REQUEST) {
        store.dispatch({
            type: LOADER_SHOW,
            payload: REQUEST
        });
    }

    if (action.type === SUCCESS || action.type === FAILURE ) {
        store.dispatch({
            type: LOADER_HIDE,
            payload: REQUEST
        });
    }

};