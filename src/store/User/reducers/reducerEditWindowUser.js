import {
    TYPE_REQUEST,
    NAME_WINDOW,
    CHANGE_SEARCH_KEY
} from "../types"

//"uid": "",
//"login": "",
//"name": "",
//"password": "",
//"isDeleted": false,
//"isSuperUser": false,
//"docInfo": [],
//"projectAuthorU": [],
//"projectUpdaterU": [],
//"userProjects": []

const initialState = {
    nameWindow: "",
    typeRequest: null,
    nameСolumnsTableList: [
        "login",
        "name",
        "password",
        "isDeleted",
        "isSuperUser"
    ],
    searchСolumnsName: {
        "login": true,
        "name": true,
        "password": true,
        "isDeleted": false,
        "isSuperUser": false
    },
    selectionСolumnsName: {
        "login": true,
        "name": true,
        "password": true,
        "isDeleted": true,
        "isSuperUser": true
    },
    sortСolumns: {
        "login": true,
        "name": true,
        "password": true,
        "isDeleted": false,
        "isSuperUser": false
    },
    searchKey: 'name',
    labels: [
                'login',
                'Ф.И.О.',
                'пароль',
                'isDeleted',
                'isSuperUser'
            ],
    placeholders: [
                'login',
                'Ф.И.О.',
                'пароль',
                'isDeleted',
                'isSuperUser'
            ],
    typeData: [
                "text",
                "text",
                "text",
                "checkbox",
                "checkbox"
            ],
    typeInput: [
                "input",
                "input",
                "input",
                "checkbox",
                "checkbox"
    ],

};

const stateInputEditWindowUser = (state = initialState, action) => {
    
    switch (action.type){
            
   
        case TYPE_REQUEST:
            return {
                ...state,
                typeRequest: action.payload
            }
    
        case NAME_WINDOW:
            return {
                ...state,
                nameWindow: action.payload
            }
        case CHANGE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload
            }


        default: 
            return state;
    }
}
export default stateInputEditWindowUser