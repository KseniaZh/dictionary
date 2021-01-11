import { takeEvery, select, put, call } from 'redux-saga/effects';
import { putRequestServer } from '../../store/BasisReport/actions/actionBasisReport';
import fetchData from '../../functions/fetchData';
import { START_PUT_REQUEST } from '../../store/User/types';


export function* dataSendServer() {
}

export function* workerStart_User_PUT_RequestServer(){
    
    try {
        const stateSendServer = yield select(state => state.focusData);

        const url = yield select(state => state.stateUrl.url_User_PUT);
        
        const data = yield call(fetchData, url, 'PUT', stateSendServer);
        
        const oldStateTable = yield select(state => state.stateBasisReport);

        yield put(putRequestServer(data, oldStateTable));
         
    } catch (error) {
        console.log('workerStart_User_PUT_RequestServer error ', error);
    }
 
}

export function* watch_User__PUT_RequestServer(){
    
    yield takeEvery(START_PUT_REQUEST, workerStart_User_PUT_RequestServer)
}
