import {
    CHANGE_ADRESS_OPEN_TABLE

                    } from "../types";


const initialState = {
                        linkBase: '/EltypeClass',
                        linkCompare: '/CompareEltypeClass',
                        linkActiveTable: '/EltypeClass',
                        linkEditWindow: '/EditWindowEltypeClass',
                        linkWindowConfirmDeleting: '/WindowConfirmDeleting',
                        linkWarningValueNotSelected: '/WarningValueNotSelected'
                     };


const stateLinksEltypeClass = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_ADRESS_OPEN_TABLE:
            return {
                ...state,
                linkActiveTable: action.payload
            }
      
        default:
            return state;
    }
}
export default stateLinksEltypeClass