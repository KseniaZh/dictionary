import {
    CHANGE_STYLE_SELECT
} from "./types";

export const changeStyleSelect = (data) => {
    //выбор стиля оформления программы, производится в персонализации
    return {
        type: CHANGE_STYLE_SELECT,
        payload: data
    }
}

