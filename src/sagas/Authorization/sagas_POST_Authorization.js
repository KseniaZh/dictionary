import { takeEvery, select, put, call } from 'redux-saga/effects';
import { saveDataAuthorization } from '../../store/Authorization/actionsAuthorization';
import fetchData from '../../functions/fetchData';
import { START_SAGAS_AUTH_POST_REQUEST } from '../../store/Authorization/types';

export function* workerStart_Authorization_POST_RequestServer(){

    const url = yield select(state => state.stateUrl.url_User_POST);

    const stateAuthorization = yield select(state => state.stateAuthorization.user);
    
    try {
        delete stateAuthorization.uid;

        const data = yield call(fetchData, url, 'POST', stateAuthorization);
        
        yield put(saveDataAuthorization(data));
         
    } catch (error) {
       console.log('workerStartRequestServer error ', error);
    }
}

export function* watch_Authorization_POST_RequestServer(){

    yield takeEvery(START_SAGAS_AUTH_POST_REQUEST, workerStart_Authorization_POST_RequestServer)

}