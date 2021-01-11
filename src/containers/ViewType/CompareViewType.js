import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import BasisCompare from '../Basis/BasisCompare';

import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    saveTypeRequest,
    saveNameWindow
} from '../../store/ViewType/actions/actionEditWindowViewType';
import { changeAdressOpenTable } from '../../store/ViewType/actions/actionsLinksViewType';
import {
    clearCompareArr,
    deleteDataCompareArr
} from '../../store/ViewType/actions/actionsCompareViewType';
import { changeFlagOpenCompareWindow } from '../../store/ViewType/actions/actionsFlagsViewType';



function CompareViewType(props) {


    const dispatch = useDispatch();

    const compareArr = useSelector(state => state.stateCompareViewType); // массив строк, избранных для сравнения

    const visibleNameСolumns = useSelector(state => state.stateInputEditWindowViewType.nameСolumnsTableList); // наименования ключей для заполнения колонок в таблице

    const typeDataColumns = useSelector(state => state.stateInputEditWindowViewType.typeData); // тип данных значений, заполняющих колонки

    const sortСolumns = useSelector(state => state.stateInputEditWindowViewType.sortСolumns); // объект с разрешением отображения сортировки в колонках в таблице

    const focusData = useSelector(state => state.focusData); // фокус. запомнить данные выбранной строки

    const links = useSelector(state => state.stateLinksViewType); //список ссылок для переходов между окнами

    const flagOpenCompareWindow = useSelector(state => state.stateFlagsViewType.flagOpenCompareWindow); // флаг открытия таблицы сравнения

    const login = useSelector(state => state.stateAuthorization.user.login); // определение логина пользователя

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const classRowTable = stateStylesAll[staleSelect].viewTypeRowTable;

    const focusNull = () => {
        dispatch(saveDataStore({
            "uid": "",
            "name": "",
            "comment": "",
            "classViewProperty": "",
            "dbTable": ""
        }));
    }

    const hendlerOpenWindow = (nameWindow, typeRequest) => {
        dispatch(saveTypeRequest(typeRequest));
        dispatch(saveNameWindow(nameWindow));
    }

    const hendlerClearCompareArr = () => {
        dispatch(clearCompareArr());
        dispatch(changeFlagOpenCompareWindow(false));
        // изменяем ссылку перенаправления на активную таблицу для закрытия вспомогательных окон:
        dispatch(changeAdressOpenTable(links.linkBase));
    }
    
    const hendlerDeleteContext = () => {
        dispatch(deleteDataCompareArr(focusData, compareArr)); // удалить из массива сравнений
        //удаляем из списка сравнений и поэтому обнуляем хранение фокуса:
        focusNull();
    }
    const hendlerButtonRowClickDeleteCompareData = (data) => {
        if ([data].uid === '' || [data] === null || [data] === undefined) {
            return
        };
        dispatch(deleteDataCompareArr(data, compareArr));
    }

    const hendlerCloseWindow = () => {
            dispatch(changeFlagOpenCompareWindow(false));
            //закрываем окно и поэтому обнуляем хранение фокуса:
            focusNull();
            // изменяем ссылку перенаправления на активную таблицу для закрытия вспомогательных окон:
            dispatch(changeAdressOpenTable(links.linkBase));
    }


    const stateButtonsAdmin = [

        {
            text: "Внести изменения",
            name: 'edit',
            icon: "fa fa-pencil-square-o fa-lg",
            onclick: () => hendlerOpenWindow("Внести изменения", "put"),
            link: links.linkEditWindow
        },
        {
            text: "Убрать из сравнения",
            name: 'deleteList',
            icon: "fa fa-times-circle",
            onclick: hendlerDeleteContext,
            data: focusData,
            link: links.linkCompare
        },
        {
            text: "Очистить список сравнений",
            name: 'clear',
            icon: "fa fa-minus-square-o",
            onclick: hendlerClearCompareArr,
            link: links.linkBase
        },
        {
            text: "Назад",
            name: 'back',
            icon: "fa fa-share",
            onclick: hendlerCloseWindow,
            link: links.linkBase
        }
    ];
    const stateButtonsUsers = [

        {
            text: "Убрать из сравнения",
            name: 'deleteList',
            icon: "fa fa-times-circle",
            onclick: hendlerDeleteContext,
            data: focusData,
            link: links.linkCompare
        },
        {
            text: "Очистить список сравнений",
            name: 'clear',
            icon: "fa fa-minus-square-o",
            onclick: hendlerClearCompareArr,
            link: links.linkBase
        },
        {
            text: "Назад",
            name: 'back',
            icon: "fa fa-share",
            onclick: hendlerCloseWindow,
            link: links.linkBase
        }
    ];

    const stateConsoleButton = () => {
        if (login === "administrator") {
            return stateButtonsAdmin
        } else {
            return stateButtonsUsers
        };
    };


    return (
        <BasisCompare
            compareArr={compareArr}
            stateConsoleButton={stateConsoleButton()}
            flagOpenCompareWindow={flagOpenCompareWindow}
            sortСolumns={sortСolumns}
            focusNull={focusNull}
            hendlerButtonRowClickDeleteCompareData={hendlerButtonRowClickDeleteCompareData}
            hendlerCloseWindow={hendlerCloseWindow}
            linkBack={links.linkBase}
            nameBase="Типы данных"
            nameHeader="Сравнить избранное"
            classRowTable={classRowTable}
            visibleNameСolumns={visibleNameСolumns}
            typeDataColumns={typeDataColumns}
        />
    )
}

export default connect()(CompareViewType)