import { takeEvery, select, put, call } from 'redux-saga/effects';
import { postRequestServer } from '../../store/BasisReport/actions/actionBasisReport';
import fetchData from '../../functions/fetchData';
import { START_POST_REQUEST } from '../../store/EltypeClass/types';

export function* workerStart_EltypeClass_POST_RequestServer() {

 
    const stateSendServer = yield select(state => state.focusData);

    const url = yield select(state => state.stateUrl.url_EltypeClass_POST);
    
    try {
        delete stateSendServer.uid;
        delete stateSendServer.isDeleted;
        delete stateSendServer.isTemplate;

        const data = yield call(fetchData, url, 'POST', stateSendServer);
        
        yield put(postRequestServer(data));
         
    } catch (error) {
        console.log('workerStart_POST_RequestServer error ', error);
    }
}

export function* watch_EltypeClass_POST_RequestServer() {
    
    yield takeEvery(START_POST_REQUEST, workerStart_EltypeClass_POST_RequestServer)

}