import {
    ADD_DATA_COMPARE,
    CLEAR_ARR_COMPARE,
    DELETE_DATA_COMPARE,
    SORTING_ARR_COMPARE

} from "../types";

export const addDataCompareArr = (data, arrOld) => {
    let arr = arrOld.filter(obj => obj.uid !== data.uid);
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

    let arr = arrOld.filter(obj => obj.uid !== row.uid);

    console.log('deleteDataCompareArr => ', arr)

    return {
        type: DELETE_DATA_COMPARE,
        payload: arr
    };
}