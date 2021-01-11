import React from 'react';
import { connect } from "react-redux";
import { saveDataStore } from '../store/BasisReport/actions/actionFocusData';

const mapStateToProps = (state) => {
    return {
        focusData: state.focusData, //что хранится в фокусе
    }
}

const mapDispatchToProps = {
    saveDataStore
}

const withClickSaveFocus = (Component, base) => {
      
    class ComponentWithClickSaveFocusTable extends React.Component {

        handlerTableRowUID = (event, data) => { //фокус на строку
            event.preventDefault();
            if (event.target.parentElement.tagName === 'TR' || event.target.parentElement.tagName === 'TD' || event.target.parentElement.tagName === 'DIV') {

                base.map((obj) => {
                    if (obj.uid === data) {
                        this.props.saveDataStore(obj); // сохранить в хранилище для изменений
                    };
                });
            };
      }

        render() {
            let props = {
                ...this.props,
                onclick: this.handlerTableRowUID
            }
            return (
                <Component {...props} />
                )
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(ComponentWithClickSaveFocusTable)
}
export default withClickSaveFocus