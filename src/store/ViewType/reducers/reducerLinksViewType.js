import {
    CHANGE_ADRESS_OPEN_TABLE

                    } from "../types";


const initialState = {
                        linkBase: '/ViewType',
                        linkCompare: '/CompareViewType',
                        linkActiveTable: '/ViewType',
                        linkEditWindow: '/EditWindowViewType',
                        linkWarningValueNotSelected: '/WarningValueNotSelected'
                     };


const stateLinksViewType = (state = initialState, action) => {

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
export default stateLinksViewType