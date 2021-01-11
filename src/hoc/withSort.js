import React from 'react';
import { connect } from "react-redux";

import { sortingTable } from '../store/BasisReport/actions/actionBasisReport';
import {
    getDataPageRowTable,
    sortingList
} from '../store/BasisReport/actions/actionsFlagsBasisReport';
import { sortBase } from '../functions/Sort';

const mapStateToProps = (state) => {
    return {
        focusData: state.focusData,
        countRow: state.stateFlagsBasisReport.countRowTable, // количество строк на отображаемой странице
        numberList: state.stateFlagsBasisReport.numberList //номер отображаемого листа
    }
}
const mapDispatchToProps = {
        sortingTable,
        getDataPageRowTable,
    sortingList
}

const withSort = (Component, dataSort, typeSort, func) => {

 
    class ComponentWithSort extends React.Component {

        hendlerSort = (event, sortKey) => {
            let data = sortBase(sortKey, dataSort); // сортируем данные 

            if (typeSort === "SortAll") {
                        this.props.sortingTable(data); // сохраняем отсортированную базу в хранилище
                        this.props.getDataPageRowTable(data, this.props.countRow, this.props.numberList); // затем меняем вид листа, который выведен в данный момент на страницу
            }
            if (typeSort === "SortActivList") {
                this.props.sortingList(data); //сохраняем и перерисовываем открытый лист
                console.log('SORT LIST ', data)
            }
            if (typeSort === "SortCompareTable") {
                        func(data); //сохраняем и перерисовываем массив сравнений
            }
        }

        render() {
            let props = {
                ...this.props,
                onclick: this.hendlerSort,
            }
            return (
                <Component {...props} />
                )
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(ComponentWithSort)
}
export default withSort
















//const hendlerSortList = (event, sortKey) => {
//    let data = sortBase(sortKey, dataTable); //сотрируем только открытый лист, база остается несортированной
//    dispatch(sortingList(data)); //сохраняем и перерисовываем открытый лист
//}
//const hendlerSortCompare = (event, sortKey) => {

//    let data = sortBase(sortKey, compareArr); //сотрируем только массив для сравнения
//    dispatch(sortingCompareArr(data)); //сохраняем в хранилище отсортированный массив и перерисовываем 
//}
