import { takeEvery, select, put, call } from 'redux-saga/effects';
import { putRequestServer } from '../../store/EltypeClass/actions/actionEltypeClass';
import fetchData from '../../functions/fetchData';
import { url_EltypeClass_PUT } from "../../constans/url"
import { START_PUT_REQUEST } from '../../store/EltypeClass/types';


export function* dataSendServer() {
}

export function* workerStart_PUT_RequestServer(){
    
    try {
        const stateSendServer = yield select(state => state.createDataEltypeClass.stateData);
        
        const data = yield call(fetchData, url_EltypeClass_PUT, 'PUT', stateSendServer);
        
        const oldStateTable = yield select(state => state.stateTableEltypeClass);

        yield put(putRequestServer(data, oldStateTable));
         
    } catch (error) {
       console.log('workerStart_PUT_RequestServer error ', error);
    }
 
}

export function* watch_EltypeClass__PUT_RequestServer(){
    
    yield takeEvery(START_PUT_REQUEST, workerStart_PUT_RequestServer)
}
