﻿import {
    START_SAGAS_AUTH_POST_REQUEST,
    SAVE_DATA_AUTH,
    START_SAGAS_AUTH_GET_LOGIN_REQUEST,
    SAVE_DATA_FROM_LOGIN_WINDOW,
    FLAG_LOGIN_CONFIRMED,
    FLAG_REPEAT_PASSWORD_AUTH,
    CHANGE_DATA_AUTH,
    START_SAGAS_AUTH_PUT_REQUEST,
    CHANGE_FLAG_PRIMARY_REGISTRATION
} from "./types";

export const startSagasAuthPOSTRequestServer = () => {

//слушатель Саги на ввод нового пользователя
    return {
        type: START_SAGAS_AUTH_POST_REQUEST
    }
} 

export const saveDataAuthorization = (data) => {

    return {
        type: SAVE_DATA_AUTH,
        payload: data
    }
}

export const saveDataFromLoginWindow = (data) => {

    return {
        type: SAVE_DATA_FROM_LOGIN_WINDOW,
        payload: data
    }
}

export const startSagasAuthGETloginRequestServer = () => {

//слушатель Саги GETlogin
    return {
        type: START_SAGAS_AUTH_GET_LOGIN_REQUEST
    }
} 

export const confirmAuthorization = (data, passwordFromLoginWindow) => {

    if (data.password === passwordFromLoginWindow) {

        return {
            type: SAVE_DATA_AUTH,
            payload: data
        }
    } else {
        data.password = "notConfirmed";

        return {
            type: SAVE_DATA_AUTH,
            payload: data
        }
    }
}
export const flagOpenWarningPasswordNotConfimed = (data, passwordFromLoginWindow) => {

    let flag = true;
    if (data.password !== passwordFromLoginWindow) {
        flag = false;
    };

        return {
            type: FLAG_REPEAT_PASSWORD_AUTH,
            payload: flag
        }
}
export const fucnsFlagRepeatPasswordAuth = (data) => {

    return {
        type: FLAG_REPEAT_PASSWORD_AUTH,
        payload: data
    }
}

export const confirmLogin = (data) => {
        if (data.title === "Not Found") {
            return {
                type: FLAG_LOGIN_CONFIRMED,
                payload: false
            }
        };
        return {
            type: FLAG_LOGIN_CONFIRMED,
            payload: true
        }
}

export const changeDataAuthorization = (data, dataOld) => {

   //изменить данные пользователя
    let dataNew = {
        ...dataOld,
        ...data
    };

    return {
        type: CHANGE_DATA_AUTH,
        payload: dataNew
    }
}

export const startSagasAuthPUTRequestServer = () => {

    //слушатель Саги на изменение данных пользователя
    return {
        type: START_SAGAS_AUTH_PUT_REQUEST
    }
} 
export const changeFlagPrimaryRegistration = (data) => {

    return {
        type: CHANGE_FLAG_PRIMARY_REGISTRATION,
        payload: data
    }
}