import { takeEvery, select, put, call } from 'redux-saga/effects';
import {
    confirmAuthorization,
    confirmLogin,
    flagOpenWarningPasswordNotConfimed
} from '../../store/Authorization/actionsAuthorization';
import fetchData from '../../functions/fetchData';
import { url_User_GET_login } from "../../constans/url";
import { START_SAGAS_AUTH_GET_LOGIN_REQUEST } from '../../store/Authorization/types';

export function* workerStart_Authorization_GET_login_RequestServer(){

    console.log('!!! workerStart_Authorization_GET_login_RequestServer !!!!');

    const loginFromLoginWindow = yield select(state => state.stateAuthorization.dataFromLoginWindow.login);
    const passwordFromLoginWindow = yield select(state => state.stateAuthorization.dataFromLoginWindow.password);

    const url = `${url_User_GET_login}/${loginFromLoginWindow}`;
    console.log('url', url);
    
    try {

        const data = yield call(fetchData, url, 'GET');
        
        yield put(confirmAuthorization(data, passwordFromLoginWindow));
        yield put(flagOpenWarningPasswordNotConfimed(data, passwordFromLoginWindow));
        yield put(confirmLogin(data));
         
    } catch (error) {
       console.log('workerStartRequestServer error ', error);
    }
}

export function* watch_Authorization_GET_login_RequestServer(){

    yield takeEvery(START_SAGAS_AUTH_GET_LOGIN_REQUEST, workerStart_Authorization_GET_login_RequestServer)

}