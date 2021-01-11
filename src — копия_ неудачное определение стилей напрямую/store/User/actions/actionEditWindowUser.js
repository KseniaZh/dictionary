import {
    TYPE_REQUEST,
    NAME_WINDOW,
    CHANGE_SEARCH_KEY
} from "../types";


export const saveTypeRequest = (data) => {

    return {
        type: TYPE_REQUEST,
        payload: data
    }
}
export const saveNameWindow = (data) => {

    return {
        type: NAME_WINDOW,
        payload: data
    }
}
export const changeSearchKey = (data) => {
    // изменение ключа для поиска в окне шапки
    return {
        type: CHANGE_SEARCH_KEY,
        payload: data
    }
}
