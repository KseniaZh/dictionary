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
          
        default: 
            return state;
    }
}
export default stateUser
