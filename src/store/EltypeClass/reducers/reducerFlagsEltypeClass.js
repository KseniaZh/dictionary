import {
    FLAG_OPEN_COMPARE_WINDOW
} from "../types"


const initialState = {
    flagOpenCompareWindow: false
};

const stateFlagsEltypeClass = (state = initialState, action) => {
    
    switch (action.type){
            
        case FLAG_OPEN_COMPARE_WINDOW:
            return {
                ...state,
                flagOpenCompareWindow: action.payload
            };

        default: 
            return state;
    }
}
export default stateFlagsEltypeClass