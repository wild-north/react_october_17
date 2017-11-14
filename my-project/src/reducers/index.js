import { combineReducers } from 'redux';
import { todos } from './todos';
import { categories } from './categories';
import { loader } from '../components/loader/reducer';

export const rootReducer = combineReducers({
    todos,
    categories,
    loader
});