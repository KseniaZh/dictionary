import {
    EMPLOY_DESCRIPTION_ALL
                    } from "./types";

const initialState = {
                employDescriptionAll: true

            };


const stateFlagsAll = (state = initialState, action) => {

    switch (action.type) {

        case EMPLOY_DESCRIPTION_ALL:
            return {
                ...state,
                employDescriptionAll: action.payload
            }
 
        default:
            return state;
    }
}
export default stateFlagsAll