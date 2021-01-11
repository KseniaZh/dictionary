import {
    GET_REQUEST,
    POST_REQUEST,
    PUT_REQUEST,
    DELETE_REQUEST,
    SORTING_TABLE,
    CREATE_DATA,
    START_GET_REQUEST,
    START_POST_REQUEST,
    START_PUT_REQUEST,
    START_DELETE_REQUEST,
    TYPE_REQUEST,
    NAME_WINDOW
} from "../types";

export const getRequestServer = (dataFromServer)=>{

    return {
        type: GET_REQUEST,
        payload: dataFromServer
    }
}

export const postRequestServer = (dataFromServer)=>{
    
    return {
        type: POST_REQUEST,
        payload: dataFromServer
    }
}

export const putRequestServer = (dataFromServer, oldStateTable)=>{

    let newStateTable = oldStateTable.map ( obj =>{
        if (obj.uid === dataFromServer.uid){
                obj = dataFromServer;
            }
                return obj
    })

    return {
        type: PUT_REQUEST,
        payload: newStateTable
    }
}

export const deleteRequestServer = (dataFromServer, oldStateTable) => {

    let newStateTable = oldStateTable.filter( obj => obj.uid !== dataFromServer.uid )

    return {
        type: DELETE_REQUEST,
        payload: newStateTable
    }
}
// сортировка таблицы 

export const sortingTable = (data) => {

    return {
        type: SORTING_TABLE,
        payload: data
    }
}

//хранилище для всплывающего окна

export const saveDataStore = (data) => {
    return {
        type: CREATE_DATA,
        payload: data
    }
}
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


//слушатели для Саги

export const startGetRequestServerEltypeClass = ()=>{
        return {
        type: START_GET_REQUEST
    }
}
export const start_POST_RequestServer = () => {
    return {
        type: START_POST_REQUEST
    }
}
export const start_PUT_RequestServer = () => {
    return {
        type: START_PUT_REQUEST
    }
}
export const start_DELETE_RequestServer = () => {
    return {
        type: START_DELETE_REQUEST
    }
}