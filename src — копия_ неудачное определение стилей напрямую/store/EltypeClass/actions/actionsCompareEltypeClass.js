import {
    ADD_DATA_COMPARE,
    CLEAR_ARR_COMPARE,
    DELETE_DATA_COMPARE,
    SORTING_ARR_COMPARE

} from "../types";

export const addDataCompareArr = (data, arrOld) => {
    
    let arr = [];
    for (let i = 0; i < arrOld.length; i++) {
        if (arrOld[i].uid !== data.uid && arrOld[i] !== {} && arrOld[i].uid !== '') {
            arr.push(arrOld[i]);
        }
    };
    arr.push(data);

                return {
                    type: ADD_DATA_COMPARE,
                    payload: arr
                };

};

export const sortingCompareArr = (sortingArr) => {
    return {
        type: SORTING_ARR_COMPARE,
        payload: sortingArr
    };
};

export const clearCompareArr = () => {
    return {
        type: CLEAR_ARR_COMPARE,
        payload: []
    };
};

export const deleteDataCompareArr = (row, arrOld) => {

    console.log('deleteDataCompareArr ', row)
    let arr = arrOld.filter(obj => obj.uid !== row.uid);

    return {
        type: DELETE_DATA_COMPARE,
        payload: arr
    };
}