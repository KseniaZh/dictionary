import { takeEvery, select, put, call } from 'redux-saga/effects';
import { postRequestServer } from '../../store/EltypeClass/actions/actionEltypeClass';
import fetchData from '../../functions/fetchData';
import { url_EltypeClass_POST } from "../../constans/url";
import { START_POST_REQUEST } from '../../store/EltypeClass/types';

export function* workerStart_POST_RequestServer(){
    
    const stateSendServer = yield select(state => state.createDataEltypeClass.stateData);
    
    try {
        delete stateSendServer.uid;
        delete stateSendServer.isDeleted;
        delete stateSendServer.isTemplate;

        const data = yield call(fetchData, url_EltypeClass_POST, 'POST', stateSendServer);
        
        yield put(postRequestServer(data));
         
    } catch (error) {
       console.log('workerStartRequestServer error ', error);
    }
}

export function* watch_EltypeClass_POST_RequestServer(){
    
    yield takeEvery(START_POST_REQUEST, workerStart_POST_RequestServer)

}