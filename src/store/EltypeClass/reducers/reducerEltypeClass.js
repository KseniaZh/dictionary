import {

} from "../types";

const initialState = [{
                        uid: "",
                        name: "",
                        isDeleted: false,
                        isTemplate: false
}];


const stateEltypeClass = (state = initialState, action) => {
    
    switch (action.type){   
 
        default: 
            return state;
    }
}
export default stateEltypeClass
