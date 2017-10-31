import { createAction } from '../helpers';
import * as constants from './constants';

export const deleteItem = createAction(constants.DELETE_ITEM);
// export const deleteItem = function(id) {
//     return {
//         type: constants.DELETE_ITEM,
//         payload: id
//     }
// };