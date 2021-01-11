import {
    SHOW_LOADER,
    COUNTER_PAGES_TABLE,
    COUNT_ROW_TABLE,
    GET_DATA_LIST_TABLE,
    CHANGE_NUMBER_LIST_TABLE,
    SORTING_LIST_TABLE,
    CHANGE_ACTIV_ARR_NUMBER_PAGES,
    FLAG_CONTEXT_MENU,
    FLAG_BUTTON_OPEN_INPUT
} from "../types";

export const loadingShow = (data) => {

    return {
        type: SHOW_LOADER,
        payload: data
    }
}

export const changeDataOpenContextMenu = (data) => {

    return {
        type: FLAG_CONTEXT_MENU,
        payload: data
    }
}

export const changeDataButtonOpenInput = (data) => {

    return {
        type: FLAG_BUTTON_OPEN_INPUT,
        payload: data
    }
}

export const getCounterPagesTable = (dataFromServer, countRowTable) => {
    // общее количество листов в таблице

    if (dataFromServer.length <= countRowTable) {

        return {
            type: COUNTER_PAGES_TABLE,
            payload: 1
        };
    };

    let sumRow = dataFromServer.length;
    let i = 0;

    while (sumRow >= countRowTable ) {
        sumRow = sumRow - countRowTable;
        i++;
    }


  if (sumRow <= 0) {
        return {
            type: COUNTER_PAGES_TABLE,
            payload: i
        }
    } else {
        i++;
        return {
            type: COUNTER_PAGES_TABLE,
            payload: i
        }
    }
}


export const changeCountRowTable = (data) => {
//  количество строк на странице
    return {
        type: COUNT_ROW_TABLE,
        payload: data
    }
}

export const getDataPageRowTable = (dataFromServer, countRow, num) => {
//данные для загрузки выбранного листа

    let activeRowMin = countRow * (num - 1) + 1;
    let activeRowMax = countRow * num;

    let dataList = [];

    dataFromServer.map((obj, index) => {
        let number = index + 1;
        if (number >= activeRowMin && number <= activeRowMax) {
            dataList.push(obj);
        };
    })
    console.log('после выборки строк сохраняем данные для загрузки выбранного листа')
    return {
        type: GET_DATA_LIST_TABLE,
        payload: dataList
    }
}

export const changeNumberList = (number) => {
//номер выбранного листа

    return {
        type: CHANGE_NUMBER_LIST_TABLE,
        payload: number
    }
}

export const sortingList = (data) => {
//сотрируем только открытый лист, база остается несортированной

    return {
        type: SORTING_LIST_TABLE,
        payload: data
    }
}

export const changeActivArrNumberPagesFooterTable = (numberClickButton, countRowTable, oldArr, dataFromServer) => {


    // считаем количество листов в таблице
    let counterPages = 0;

    if (dataFromServer.length <= countRowTable) {
        counterPages = 1;
    } else {

            let sumRow = dataFromServer.length;
            let i = 0;

            while (sumRow >= countRowTable) {
                sumRow = sumRow - countRowTable;
                i++;
            }

            if (sumRow <= 0) {
                counterPages = i;
            } else {
                i++;
                counterPages = i;
            }
    };
    

    //считаем массив
    let activArrNumberPages = [];

   if (numberClickButton === 1) {
       activArrNumberPages = [1, 2, 3];

            if (counterPages === 1) {
                activArrNumberPages = [1];
            } else if (counterPages === 2) {
                activArrNumberPages = [1, 2];
            } else if (counterPages === 3) {
                activArrNumberPages = [1, 2, 3];
            };

    } else if (numberClickButton === counterPages) {
        activArrNumberPages = [counterPages - 2, counterPages - 1, counterPages];
    } else if (numberClickButton === 'left') {
        activArrNumberPages = oldArr.map(num => num - 1);
    } else if (numberClickButton === 'right') {
        activArrNumberPages = oldArr.map(num => num + 1);
    } else {
        let fullArrNumberPages = [];
        for (let i = 0; i < counterPages; i++) {
            fullArrNumberPages[i] = i + 1;
        };
        activArrNumberPages = fullArrNumberPages.filter(num => (num === numberClickButton || num === (numberClickButton - 1) || num === (numberClickButton + 1)));
    };

    if (counterPages === 1) {
        activArrNumberPages = [1];
    } else if (counterPages === 2) {
        activArrNumberPages = [1, 2];
    } else if (counterPages === 3) {
        activArrNumberPages = [1, 2, 3];
    };

    return {
        type: CHANGE_ACTIV_ARR_NUMBER_PAGES,
        payload: activArrNumberPages
    }
}