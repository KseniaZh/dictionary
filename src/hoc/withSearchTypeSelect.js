import React from 'react';
import { connect } from "react-redux";
import { changeSearchKey } from '../store/User/actions/actionEditWindowUser';

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = {
    changeSearchKey
}

const withSearchTypeSelect = (Component) => {

    class ComponentWithSearchTypeSelect extends React.Component {

        hendlerSearchTypeSelect = (event, name) => {
            this.props.changeSearchKey(name);
        }
        render() {
            let props = {
                ...this.props,
                onclick: this.hendlerSearchTypeSelect,
            }
            return (
                <Component {...props} />
                )
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(ComponentWithSearchTypeSelect)
}
export default withSearchTypeSelect
















//const hendlerSortList = (event, sortKey) => {
//    let data = sortBase(sortKey, dataTable); //сотрируем только открытый лист, база остается несортированной
//    dispatch(sortingList(data)); //сохраняем и перерисовываем открытый лист
//}
//const hendlerSortCompare = (event, sortKey) => {

//    let data = sortBase(sortKey, compareArr); //сотрируем только массив для сравнения
//    dispatch(sortingCompareArr(data)); //сохраняем в хранилище отсортированный массив и перерисовываем 
//}
