import { createAction } from '../helpers';
import * as constants from './constants';

export const deleteItem = createAction(constants.ITEM_DELETE);

export const deleteItemAsync = createAction(constants.ITEM_DELETE_ASYNC);
