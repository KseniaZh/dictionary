import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import Basis from '../Basis/Basis';

import { startUser_GET_RequestServer } from '../../store/User/actions/actionUser';
import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    saveTypeRequest,
    saveNameWindow
} from '../../store/User/actions/actionEditWindowUser';
import {
    deleteDataCompareArr
} from '../../store/User/actions/actionsCompareUser';
import { changeFlagOpenCompareWindow } from '../../store/User/actions/actionsFlagsUser';
import { changeAdressOpenTable } from '../../store/User/actions/actionsLinksUser';
import { addDataCompareArr } from '../../store/User/actions/actionsCompareUser';



function User(props) {
    
    const dispatch = useDispatch();

    const visibleNameСolumns = useSelector(state => state.stateInputEditWindowUser.nameСolumnsTableList); // наименования ключей для заполнения колонок в таблице

    const searchСolumnsName = useSelector(state => state.stateInputEditWindowUser.searchСolumnsName); // объект с разрешением отображения поиска в колонках в таблице

    const sortСolumns = useSelector(state => state.stateInputEditWindowUser.sortСolumns); // объект с разрешением отображения сортировки в колонках в таблице

    const searchKey = useSelector(state => state.stateInputEditWindowUser.searchKey); // ключ для типа поиска в окошке в шапке таблицы

    const typeDataColumns = useSelector(state => state.stateInputEditWindowUser.typeData); // тип данных значений, заполняющих колонки

    const focusData = useSelector(state => state.focusData); // фокус. запомнить данные выбранной строки

    const compareArr = useSelector(state => state.stateCompareUser); // массив строк, избранных для сравнения

    const links = useSelector(state => state.stateLinksUser); //список ссылок для переходов между окнами

    const flagOpenCompareWindow = useSelector(state => state.stateFlagsUser.flagOpenCompareWindow); // флаг открытия таблицы сравнения

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const classRowTable = stateStylesAll[staleSelect].userRowTable;

    //переменные и функции для передачи в Basis

    const funcStartGetRequestServer = () => dispatch(startUser_GET_RequestServer());

    const compareArrUid = compareArr.map(obj => obj.uid);

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
        if (typeRequest === "post") {
            focusNull();
        }
    }

    const hendlerAddCompareData = () => {
        if (focusData.uid === '' || focusData.uid === null || focusData.uid === undefined) {
            return
        };
        dispatch(addDataCompareArr(focusData, compareArr));
    }
    const hendlerButtonRowClickAddCompareData = (data) => {
        if ([data].uid === '' || [data] === null || [data] === undefined) {
            return
        };
        dispatch(addDataCompareArr(data, compareArr));
    }

    const hendlerOpenCompareWindow = () => {
        dispatch(changeFlagOpenCompareWindow(true)); 
        focusNull();
        dispatch(changeAdressOpenTable(links.linkCompare)); 
    }

    const hendlerButtonRowClickDeleteCompareData = (data) => {
        if ([data].uid === '' || [data] === null || [data] === undefined) {
            return
        };
        dispatch(deleteDataCompareArr(data, compareArr));
    }

    const stateConsoleButton = [
        {
            text: "Обновить",
            name: 'update',
            icon: "fa fa-download fa-lg",
            onclick: funcStartGetRequestServer,
            link: links.linkBase
        },
        {
            text: "Добавить новые данные",
            name: 'add',
            icon: "fa fa-plus fa-lg",
            onclick: () => hendlerOpenWindow("Новые данные", "post"),
            link: links.linkEditWindow
        },
        {
            text: "Внести изменения",
            name: 'edit',
            icon: "fa fa-pencil-square-o fa-lg",
            onclick: () => hendlerOpenWindow("Внести изменения", "put"),
            link: links.linkEditWindow
        },
        {
            text: "Удалить",
            name: 'delete',
            icon: "fa fa-times fa-lg",
            onclick: () => { },
            link: links.linkWindowConfirmDeleting
        },
        {
            text: "Сравнить",
            name: 'compare',
            icon: "fa fa-balance-scale",
            onclick: hendlerOpenCompareWindow,
            link: links.linkCompare
        },
        {
            text: "Добавить к сравнению",
            name: 'addCompare',
            icon: "fa fa-filter fa-lg",
            onclick: hendlerAddCompareData,
            link: links.linkBase
        }
    ];  

    return (

        <Basis
            funcStartGetRequestServer={funcStartGetRequestServer}
            stateConsoleButton={stateConsoleButton}
            focusNull={focusNull}
            hendlerButtonRowClickDeleteCompareData={hendlerButtonRowClickDeleteCompareData}
            visibleNameСolumns={visibleNameСolumns}
            searchСolumnsName={searchСolumnsName}
            sortСolumns={sortСolumns}
            searchKey={searchKey}
            typeDataColumns={typeDataColumns}
            flagOpenCompareWindow={flagOpenCompareWindow}
            nameHeader="Список пользователей"
            onclickButtonRowClickAddCompareData={hendlerButtonRowClickAddCompareData}
            compareArrUid={compareArrUid}
            classRowTable={classRowTable}
        />
    )
}

export default connect()(User)