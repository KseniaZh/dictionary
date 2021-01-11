import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import TableList from '../../components/Table/TableList';
import HeaderDictionary from '../../components/Header/HeaderDictionary';
import ContextMenuWindow from '../../components/ContextMenuWindow/ContextMenuWindow';
import AwaitLoading from '../../UserInterface/AwaitLoading/AwaitLoading';

import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';
import {
    changeNumberList,
    getDataPageRowTable
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
  const TableListWithContextMenu = withContextMenuWindow(TableList, ContextMenuWindow, props.stateConsoleButton, "ContextMenuWindow");

    useEffect(() => {

    props.funcStartGetRequestServer();

     document.addEventListener('click', hendlerClearSearchInput);

     haveDescription(props.stateConsoleButton);

     return () => {
         document.removeEventListener('click', hendlerClearSearchInput);
     }
    }, [])

    return (
        <div className='DataBase__container'>
 
            <HeaderDictionary
                    classnameHeaderContainer="DataBase__header__container"
                    classnameHeader="DataBase__header__header"
                    classnameHeaderConsole="DataBase__header__console"
                    classnameSearchDatalis='searchInputDatalis_HeaderDataBase'
                    classnameDescription='DescriptionButton'
                    stateConsoleButton={props.stateConsoleButton}
                    onchangeSearch={(event) => hendlerSearchBase(event)}
                    nameHeader={props.nameHeader}
                    stateTable={stateTable}
                    searchKey={props.searchKey}
                />    
                    
            {
                stateLoading ?
                    <AwaitLoading
                        classname="Loading"
                    />
                    : <TableListWithContextMenu
                            classname="DataBase__table__container"
                            classnameConsoleCountRow='ConsoleCountRow'
                            classnameButtonConsoleCountPow="PersonalizeButton"
                            classnameRowTable="UserRowTable"
                            classnameCheckbox='beautifulCheckboxTable checkbox'
                            classnameDescription="DescriptionButton"
                            colorRowTableBackground="rowTableBackground"
                            colorFocusRowBackground="focusRowBackground"

                            stateTable={stateTable}
                            dataTable={dataTable}
                            visibleNameСolumns={props.visibleNameСolumns}
                            searchСolumnsName={props.searchСolumnsName}
                            typeDataColumns={props.typeDataColumns}
                            flagOpenCompareWindow={props.flagOpenCompareWindow}

                            focusNull={props.focusNull}

                            CountRow={countRow}
                            focusData={focusData}
                            numberActivList={numberList}
                        /> 
                }
        </div>
    )
}

export default connect()(Basis)