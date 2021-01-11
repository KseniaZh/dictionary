import { takeEvery, select, put, call } from 'redux-saga/effects';
import { saveDataAuthorization } from '../../store/Authorization/actionsAuthorization';
import fetchData from '../../functions/fetchData';
import { url_User_POST } from "../../constans/url";
import { START_SAGAS_AUTH_POST_REQUEST } from '../../store/Authorization/types';

export function* workerStart_Authorization_POST_RequestServer(){

    console.log('!!! workerStart_Authorization_POST_RequestServer !!!!');

    const stateAuthorization = yield select(state => state.stateAuthorization.user);
    
    try {
        delete stateAuthorization.uid;

        const data = yield call(fetchData, url_User_POST, 'POST', stateAuthorization);
        
        yield put(saveDataAuthorization(data));
         
    } catch (error) {
       console.log('workerStartRequestServer error ', error);
    }
}

export function* watch_Authorization_POST_RequestServer(){

    yield takeEvery(START_SAGAS_AUTH_POST_REQUEST, workerStart_Authorization_POST_RequestServer)

}