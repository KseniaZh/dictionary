import { takeEvery, select, put, call } from 'redux-saga/effects';
import { postRequestServer } from '../../store/BasisReport/actions/actionBasisReport';
import fetchData from '../../functions/fetchData';
import { START_POST_REQUEST } from '../../store/ViewType/types';

export function* workerStart_ViewType_POST_RequestServer() {

 
    const stateSendServer = yield select(state => state.focusData);

    const url = yield select(state => state.stateUrl.url_ViewType_POST);
    
    try {
        delete stateSendServer.uid;
        delete stateSendServer.comment;
        delete stateSendServer.classViewProperty;
        delete stateSendServer.dbTable;

        const data = yield call(fetchData, url, 'POST', stateSendServer);
        
        yield put(postRequestServer(data));
         
    } catch (error) {
        console.log('workerStart_POST_RequestServer error ', error);
    }
}

export function* watch_ViewType_POST_RequestServer() {
    
    yield takeEvery(START_POST_REQUEST, workerStart_ViewType_POST_RequestServer)

}