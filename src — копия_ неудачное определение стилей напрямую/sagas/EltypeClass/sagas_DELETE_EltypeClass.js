import { takeEvery, select, put, call } from 'redux-saga/effects';
import { deleteRequestServer } from '../../store/EltypeClass/actions/actionEltypeClass';
import fetchData from '../../functions/fetchData';
import { url_EltypeClass } from "../../constans/url";
import { START_DELETE_REQUEST } from '../../store/EltypeClass/types';

export function* workerStart_DELETE_RequestServer() {

    const stateSendServer = yield select(state => state.createDataEltypeClass.stateData);

    const urlDelete = `${url_EltypeClass}/delete/${stateSendServer.uid}`

    const oldStateTable = yield select(state => state.stateTableEltypeClass);

    try {
        const data = yield call(fetchData, urlDelete, 'DELETE', stateSendServer);
        
        yield put(deleteRequestServer(data, oldStateTable));
         
    } catch (error) {
       console.log('workerStartRequestServer error ', error);
    }
}

export function* watch_EltypeClass_DELETE_RequestServer(){
    
    yield takeEvery(START_DELETE_REQUEST, workerStart_DELETE_RequestServer)

}