import {

} from "../types";

const initialState = [{
                            "uid": "",
                            "name": "",
                            "comment": "",
                            "classViewProperty": false,
                            "dbTable": false,
}];


const stateViewType = (state = initialState, action) => {
    
    switch (action.type){
          
        default: 
            return state;
    }
}
export default stateViewType
