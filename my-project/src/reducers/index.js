import { combineReducers } from 'redux';
import { todos } from './todos';
import { categories } from './categories';

export const rootReducer = combineReducers({
    todos,
    categories
});