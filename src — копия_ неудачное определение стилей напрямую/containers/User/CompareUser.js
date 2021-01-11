import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import BasisCompare from '../Basis/BasisCompare';

import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    saveTypeRequest,
    saveNameWindow
} from '../../store/User/actions/actionEditWindowUser';
import { changeAdressOpenTable } from '../../store/User/actions/actionsLinksUser';
import {
    clearCompareArr,
    deleteDataCompareArr
} from '../../store/User/actions/actionsCompareUser';
import { changeFlagOpenCompareWindow } from '../../store/User/actions/actionsFlagsUser';



function CompareUser(props) {


    const dispatch = useDispatch();

    const compareArr = useSelector(state => state.stateCompareUser); // массив строк, избранных для сравнения

    const focusData = useSelector(state => state.focusData); // фокус. запомнить данные выбранной строки

    const links = useSelector(state => state.stateLinksUser); //список ссылок для переходов между окнами

    const flagOpenCompareWindow = useSelector(state => state.stateFlagsUser.flagOpenCompareWindow); // флаг открытия таблицы сравнения



    const focusNull = () => {
        dispatch(saveDataStore({
            "uid": "",
            "login": "",
            "name": "",
            "password": "",
            "isDeleted": false,
            "isSuperUser": false,
            "docInfo": [],
            "projectAuthorU": [],
            "projectUpdaterU": [],
            "userProjects": []
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

    const hendlerCloseWindow = () => {
            dispatch(changeFlagOpenCompareWindow(false));
            //закрываем окно и поэтому обнуляем хранение фокуса:
            focusNull();
            // изменяем ссылку перенаправления на активную таблицу для закрытия вспомогательных окон:
            dispatch(changeAdressOpenTable(links.linkBase));
    }


    const stateConsoleButton = [

        {
            text: "Внести изменения",
            name: 'edit',
            icon: "fa fa-pencil-square-o fa-lg",
            onclick: () => hendlerOpenWindow("Внести изменения", "put"),
            link: links.linkEditWindow
        },
        {
            text: "Удалить из базы данных",
            name: 'delete',
            icon: "fa fa-times fa-lg",
            onclick: () => { },
            link: links.linkWindowConfirmDeleting
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


    return (
        <BasisCompare
            compareArr={compareArr}
            stateConsoleButton={stateConsoleButton}
            flagOpenCompareWindow={flagOpenCompareWindow}
            focusNull={focusNull}
            hendlerDeleteContext={hendlerDeleteContext}
            hendlerCloseWindow={hendlerCloseWindow}
            linkBack={links.linkBase}
            nameBase="Классы для Типов связей и Типов сущностей"
            nameHeader="Сравнить избранное"
        />
    )
}

export default connect()(CompareUser)