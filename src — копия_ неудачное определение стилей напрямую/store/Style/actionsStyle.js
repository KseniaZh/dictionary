import {
    CHANGE_STYLE_SELECT
} from "./types";

export const changeStyleSelect = (data) => {
    //����� ����� ���������� ���������, ������������ � ��������������
    return {
        type: CHANGE_STYLE_SELECT,
        payload: data
    }
}

