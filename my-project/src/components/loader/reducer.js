import * as constants from '../actions/constants';

const initialState = {
    visibleItems: []
};

export const loader = (state = initialState, action) => {

    switch (action.type) {
        case constants.LOADER_SHOW:{
            const copy = state.visibleItems.slice();
            copy.push(action.payload);
            return Object.assign({}, state, {
                visibleItems: copy
            });
        }
        case constants.LOADER_HIDE:{
            const copy = state.visibleItems
                .filter(val => val !== action.payload);

            return Object.assign({}, state, {
                visibleItems: copy
            });
        }
    }

    return state;
};