import {
    ADD_DESCRIPTION

} from "./types";

export const addDescription = (data, oldState) => {

    let newState = { ...oldState, ...data };

    return {
        type: ADD_DESCRIPTION,
        payload: newState
    }
}

