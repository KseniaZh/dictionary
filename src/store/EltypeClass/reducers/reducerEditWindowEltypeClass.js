import {
    TYPE_REQUEST,
    NAME_WINDOW,
    CHANGE_SEARCH_KEY
} from "../types"

            //uid: "",
            // name: "",
            //isDeleted: false,
            //isTemplate: false

const initialState = {
    nameWindow: "",
    typeRequest: null,
    nameСolumnsTableList: [
        "name",
        "isDeleted",
        "isTemplate"
    ],
    searchСolumnsName: {
        "name": true,
        "isDeleted": false,
        "isTemplate": false
    },
    selectionСolumnsName: {
        "name": true,
        "isDeleted": true,
        "isTemplate": true
    },
    sortСolumns: {
        "name": true,
        "isDeleted": false,
        "isTemplate": false
    },
    searchKey: 'name',
    labels: [
                'наименование',
                'isDeleted',
                'isTemplate'
            ],
    placeholders: [
                'наименование',
                'isDeleted',
                'isTemplate'
            ],
    typeData: [
                "text",
                "checkbox",
                "checkbox"
            ],
    typeInput: [
                "input",
                "checkbox",
                "checkbox"
    ],

};

const stateInputEditWindowEltypeClass = (state = initialState, action) => {
    
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
export default stateInputEditWindowEltypeClass