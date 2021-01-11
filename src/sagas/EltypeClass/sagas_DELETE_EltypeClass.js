import { takeEvery, select, put, call } from 'redux-saga/effects';
import { deleteRequestServer } from '../../store/BasisReport/actions/actionBasisReport';
import fetchData from '../../functions/fetchData';
import { START_DELETE_REQUEST } from '../../store/EltypeClass/types';

export function* workerStart_EltypeClass_DELETE_RequestServer() {

    const stateSendServer = yield select(state => state.focusData);

    const urlDelete = yield select(state => state.stateUrl.url_EltypeClass_DELETE);

    const url = `${urlDelete}${stateSendServer.uid}`;

    const oldStateTable = yield select(state => state.stateBasisReport);

    try {
        const data = yield call(fetchData, url, 'DELETE', stateSendServer);
        
        yield put(deleteRequestServer(data, oldStateTable));
        
    } catch (error) {
        console.log('workerStart_DELETE_RequestServer error ', error);
    }
}

export function* watch_EltypeClass_DELETE_RequestServer(){
    
    yield takeEvery(START_DELETE_REQUEST, workerStart_EltypeClass_DELETE_RequestServer)

}