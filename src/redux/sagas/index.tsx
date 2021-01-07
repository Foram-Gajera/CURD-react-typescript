import {all} from 'redux-saga/effects';
import { addSaga, deleteSaga, updateSaga, userSaga } from './userSaga';

export default function* rootSaga() {
    yield all([userSaga(), deleteSaga(), addSaga(), updateSaga()]);
}