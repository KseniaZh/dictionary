import {
    START_GET_REQUEST,
    START_POST_REQUEST,
    START_PUT_REQUEST,

} from "../types";


//слушатели для Саги

export const start_ViewType_GET_RequestServer = ()=>{
        return {
        type: START_GET_REQUEST
    }
}
export const start_ViewType_POST_RequestServer = () => {
    return {
        type: START_POST_REQUEST
    }
}
export const start_ViewType_PUT_RequestServer = () => {
    return {
        type: START_PUT_REQUEST
    }
}
