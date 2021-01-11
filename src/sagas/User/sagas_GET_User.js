import { takeEvery, select, put, call } from 'redux-saga/effects';
import { getRequestServer } from '../../store/BasisReport/actions/actionBasisReport';
import { saveStartFocusDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    loadingShow,
    getCounterPagesTable,
    getDataPageRowTable,
    changeActivArrNumberPagesFooterTable
} from '../../store/BasisReport/actions/actionsFlagsBasisReport';
import { START_GET_REQUEST } from '../../store/User/types';
import fetchData from '../../functions/fetchData';


export function* workerStart_GET_RequestServer() {

    const url = yield select(state => state.stateUrl.url_User);
    
    try {
        const countRowTable = yield select(state => state.stateFlagsBasisReport.countRowTable);
        const numberList = yield select(state => state.stateFlagsBasisReport.numberList);
        const focusData = yield select(state => state.focusData);
        const oldArr = yield select(state => state.stateFlagsBasisReport.activArrNumberPagesFooterTable);

        yield put(loadingShow(true));

        const data = yield call(fetchData, url);

        yield put(getRequestServer(data));
        yield put(getCounterPagesTable(data, countRowTable));
        yield put(getDataPageRowTable(data, countRowTable, numberList));
        yield put(changeActivArrNumberPagesFooterTable(numberList, countRowTable, oldArr, data));
        yield put(saveStartFocusDataStore(data, focusData));
        
        yield put(loadingShow(false));
  
    } catch (error) {
        console.log('workerStart_GET_RequestServer error ', error);
    }
}

export function* watch_User_GET_RequestServer(){
    
    yield takeEvery(START_GET_REQUEST, workerStart_GET_RequestServer)
}