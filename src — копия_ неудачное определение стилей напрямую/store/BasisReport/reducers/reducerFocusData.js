import {
    START_FOCUS_DATA,
    CREATE_DATA
} from "../types"

const initialState = {};

const focusData = (state = initialState, action) => {
    
    switch (action.type) {

        case START_FOCUS_DATA:
            return action.payload;
            
        case CREATE_DATA:
            return action.payload;
   
        default: 
            return state;
    }
}
export default focusData