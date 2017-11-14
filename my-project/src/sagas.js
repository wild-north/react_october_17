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
    const newAction = deleteItem(action.payload);
    yield put(newAction);
    console.log('put', newAction);
}

function* getList () {
    console.log('getList');
    const list = fetch('http://192.168.10.176:8080/data.json')
        .then(resp => resp.toJSON())
        .then(data => {
            console.log(data);
        })
        .catch(() => {
            console.log('Все ОЧЕНЬ плохо');
        });


}

export function* watchDeleteAsync() {
    console.log('watchDeleteAsync');
    yield takeEvery(constants.ITEM_DELETE_ASYNC, deleteAsync);
}
export function* watchGetList() {
    console.log('watchGetList');
    yield takeEvery(constants.GET_LIST, getList);
}

export function* rootSaga () {
    yield all([
        watchIncrementAsync(),
        watchGetList()
    ]);
}