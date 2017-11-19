import { LOADER_SHOW, LOADER_HIDE } from './constants';

const initialState = {
    visibleItems: []
};

export const loader = (state = initialState, action) => {

    switch (action.type) {
        case LOADER_SHOW:{
            const copy = state.visibleItems.slice();
            copy.push(action.payload);
            return Object.assign({}, state, {
                visibleItems: copy
            });
        }
        case LOADER_HIDE:{
            const copy = state.visibleItems
                .filter(val => val !== action.payload);

            return Object.assign({}, state, {
                visibleItems: copy
            });
        }
    }

    return state;
};