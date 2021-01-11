import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import Basis from '../Basis/Basis';

import { start_ViewType_GET_RequestServer } from '../../store/ViewType/actions/actionViewType';
import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    saveTypeRequest,
    saveNameWindow
} from '../../store/ViewType/actions/actionEditWindowViewType';
import {
    deleteDataCompareArr,
    addDataCompareArr
} from '../../store/ViewType/actions/actionsCompareViewType';
import { changeFlagOpenCompareWindow } from '../../store/ViewType/actions/actionsFlagsViewType';
import { changeAdressOpenTable } from '../../store/ViewType/actions/actionsLinksViewType';



function ViewType(props) {
    
    const dispatch = useDispatch();

    const visibleNameСolumns = useSelector(state => state.stateInputEditWindowViewType.nameСolumnsTableList); // наименования ключей для заполнения колонок в таблице

    const searchСolumnsName = useSelector(state => state.stateInputEditWindowViewType.searchСolumnsName); // объект с разрешением отображения поиска в колонках в таблице

    const sortСolumns = useSelector(state => state.stateInputEditWindowViewType.sortСolumns); // объект с разрешением отображения сортировки в колонках в таблице

    const searchKey = useSelector(state => state.stateInputEditWindowViewType.searchKey); // ключ для типа поиска в окошке в шапке таблицы

    const typeDataColumns = useSelector(state => state.stateInputEditWindowViewType.typeData); // тип данных значений, заполняющих колонки

    const focusData = useSelector(state => state.focusData); // фокус. запомнить данные выбранной строки

    const compareArr = useSelector(state => state.stateCompareViewType); // массив строк, избранных для сравнения

    const links = useSelector(state => state.stateLinksViewType); //список ссылок для переходов между окнами

    const flagOpenCompareWindow = useSelector(state => state.stateFlagsViewType.flagOpenCompareWindow); // флаг открытия таблицы сравнения

    const login = useSelector(state => state.stateAuthorization.user.login); // определение логина пользователя

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const classRowTable = stateStylesAll[staleSelect].viewTypeRowTable;

    //переменные и функции для передачи в Basis

    const funcStartGetRequestServer = () => dispatch(start_ViewType_GET_RequestServer());

    const compareArrUid = compareArr.map(obj => obj.uid);

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
    const stateButtonsAdmin = [
        {
            text: "Обновить",
            name: 'update',
            icon: "fa fa-download fa-lg",
            onclick: funcStartGetRequestServer,
            link: links.linkBase
        },
        {
            text: "Внести изменения",
            name: 'edit',
            icon: "fa fa-pencil-square-o fa-lg",
            onclick: () => hendlerOpenWindow("Внести изменения", "put"),
            link: links.linkEditWindow
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
    const stateButtonsUsers = [
        {
            text: "Обновить",
            name: 'update',
            icon: "fa fa-download fa-lg",
            onclick: funcStartGetRequestServer,
            link: links.linkBase
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

    const stateConsoleButton = () => {
        if (login === "administrator") {
            return stateButtonsAdmin
        } else {
            return stateButtonsUsers
        };
    };

       

    return (

        <Basis
            funcStartGetRequestServer={funcStartGetRequestServer}
            stateConsoleButton={stateConsoleButton()}
            focusNull={focusNull}
            hendlerButtonRowClickDeleteCompareData={hendlerButtonRowClickDeleteCompareData}
            visibleNameСolumns={visibleNameСolumns}
            searchСolumnsName={searchСolumnsName}
            sortСolumns={sortСolumns}
            searchKey={searchKey}
            typeDataColumns={typeDataColumns}
            flagOpenCompareWindow={flagOpenCompareWindow}
            nameHeader="Типы данных"
            onclickButtonRowClickAddCompareData={hendlerButtonRowClickAddCompareData}
            compareArrUid={compareArrUid}
            classRowTable={classRowTable}
        />
    )
}

export default connect()(ViewType)