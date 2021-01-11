import {
    SAVE_DATA_AUTH,
    SAVE_DATA_FROM_LOGIN_WINDOW,
    FLAG_LOGIN_CONFIRMED,
    FLAG_REPEAT_PASSWORD_AUTH,
    CHANGE_DATA_AUTH
} from "./types";

const initialState = {
                user: {
                        uid: '',
                        login: '',
                        name: '',
                        password: "notConfirmed"
                        },
    flagLoginConfirmed: true,
    flagRepeatPasswordAuth: true,
    dataFromLoginWindow: {
                        login: '',
                        password: ''
                    }
            };


const stateAuthorization = (state = initialState, action) => {

    switch (action.type) {

        case SAVE_DATA_AUTH:
            return {
                ...state,
                user: action.payload
            };
        case SAVE_DATA_FROM_LOGIN_WINDOW:
            return {
                ...state,
                dataFromLoginWindow: action.payload
            };
        case FLAG_LOGIN_CONFIRMED:
            return {
                ...state,
                flagLoginConfirmed: action.payload
            };
        case FLAG_REPEAT_PASSWORD_AUTH:
            return {
                ...state,
                flagRepeatPasswordAuth: action.payload
            };
        case CHANGE_DATA_AUTH:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
}
export default stateAuthorization


