import React from 'react';
import { connect } from "react-redux";

import { sortingTable } from '../store/EltypeClass/actions/actionEltypeClass';
import { getDataPageRowTable, sortingList } from '../store/EltypeClass/actions/actionsFlagsEltypeClass';
import { sortingCompareArr } from '../store/EltypeClass/actions/actionsCompareEltypeClass';
import { sortBase } from '../functions/Sort';

const mapStateToProps = (state) => {
    return {
        activList: state.stateFlagsEltypeClass.dataListTable, // отображаемый лист
        compareArr: state.compareDataEltypeClass, // массив строк, избранных для сравнения
        focusData: state.createDataEltypeClass.stateData,
        countRow: state.stateFlagsEltypeClass.countRowTable, // количество строк на отображаемой странице
        numberList: state.stateFlagsEltypeClass.numberList //номер отображаемого листа
    }
}
const mapDispatchToProps = {
        sortingTable,
        getDataPageRowTable,
        sortingList,
        sortingCompareArr
}

const withSort = (Component, dataSort, typeSort) => {

 
    class ComponentWithSort extends React.Component {

        hendlerSort = (event, sortKey) => {
            let data = sortBase(sortKey, dataSort); // сортируем данные 

            if (typeSort === "SortAll") {
                        this.props.sortingTable(data); // сохраняем отсортированную базу в хранилище
                        this.props.getDataPageRowTable(data, this.props.countRow, this.props.numberList); // затем меняем вид листа, который выведен в данный момент на страницу
            }
            if (typeSort === "SortActivList") {
                        this.props.sortingList(data); //сохраняем и перерисовываем открытый лист
            }
            if (typeSort === "SortCompareTable") {
                        this.props.sortingCompareArr(data); //сохраняем и перерисовываем массив сравнений
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
