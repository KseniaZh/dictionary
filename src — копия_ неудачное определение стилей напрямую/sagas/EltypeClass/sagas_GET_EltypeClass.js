import { takeEvery, select, put, call } from 'redux-saga/effects';
import { getRequestServer } from '../../store/EltypeClass/actions/actionEltypeClass';
import {
    loadingShow,
    getCounterPagesTable,
    getDataPageRowTable,
    changeActivArrNumberPagesFooterTable
} from '../../store/EltypeClass/actions/actionsFlagsEltypeClass';
import { START_GET_REQUEST } from '../../store/EltypeClass/types';
import fetchData from '../../functions/fetchData';
import { url_EltypeClass} from "../../constans/url"


export function* workerStart_GET_RequestServer(){
    
    try {
        const countRowTable = yield select(state => state.stateFlagsEltypeClass.countRowTable);
        const numberList = yield select(state => state.stateFlagsEltypeClass.numberList);
        const oldArr = yield select(state => state.stateFlagsEltypeClass.activArrNumberPagesFooterTable);

        yield put(loadingShow(true));

        const data = yield call(fetchData, url_EltypeClass);

        yield put(getRequestServer(data));
        yield put(getCounterPagesTable(data, countRowTable));
        yield put(getDataPageRowTable(data, countRowTable, numberList));
        yield put(changeActivArrNumberPagesFooterTable(numberList, countRowTable, oldArr, data));
        
        yield put(loadingShow(false));
  
    } catch (error) {
        console.log('workerStart_GET_RequestServer error ', error);
    }
}

export function* watch_EltypeClass_GET_RequestServer(){
    
    yield takeEvery(START_GET_REQUEST, workerStart_GET_RequestServer)
}