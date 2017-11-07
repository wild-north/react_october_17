import { createAction } from '../helpers';
import * as constants from './constants';

export const deleteItem = (payload) => {
    // return {
    //     type: constants.DELETE_ITEM,
    //     payload
    // };

    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: constants.DELETE_ITEM,
                payload
            });
        }, 2000)
    }
};