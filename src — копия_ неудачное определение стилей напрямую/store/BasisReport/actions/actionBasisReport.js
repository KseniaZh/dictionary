import {
    GET_REQUEST,
    POST_REQUEST,
    PUT_REQUEST,
    DELETE_REQUEST,
    SORTING_TABLE,

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
