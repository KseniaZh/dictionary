import {
    START_FOCUS_DATA,
    CREATE_DATA,

} from "../types";



//хранит фокус, он же окно ввода и изменения данных

export const saveStartFocusDataStore = (dataFromServer, focusData) => {

    if (focusData === {}) {
        let data = {};
        Object.keys(dataFromServer[0]).map((key) => data[key] = '');

        return {
            type: START_FOCUS_DATA,
            payload: data
        }
    } else {
        return {
            type: START_FOCUS_DATA,
            payload: focusData
        }
    }

}

export const saveDataStore = (data) => {
    return {
        type: CREATE_DATA,
        payload: data
    }
}