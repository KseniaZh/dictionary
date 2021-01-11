import React, { useEffect} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import ConsoleButton from '../../components/ConsoleButton/ConsoleButton';
import TableList from '../../components/Table/TableListEltypeClass';
import HeaderDictionary from '../../components/Header/HeaderDictionary';
import ContextMenuWindow from '../../components/ContextMenuWindow/ContextMenuWindow';
import AwaitLoading from '../../UserInterface/AwaitLoading/AwaitLoading';

import {
        startGetRequestServerEltypeClass,
        saveDataStore,
        saveTypeRequest,
        saveNameWindow
 } from '../../store/EltypeClass/actions/actionEltypeClass';

import {
        changeNumberList,
        getDataPageRowTable
} from '../../store/EltypeClass/actions/actionsFlagsEltypeClass';

import { addDescription } from "../../store/Description/actionsDescription";

import { changeAdressOpenTable } from '../../store/EltypeClass/actions/actionsLinksEltypeClass';

import { addDataCompareArr } from '../../store/EltypeClass/actions/actionsCompareEltypeClass';

import withContextMenuWindow from '../../hoc/withContextMenuWindow';


function EltypeClass(props) {

    
    const dispatch = useDispatch();

    const stateLoading = useSelector(state => state.stateFlagsEltypeClass.loading);

    const stateTable = useSelector(state => state.stateTableEltypeClass); //ВСЯ база

    const dataTable = useSelector(state => state.stateFlagsEltypeClass.dataListTable); // отображаемый лист
  
    const countRow = useSelector(state => state.stateFlagsEltypeClass.countRowTable); // количество строк на отображаемой странице

    const numberList = useSelector(state => state.stateFlagsEltypeClass.numberList); //номер отображаемого листа

    const visibleNameColumns = useSelector(state => state.createDataEltypeClass.nameСolumnsTableList); // наименования ключей для заполнения колонок в таблице

    const searchKey = useSelector(state => state.createDataEltypeClass.searchKey); // ключ для типа поиска в окошке в шапке таблицы

    const typeDataColumns = useSelector(state => state.createDataEltypeClass.typeData); // тип данных значений, заполняющих колонки

    const focusData = useSelector(state => state.createDataEltypeClass.stateData); // фокус. запомнить данные выбранной строки

    const compareArr = useSelector(state => state.compareDataEltypeClass); // массив строк, избранных для сравнения

    const links = useSelector(state => state.stateLinksEltypeClass); //список ссылок для переходов между окнами

    const flagEmployDescription = useSelector(state => state.stateFlagsAll.employDescriptionAll) // разрешен ли пользователем показ подсказок

    const arrDescription = useSelector(state => state.stateDescription); // массив подсказок из store (пока без кнопок консоли, заполнится после рединга)

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const focusNull = () => {

        dispatch(saveDataStore({
                                uid: "",
                                name: "",
                                isDeleted: false,
                                isTemplate: false
                            }));
    }

    const hendlerOpenWindow = (nameWindow, typeRequest) => {
        dispatch(saveTypeRequest(typeRequest));
        dispatch(saveNameWindow(nameWindow));
    }


    const hendlerAddCompareData = () => {
        dispatch(addDataCompareArr(focusData, compareArr));
    }

    const hendlerOpenCompareWindow = () => {
        dispatch(addDataCompareArr(focusData, compareArr)); //добавить выделенную строку в сравнение
        focusNull();
        dispatch(changeAdressOpenTable(links.linkCompare));
    }

    const hendlerSearchBase = (event) => {
        event.preventDefault();
        if (event.target.value === '') { return }; //если пусто, выходим

        let num; // номер выбранного объекта в массиве
    
        stateTable.map((obj, index) => {

            if (obj.name === event.target.value) {
                num = index + 1;
                dispatch(saveDataStore(obj)); // сохранить фокус в хранилище
            }
        });
            //поиск номера страницы
            let i = Number(countRow);
            let numList = 1;
            if (num === undefined) { return }; //если пусто, выходим

            while (i < num) {
                i = i + Number(countRow);
                numList++;
        }

        dispatch(changeNumberList(numList)); //сохраняем номер
        dispatch(getDataPageRowTable(stateTable, countRow, numList));// загружаем выбранный лист
    }


    const hendlerClearSearchInput = event => {

        const SearchBaseName = document.getElementById('SearchBaseName');
        if (event.target.tagName !== "INPUT") {
             SearchBaseName.value = '';
         }
    }


    const stateConsoleButton = [
        {
            text: "Обновить",
            name: 'update',
            icon: "fa fa-download fa-lg",
            onclick: () => { dispatch(startGetRequestServerEltypeClass()) },
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
            onclick: () => hendlerAddCompareData(),
            link: links.linkBase
        }
    ];  

    const haveDescription = (dataStateConsoleButton) => {
        //добавляем подсказки на кнопки консоли
        if (flagEmployDescription === true) {
            let aboutDescription = {};
            dataStateConsoleButton.map((obj) => {
                aboutDescription[obj.name] = [obj.text];
            });
            dispatch(addDescription(aboutDescription, arrDescription));
        };
    }

    //логика добавления контекстного меню через hoc
    const TableListWithContextMenu = withContextMenuWindow(TableList, ContextMenuWindow, stateConsoleButton, "ContextMenuWindow");


 useEffect(() => {
     dispatch(startGetRequestServerEltypeClass());

     document.addEventListener('click', hendlerClearSearchInput);

     haveDescription(stateConsoleButton);

     console.log("EC 1 ", stateConsoleButton)

     return () => {
         document.removeEventListener('click', hendlerClearSearchInput);
         console.log("EC 2 ", stateConsoleButton)
     }
    }, [])


    return (
        <div className={stateStylesAll[staleSelect].dataBaseContainer}>
 
            <div className={stateStylesAll[staleSelect].dataBaseHeaderContainer}>
                    <ConsoleButton
                            classnameWrapper={stateStylesAll[staleSelect].dataBaseHeaderConsole}
                            classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                    stateConsoleButton={stateConsoleButton}
                            tabindex="-1"
                            />

                    <HeaderDictionary
                            classname={stateStylesAll[staleSelect].dataBaseHeaderHeader}
                            nameHeader="Классы для Типов связей и Типов сущностей"
                            stateTable={stateTable}
                            searchKey={searchKey}
                            onchangeSearch={(event) => hendlerSearchBase(event)}

                        />
                </div>
            {
                stateLoading ?
                    <AwaitLoading
                        classname={stateStylesAll[staleSelect].loading}
                    />
                    : <TableListWithContextMenu      
                                classname={stateStylesAll[staleSelect].dataBaseTableContainer}
                                classnameConsoleCountRow={stateStylesAll[staleSelect].consoleCountRow}
                                classnameButtonConsoleCountPow={stateStylesAll[staleSelect].personalizeButton}
                                classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                                colorRowTableBackground={stateStylesAll[staleSelect].rowTableBackground}
                                colorFocusRowBackground={stateStylesAll[staleSelect].focusRowBackground}

                                stateTable={stateTable}
                                dataTable={dataTable}
                                visibleNameColumns={visibleNameColumns}
                                typeDataColumns={typeDataColumns}

                                func={focusNull}

                                CountRow={countRow}
                                focusData={focusData}
                                numberActivList={numberList}
                        /> 
                }

        </div>
    )

}

export default connect()(EltypeClass)


