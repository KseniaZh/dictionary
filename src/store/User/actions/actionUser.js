import {
    START_GET_REQUEST,
    START_POST_REQUEST,
    START_PUT_REQUEST,
    START_DELETE_REQUEST,

} from "../types";


//��������� ��� ����

export const startUser_GET_RequestServer = ()=>{
        return {
        type: START_GET_REQUEST
    }
}
export const startUser_POST_RequestServer = () => {
    return {
        type: START_POST_REQUEST
    }
}
export const startUser_PUT_RequestServer = () => {
    return {
        type: START_PUT_REQUEST
    }
}
export const startUser_DELETE_RequestServer = () => {
    return {
        type: START_DELETE_REQUEST
    }
}