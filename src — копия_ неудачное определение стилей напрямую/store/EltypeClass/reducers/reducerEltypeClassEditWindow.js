import {
    CREATE_DATA,
    TYPE_REQUEST,
    NAME_WINDOW
} from "../types"

const initialState ={
    stateData: {
                uid: "",
                name: "",
                isDeleted: false,
                isTemplate: false
            },
    nameWindow: "",
    typeRequest: null,
    labels: [
                'uid',
                'Наименование',
                'isDeleted',
                'isTemplate'
            ],
    placeholders: [
                'uid',
                'наименование',
                'isDeleted',
                'isTemplate'
            ],
    typeData: [
                "text",
                "text",
                "checkbox",
                "checkbox"
    ],
    nameСolumnsTableList: [
        'uid',
        'Наименование',
        'isDeleted',
        'isTemplate'
    ],
    searchKey: 'name',
                    };

const createDataEltypeClass = (state = initialState, action) => {
    
    switch (action.type){
            
        case CREATE_DATA:
            return {
                ...state,
                stateData: action.payload
            }
   
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

        default: 
            return state;
    }
}
export default createDataEltypeClass