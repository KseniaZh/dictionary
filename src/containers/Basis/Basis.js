import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import TableList from '../../components/Table/TableList';
import HeaderDictionary from '../../components/Header/HeaderDictionary';
import ContextMenuWindow from '../../components/ContextMenuWindow/ContextMenuWindow';
import AwaitLoading from '../../UserInterface/AwaitLoading/AwaitLoading';

import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    changeNumberList,
    getDataPageRowTable,
    sortingList,
    changeFlagOpenInputFilter,
    changeCountRowTable
} from '../../store/BasisReport/actions/actionsFlagsBasisReport';
import { addDescription } from "../../store/Description/actionsDescription";

import withContextMenuWindow from '../../hoc/withContextMenuWindow';


function Basis(props) {
    
    const dispatch = useDispatch();

    const stateLoading = useSelector(state => state.stateFlagsBasisReport.loading);

    const stateTable = useSelector(state => state.stateBasisReport); //ВСЯ база

    const dataTable = useSelector(state => state.stateFlagsBasisReport.dataListTable); // отображаемый лист

    const focusData = useSelector(state => state.focusData); // фокус. запомнить данные выбранной строки
  
    const countRow = useSelector(state => state.stateFlagsBasisReport.countRowTable); // количество строк на отображаемой странице

    const numberList = useSelector(state => state.stateFlagsBasisReport.numberList); //номер отображаемого листа

    const flagOpenFilter = useSelector(state => state.stateFlagsBasisReport.flagOpenFilter); //открыть окно фильтра данных таблицы

    const flagEmployDescription = useSelector(state => state.stateFlagsAll.employDescriptionAll) // разрешен ли пользователем показ подсказок

    const arrDescription = useSelector(state => state.stateDescription); // массив подсказок из store (пока без кнопок консоли, заполнится после рединга

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);


    const hendlerSearchBase = (event) => {
        event.preventDefault();
        if (event.target.value === '') { return }; //если пусто, выходим

        let num; // номер выбранного объекта в массиве
    
        stateTable.map((obj, index) => {

            if (obj[props.searchKey] === event.target.value) {
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

    const [valueFilterBase, setValueFilterBase] = useState('');

    const hendlerOpenFilter = () => {
        dispatch(changeFlagOpenInputFilter(true));
        dispatch(changeCountRowTable(stateTable.length));
        dispatch(sortingList(stateTable));
    };

    const hendlerCloseFilter = () => {
        dispatch(changeFlagOpenInputFilter(false));
        dispatch(changeCountRowTable(10));
        props.funcStartGetRequestServer();
        setValueFilterBase(''); //обнуляем текст в input
    };

    const hendlerFilterBase = (event) => {
        event.preventDefault();

        setValueFilterBase(event.target.value); //текст в input

        const stateTableFilter = stateTable.filter(obj => {
            let a = obj[props.searchKey].toUpperCase(); // имя из state
            let b = event.target.value.toUpperCase(); // значение input
           return a.indexOf(b) == 0
        })

        dispatch(sortingList(stateTableFilter));
    }

    const hendlerClearSearchInput = event => {
        const SearchBaseName = document.getElementById('SearchBaseName');
        if (event.target.tagName !== "INPUT") {
            SearchBaseName.value = '';
        }
    }

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
    const TableListWithContextMenu = withContextMenuWindow(TableList, ContextMenuWindow, props.stateConsoleButton, stateStylesAll[staleSelect].contextMenuWindow);

    useEffect(() => {

    props.funcStartGetRequestServer();

     document.addEventListener('click', hendlerClearSearchInput);

     haveDescription(props.stateConsoleButton);

     return () => {
         document.removeEventListener('click', hendlerClearSearchInput);
     }
    }, [])

    return (
        <div className={stateStylesAll[staleSelect].dataBaseContainer}>
 
            <HeaderDictionary
                    classnameHeaderConsole={stateStylesAll[staleSelect].dataBaseHeaderConsole}
                    classnameSearchDatalis={stateStylesAll[staleSelect].searchInputDatalisHeaderDataBase}
                    classnameFilter={stateStylesAll[staleSelect].inputFilterHeaderDataBase}
                    classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                    stateConsoleButton={props.stateConsoleButton}
                    onchangeSearch={(event) => hendlerSearchBase(event)}
                    onchangeFilterBase={hendlerFilterBase}
                    onclickOpenFilter={hendlerOpenFilter}
                    onclickCloseFilter={hendlerCloseFilter}
                    valueFilterBase={valueFilterBase}
                    nameHeader={props.nameHeader}
                    stateTable={stateTable}
                    dataTable={dataTable}

                    searchKey={props.searchKey}
                    flagOpenFilter={flagOpenFilter}
                />    
                    
            {
                stateLoading ?
                    <AwaitLoading
                        classname={stateStylesAll[staleSelect].loading}
                    />
                    : <TableListWithContextMenu
                            classnameConsoleCountRow={stateStylesAll[staleSelect].consoleCountRow}
                            classnameButtonConsoleCountPow={stateStylesAll[staleSelect].personalizeButton}
                            classnameRowTable={props.classRowTable}
                            classnameCheckbox={stateStylesAll[staleSelect].beautifulCheckboxTable}
                            classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                            colorRowTableBackground={stateStylesAll[staleSelect].rowTableBackground}
                            colorFocusRowBackground={stateStylesAll[staleSelect].focusRowBackground}

                            stateTable={stateTable}
                            dataTable={dataTable}
                            visibleNameСolumns={props.visibleNameСolumns}
                            searchСolumnsName={props.searchСolumnsName}
                            sortСolumns={props.sortСolumns}
                            typeDataColumns={props.typeDataColumns}
                            flagOpenCompareWindow={props.flagOpenCompareWindow}
                            textFooter="Активирован режим фильтрации данных"
                            flagOpenFilter={flagOpenFilter}
                            compareArrUid={props.compareArrUid}

                            focusNull={props.focusNull}
                            onclickButtonRowClickAddCompareData={props.onclickButtonRowClickAddCompareData}
                            onclickDelete={props.hendlerButtonRowClickDeleteCompareData}

                            CountRow={countRow}
                            focusData={focusData}
                            numberActivList={numberList}
                        /> 
                }
        </div>
    )
}

export default connect()(Basis)