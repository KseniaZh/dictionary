import { takeEvery, select, put, call } from 'redux-saga/effects';
import { saveDataAuthorization } from '../../store/Authorization/actionsAuthorization';
import fetchData from '../../functions/fetchData';
import { START_SAGAS_AUTH_PUT_REQUEST } from '../../store/Authorization/types';

export function* workerStart_Authorization_PUT_RequestServer(){

    const url = yield select(state => state.stateUrl.url_User_PUT);

    const stateAuthorization = yield select(state => state.stateAuthorization.user);
    
    try {

        const data = yield call(fetchData, url, 'PUT', stateAuthorization);
        
        yield put(saveDataAuthorization(data));
         
    } catch (error) {
        console.log('workerStart_Authorization_PUT_RequestServe error ', error);
    }
}

export function* watch_Authorization_PUT_RequestServer(){

    yield takeEvery(START_SAGAS_AUTH_PUT_REQUEST, workerStart_Authorization_PUT_RequestServer)

}