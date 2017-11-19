import Immutable from 'immutable';

import * as constants from '../actions/constants';

const initialState = Immutable.fromJS([
    {id: '100', name: 'таск 1', desc: 'сделать все хоршо'},
    {id: '101', name: 'таск 2', desc: 'сделать все еще лучше'},
    {id: '102', name: 'таск 3', desc: 'сделать все ништяк'}
]);

export const todos = (state = initialState, action) => {

    switch (action.type) {
        case constants.DELETE_ITEM:
            return state.delete(action.payload);

    }

    return state;
};