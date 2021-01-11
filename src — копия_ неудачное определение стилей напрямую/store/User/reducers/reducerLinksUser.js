import {
    CHANGE_ADRESS_OPEN_TABLE

                    } from "../types";


const initialState = {
                        linkBase: '/User',
                        linkCompare: '/CompareUser',
                        linkActiveTable: '/User',
                        linkEditWindow: '/EditWindowUser',
                        linkWindowConfirmDeleting: '/UserWindowConfirmDeleting',
                        linkWarningValueNotSelected: '/WarningValueNotSelected'
                     };


const stateLinksUser = (state = initialState, action) => {

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
export default stateLinksUser