import {

} from "../types";

const initialState = [{
                            "uid": "",
                            "login": "",
                            "name": "",
                            "password": "",
                            "isDeleted": false,
                            "isSuperUser": false,
                            "docInfo": [],
                            "projectAuthorU": [],
                            "projectUpdaterU": [],
                            "userProjects": []
}];


const stateUser = (state = initialState, action) => {
    
    switch (action.type){
            
        //case GET_REQUEST:
        //    return  action.payload
            
        //case POST_REQUEST:
        //    return  [
        //        ...state,
        //        action.payload
        //    ]
            
        //case PUT_REQUEST:
        //    return action.payload

        //case DELETE_REQUEST:
        //    return action.payload

        //case SORTING_TABLE:
        //    return action.payload
 
        default: 
            return state;
    }
}
export default stateUser
