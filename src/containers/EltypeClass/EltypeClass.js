import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import Basis from '../Basis/Basis';

import { start_EltypeClass_GET_RequestServer } from '../../store/EltypeClass/actions/actionEltypeClass';
import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    saveTypeRequest,
    saveNameWindow
} from '../../store/EltypeClass/actions/actionEditWindowEltypeClass';
import {
    deleteDataCompareArr
} from '../../store/EltypeClass/actions/actionsCompareEltypeClass';
import { changeFlagOpenCompareWindow } from '../../store/EltypeClass/actions/actionsFlagsEltypeClass';
import { changeAdressOpenTable } from '../../store/EltypeClass/actions/actionsLinksEltypeClass';
import { addDataCompareArr } from '../../store/EltypeClass/actions/actionsCompareEltypeClass';



function EltypeClass(props) {
    
    const dispatch = useDispatch();

    const visibleNameСolumns = useSelector(state => state.stateInputEditWindowEltypeClass.nameСolumnsTableList); // наименования ключей для заполнения колонок в таблице

    const searchСolumnsName = useSelector(state => state.stateInputEditWindowEltypeClass.searchСolumnsName); // объект с разрешением отображения поиска в колонках в таблице

    const sortСolumns = useSelector(state => state.stateInputEditWindowEltypeClass.sortСolumns); // объект с разрешением отображения сортировки в колонках в таблице

    const searchKey = useSelector(state => state.stateInputEditWindowEltypeClass.searchKey); // ключ для типа поиска в окошке в шапке таблицы

    const typeDataColumns = useSelector(state => state.stateInputEditWindowEltypeClass.typeData); // тип данных значений, заполняющих колонки

    const focusData = useSelector(state => state.focusData); // фокус. запомнить данные выбранной строки

    const compareArr = useSelector(state => state.stateCompareEltypeClass); // массив строк, избранных для сравнения

    const links = useSelector(state => state.stateLinksEltypeClass); //список ссылок для переходов между окнами

    const flagOpenCompareWindow = useSelector(state => state.stateFlagsEltypeClass.flagOpenCompareWindow); // флаг открытия таблицы сравнения

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const classRowTable = stateStylesAll[staleSelect].eltypeClassRowTable;

    //переменные и функции для передачи в Basis

    const funcStartGetRequestServer = () => dispatch(start_EltypeClass_GET_RequestServer());

    const compareArrUid = compareArr.map(obj => obj.uid);

    const focusNull = () => {
        dispatch(saveDataStore({
            "uid": "",
            "name": "",
            "isDeleted": false,
            "isTemplate": false
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
            nameHeader="Классы для Типов связей и Типов сущностей"
            onclickButtonRowClickAddCompareData={hendlerButtonRowClickAddCompareData}
            compareArrUid={compareArrUid}
            classRowTable={classRowTable}
        />
    )
}

export default connect()(EltypeClass)