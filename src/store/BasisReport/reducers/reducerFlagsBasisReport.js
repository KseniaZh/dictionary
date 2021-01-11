import {
    SHOW_LOADER,
    COUNTER_PAGES_TABLE,
    COUNT_ROW_TABLE,
    GET_DATA_LIST_TABLE,
    CHANGE_NUMBER_LIST_TABLE,
    SORTING_LIST_TABLE,
    CHANGE_ACTIV_ARR_NUMBER_PAGES,
    FLAG_CONTEXT_MENU,
    FLAG_BUTTON_OPEN_INPUT,
    FLAG_BUTTON_OPEN_FILTER
                    } from "../types";

const initialState = {
                loading: false,
                dataContextMenu: {
                                    flag: false,
                                    clickClientX: '',
                                    clickClientY: ''
                                },
                counterPagesTable: 0, // количество листов в таблице всего
                countRowTable: 10, // количество строк на странице
                dataListTable: [{}], //данные для загрузки выбранного листа
                numberList: 1, //номер выбранного листа
                arrNumbersRowListTable: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //нумерация строк в окне таблицы
                activArrNumberPagesFooterTable: [1, 2, 3], //предлагаемый на выбор массив из 3х кнопок в консоли переключения листов таблицы
                dataButtonOpenInput: {
                    flag: false,
                    icon: "fa fa-pencil",
                    name: "OpenInputChangeCountRow"
                },
                flagOpenFilter: false
            };


const stateFlagsBasisReport = (state = initialState, action) => {

    switch (action.type) {

        case SHOW_LOADER:
            return {
                ...state,
                loading: action.payload
            }
        case FLAG_CONTEXT_MENU:
            return {
                ...state,
                dataContextMenu: action.payload
            }
        case COUNTER_PAGES_TABLE:
            return {
                ...state,
                counterPagesTable: action.payload
            }
        case COUNT_ROW_TABLE:
            return {
                ...state,
                countRowTable: action.payload
            }
        case CHANGE_ACTIV_ARR_NUMBER_PAGES:
            return {
                ...state,
                activArrNumberPagesFooterTable: action.payload
            }
        case GET_DATA_LIST_TABLE:
            return {
                ...state,
                dataListTable: action.payload
            }
        case CHANGE_NUMBER_LIST_TABLE:
            return {
                ...state,
                numberList: action.payload
            }
        case SORTING_LIST_TABLE:
            return {
                ...state,
                dataListTable: action.payload
            }
        case FLAG_BUTTON_OPEN_INPUT:
            return {
                ...state,
                dataButtonOpenInput: action.payload
            }
        case FLAG_BUTTON_OPEN_FILTER:
            return {
                ...state,
                flagOpenFilter: action.payload
            }


        default:
            return state;
    }
}
export default stateFlagsBasisReport