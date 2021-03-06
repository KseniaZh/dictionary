﻿import React from 'react';
import { connect } from "react-redux";

import ComponentEditWindow from '../../components/EditWindow/ComponentEditWindow';
import WarningValueNotSelected from '../../components/WarningWindow/WarningValueNotSelected';

import {
    saveDataStore
} from '../../store/BasisReport/actions/actionFocusData';
import {
    start_EltypeClass_POST_RequestServer,
    start_EltypeClass_PUT_RequestServer
} from '../../store/EltypeClass/actions/actionEltypeClass';
import {
    addDataCompareArr
} from '../../store/EltypeClass/actions/actionsCompareEltypeClass';

const mapDispatchToProps = {
            saveDataStore,
            start_EltypeClass_POST_RequestServer,
            start_EltypeClass_PUT_RequestServer,
            addDataCompareArr
        }
const mapStateToProps = (state) => {
    return {
        focusData: state.focusData,
        nameWindow: state.stateInputEditWindowEltypeClass.nameWindow,
        typeRequestServer: state.stateInputEditWindowEltypeClass.typeRequest,
        labels: state.stateInputEditWindowEltypeClass.labels,
        placeholders: state.stateInputEditWindowEltypeClass.placeholders,
        typeData: state.stateInputEditWindowEltypeClass.typeData,
        typeInput: state.stateInputEditWindowEltypeClass.typeInput,
        linkAddressActiveTable: state.stateLinksEltypeClass.linkActiveTable,
        compareArr: state.stateCompareEltypeClass,
        stateStylesAll: state.stateStyle.stylesAll, //переключение цветового решения приложения
        staleSelect: state.stateStyle.styleSelect
    }
}

class EditWindowEltypeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.focusData;
    }

    handlerOnChange = (event, keyName, typeInput) => {
        if (typeInput === "text") {
            this.setState({ [keyName]: event.target.value });
        };
        if (typeInput === "checkbox") {
            this.setState({ [keyName]: !this.state[keyName] });
        };
    }

    handlerSave = () => {

        this.props.saveDataStore(this.state);

        if (this.props.typeRequestServer === 'post') {
            this.props.start_EltypeClass_POST_RequestServer();
        } else
            if (this.props.typeRequestServer === 'put') {
                this.props.start_EltypeClass_PUT_RequestServer();
                this.props.addDataCompareArr(this.state, this.props.compareArr);
            }
    }
  
    render() {
        return (
            (this.props.typeRequestServer === 'put' && this.state.uid === "" || this.props.typeRequestServer === 'put' && this.state.uid === undefined) ?
                <WarningValueNotSelected
                    classnameWarningValueNotSelected={this.props.stateStylesAll[this.props.staleSelect].warningValueNotSelected}
                    classnameWarningHelp={this.props.stateStylesAll[this.props.staleSelect].warningHelp}
                    classnameButtonWarningHelp={this.props.stateStylesAll[this.props.staleSelect].buttonWarningHelp}
                    classnameButtonWarningComeBack={this.props.stateStylesAll[this.props.staleSelect].buttonWarningComeBack}
                    classnameWrapper={this.props.stateStylesAll[this.props.staleSelect].wrapper}
                    onclickWarning={() => console.log("WarningValueNotSelected")}
                    to={this.props.linkAddressActiveTable}
                />
                : <ComponentEditWindow
                    classnameWrapper={this.props.stateStylesAll[this.props.staleSelect].wrapper}
                    classnameWindow={this.props.stateStylesAll[this.props.staleSelect].windowEditWindow}
                    classNameCheckbox={this.props.stateStylesAll[this.props.staleSelect].beautifulCheckbox}

                    nameWindow={this.props.nameWindow}

                    onchange={this.handlerOnChange}
                    stateData={this.state}
                    labels={this.props.labels}
                    placeholders={this.props.placeholders}
                    typeData={this.props.typeData}
                    typeInput={this.props.typeInput}
                    onclickYesButton={this.handlerSave}
                    onclickNoButton={this.nullStateApp}

                    to={this.props.linkAddressActiveTable}
                />
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditWindowEltypeClass)

