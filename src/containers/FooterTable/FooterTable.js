﻿import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import ConsoleOpenActivList from '../../components/FooterTable/ConsoleOpenActivList';
import CountRowForPage from '../../components/FooterTable/CountRowForPage';

import {
    changeDataButtonOpenInput,
    changeCountRowTable,
    getCounterPagesTable,
    changeNumberList,
    getDataPageRowTable,
    changeActivArrNumberPagesFooterTable
} from '../../store/BasisReport/actions/actionsFlagsBasisReport';


function FooterTable(props) {

    const dispatch = useDispatch();

    const dataButtonOpenInput = useSelector(state => state.stateFlagsBasisReport.dataButtonOpenInput);
    const stateTable = useSelector(state => state.stateBasisReport); //ВСЯ база
    const countRow = useSelector(state => state.stateFlagsBasisReport.countRowTable); // количество строк на отображаемой странице
    const counterPages = useSelector(state => state.stateFlagsBasisReport.counterPagesTable); // количество листов в таблице всего
    const numberList = useSelector(state => state.stateFlagsBasisReport.numberList); //номер отображаемого листа
    const activArrNumberPages = useSelector(state => state.stateFlagsBasisReport.activArrNumberPagesFooterTable); //предлагаемый на выбор массив из 3х кнопок в консоли переключения отображаемых листов таблицы


    const [inputValue, setInputValue] = useState(countRow); // значение в интуре

    const hendlerButtonInputOpen = () => {

        if (dataButtonOpenInput.flag === false) {
            dispatch(changeDataButtonOpenInput({
                flag: true,
                icon: "fa fa-floppy-o",
                name: "SaveChangeCountRow"
            }));
        };
        if (dataButtonOpenInput.flag === true) {
            dispatch(changeDataButtonOpenInput({
                flag: false,
                icon: "fa fa-pencil",
                name: "OpenInputChangeCountRow"
            }));
            dispatch(changeCountRowTable(inputValue)); // количество строк на странице
            dispatch(getCounterPagesTable(stateTable, inputValue)); // количество листов в таблице всего
            dispatch(changeNumberList(1)); // при изменении к-ва строк на странице всегда возвращаемся на страницу №1, если это не надо, убрать эту строку, но может появляться путой лист
            dispatch(getDataPageRowTable(stateTable, inputValue, 1)); // из stateTable выбираем строки для загрузки листа
            dispatch(changeActivArrNumberPagesFooterTable(1, inputValue, activArrNumberPages, stateTable)); //измениям консоль выбора активной страницы в футере
            if (numberList !== 1) {
                props.focusNull();  // переходим на страницу 1, фокус теряется, поэтому в хранилище обнуляем данные focus
            };
        }
    }
    const hendlerChangeInputValue = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    //после выбора страницы приходит ее номер, в хранилище собираем новую страницу, в хранилище сохраняем номер страницы
    const hendlerOpenPagesTable = (num) => {

        dispatch(getDataPageRowTable(stateTable, countRow, num)); // из stateTable выбираем строки для загрузки листа
        dispatch(changeNumberList(num)); // сохраняем номер выбранного листа
        props.focusNull(); // при переходе на другую страницу фокус теряется, поэтому в хранилище обнуляем данные
        dispatch(changeActivArrNumberPagesFooterTable(num, inputValue, activArrNumberPages, stateTable)); //измениям консоль выбора активной страницы в футере
    }

    const hendlerChangeButtonConsole = (num) => {
        dispatch(changeActivArrNumberPagesFooterTable(num, inputValue, activArrNumberPages, stateTable)); //переключение стрелками консоли выбора активной страницы в футере
    }

    return (

        <div className={props.classname}>

            <ConsoleOpenActivList
                func={props.func}
                counterPages={counterPages}
                activArrNumberPages={activArrNumberPages}
                numberActivList={numberList}
                onclickOpenPagesTable={hendlerOpenPagesTable}
                onclickChangeButtonConsole={hendlerChangeButtonConsole}
            />
               
            <CountRowForPage
                func={props.focusNull}
                classname={props.classname}
                classnameDescription={props.classnameDescription}
                CountRow={countRow}
                length={stateTable.length}
                dataButtonOpenInput={dataButtonOpenInput}
                onclickButtonInputOpen={hendlerButtonInputOpen}
                inputValue={inputValue}
                onchangeInputValue={hendlerChangeInputValue}

            />

        </div>
    )
}

export default connect()(FooterTable)