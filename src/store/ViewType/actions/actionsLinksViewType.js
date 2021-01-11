import {
    CHANGE_ADRESS_OPEN_TABLE

                    } from "../types";

export const changeAdressOpenTable = (data) => {

    return {
        type: CHANGE_ADRESS_OPEN_TABLE,
        payload: data
    }
}