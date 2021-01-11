import {
    GET_REQUEST,
    POST_REQUEST,
    PUT_REQUEST,
    DELETE_REQUEST,
    SORTING_TABLE
} from "../types";

const initialState = [ {} ];


const stateBasisReport = (state = initialState, action) => {
    
    switch (action.type){
            
        case GET_REQUEST:
            return  action.payload
            
        case POST_REQUEST:
            return  [
                ...state,
                action.payload
            ]
            
        case PUT_REQUEST:
            return action.payload

        case DELETE_REQUEST:
            return action.payload

        case SORTING_TABLE:
            return action.payload
 
        default: 
            return state;
    }
}
export default stateBasisReport
