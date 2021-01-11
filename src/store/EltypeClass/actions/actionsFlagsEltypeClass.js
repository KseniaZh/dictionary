import {
    FLAG_OPEN_COMPARE_WINDOW

} from "../types";


export const changeFlagOpenCompareWindow = (flag) => {
    return {
        type: FLAG_OPEN_COMPARE_WINDOW,
        payload: flag
    };
};

