import {
    ADD_DATA_COMPARE,
    CLEAR_ARR_COMPARE,
    DELETE_DATA_COMPARE,
    SORTING_ARR_COMPARE

} from "../types";

const initialState = [];


const stateCompareViewType = (state = initialState, action) => {
    
    switch (action.type){
            
        case ADD_DATA_COMPARE:
            return action.payload;

        case SORTING_ARR_COMPARE:
            return action.payload;

        case CLEAR_ARR_COMPARE:
            return action.payload;

        case DELETE_DATA_COMPARE:
            return action.payload;

        default: 
            return state;
    }
}
export default stateCompareViewType