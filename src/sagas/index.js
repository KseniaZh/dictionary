import { all } from 'redux-saga/effects';

import { watch_Authorization_POST_RequestServer } from './Authorization/sagas_POST_Authorization';
import { watch_Authorization_GET_login_RequestServer } from './Authorization/sagas_GET_login_Authoriz';
import { watch_Authorization_PUT_RequestServer } from './Authorization/sagas_PUT_Authorization';

import { watch_User_GET_RequestServer } from './User/sagas_GET_User';
import { watch_User_POST_RequestServer } from './User/sagas_POST_User';
import { watch_User__PUT_RequestServer } from './User/sagas_PUT_User';
import { watch_User_DELETE_RequestServer } from './User/sagas_DELETE_User';

import { watch_EltypeClass_GET_RequestServer } from './EltypeClass/sagas_GET_EltypeClass';
import { watch_EltypeClass_POST_RequestServer } from './EltypeClass/sagas_POST_EltypeClass';
import { watch_EltypeClass_PUT_RequestServer } from './EltypeClass/sagas_PUT_EltypeClass';
import { watch_EltypeClass_DELETE_RequestServer } from './EltypeClass/sagas_DELETE_EltypeClass';

import { watch_ViewType_GET_RequestServer } from './ViewType/sagas_GET_ViewType';
import { watch_ViewType_POST_RequestServer } from './ViewType/sagas_POST_ViewType';
import { watch_ViewType_PUT_RequestServer } from './ViewType/sagas_PUT_ViewType';

export default function* rootSaga(){
    yield all( [ 
        watch_Authorization_POST_RequestServer(),
        watch_Authorization_PUT_RequestServer(),
        watch_Authorization_GET_login_RequestServer(),

        watch_User_GET_RequestServer(),
        watch_User_POST_RequestServer(),
        watch_User__PUT_RequestServer(),
        watch_User_DELETE_RequestServer(),

        watch_EltypeClass_GET_RequestServer(),
        watch_EltypeClass_POST_RequestServer(),
        watch_EltypeClass_PUT_RequestServer(),
        watch_EltypeClass_DELETE_RequestServer(),

        watch_ViewType_GET_RequestServer(),
        watch_ViewType_POST_RequestServer(),
        watch_ViewType_PUT_RequestServer(),

               ])
}