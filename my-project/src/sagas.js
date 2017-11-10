import * as constants from './actions/constants';
import { deleteItem } from './actions';

import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

export function* deleteAsync(action) {
    console.log('deleteAsync()', action);
    yield new Promise(resolve => setTimeout(() => {
        resolve(true);
    }, 2000));
    console.log('timeout');
    yield delay(2000);
    console.log('delay');
    yield put(deleteItem(action && action.payload));
    console.log('put');
}

export function* watchIncrementAsync() {
    console.log('watchIncrementAsync');
    yield takeEvery(constants.ITEM_DELETE_ASYNC, deleteAsync);
}

export function* rootSaga () {
    yield all([
        watchIncrementAsync()
    ]);
}