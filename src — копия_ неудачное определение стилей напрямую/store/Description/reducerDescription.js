﻿import { ADD_DESCRIPTION } from "./types";

const initialState = {
                        Personalize: {
                            h: "Персонализация",
                            p1: "Hастройки приложения",
                            span0: "fa fa-cogs",
                            ul1: "Возможности :",
                            l11: "выбор цветового решения",
                            span11: "fa fa-paint-brush",
                            l12: "всплывающие подсказки",
                            span12: "fa fa-commenting-o",
                            l13: "смена действующего пароля",
                            span13: "fa fa-pencil-square-o"
                        },
                        Home: {
                            h: "Домашняя страница",
                            p1: "Cвязи и схемы",
                            span0: "fa fa-sitemap fa-lg"
                        },
                        User: {
                            h: 'Данные пользователей',
                            p1: "право доступа administrator",
                            span0: "fa fa-table fa-lg",
                            ul1: "Возможности :",
                            l11: "просмотр",
                            span11: "fa fa-check-square-o",
                            l12: "сортировкa",
                            span12: "fa fa-check-square-o",
                            l13: "поиск данных",
                            span13: "fa fa-check-square-o",
                            ul2: "Коррекция :",
                            l21: "внести новые данные",
                            span21: "fa fa-check-square-o",
                            l22: "изменить",
                            span22: "fa fa-check-square-o",
                            l23: "удалить",
                            span23: "fa fa-check-square-o"

                        },
                        EltypeClass: {
                            h: 'Данные EltypeClass',
                            p1: "Табличное отображение",
                            span0: "fa fa-table fa-lg",
                            ul1: "Возможности :",
                            l11: "просмотр и сравнение",
                            span11: "fa fa-check-square-o",
                            l12: "сортировкa",
                            span12: "fa fa-check-square-o",
                            l13: "поиск данных",
                            span13: "fa fa-check-square-o",
                            ul2: "Коррекция :",
                            l21: "внести новые данные",
                            span21: "fa fa-check-square-o",
                            l22: "изменить",
                            span22: "fa fa-check-square-o",
                            l23: "удалить",
                            span23: "fa fa-check-square-o"

                        },
                        "OpenInputChangeCountRow": "изменить",
                        "SaveChangeCountRow": "сохранить",
                        "SortBase": "cортировать список",
                        "SortList": "cортировать лист",
                        "DeleteRow": "удалить из сравнения",
                        "SearchTypeSelect": "выбрать для поиска"

            };


const stateDescription = (state = initialState, action) => {

    switch (action.type) {

        case ADD_DESCRIPTION:
            return action.payload;

        default:
            return state;
    }
}
export default stateDescription