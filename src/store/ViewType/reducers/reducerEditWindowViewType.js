import {
    TYPE_REQUEST,
    NAME_WINDOW,
    CHANGE_SEARCH_KEY
} from "../types"

// ответ сервера
//"uid": 0,
//"name": "string",
//"comment": "string",
//"classViewProperty": "string",
// "dbTable": "string"

const initialState = {
    nameWindow: "",
    typeRequest: null,
    nameСolumnsTableList: [
        "name",
        "comment",
        "classViewProperty",
        "dbTable"
    ],
    searchСolumnsName: {
        "name": true,
        "comment": false,
        "classViewProperty": true,
        "dbTable": true
    },
    selectionСolumnsName: {
        "name": true,
        "comment": false,
        "classViewProperty": true,
        "dbTable": true
    },
    sortСolumns: {
        "name": true,
        "comment": false,
        "classViewProperty": true,
        "dbTable": true
    },
    searchKey: 'name',
    labels: [
                'Наименование',
                'Комментарии',
                'Класс',
                'dbTable'
            ],
    placeholders: [
                'Наименование',
                'Комментарии',
                'Класс',
                'dbTable'
            ],
    typeData: [
                "text",
                "text",
                "text",
                "text"
            ],
    typeInput: [
                "input",
                "input",
                "input",
                "input"
    ],
};

const stateInputEditWindowViewType = (state = initialState, action) => {
    
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
export default stateInputEditWindowViewType