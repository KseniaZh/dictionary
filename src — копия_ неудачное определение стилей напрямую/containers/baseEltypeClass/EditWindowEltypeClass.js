import React from 'react';
import { connect } from "react-redux";
//import "../../styles/WarningValueNotSelected.scss";
//import "../../styles/EditWindow.scss";
import ComponentEditWindow_EltypeClass from '../../components/EditWindow/ComponentEditWindowEltypeClass';
import { saveDataStore, start_POST_RequestServer, start_PUT_RequestServer } from '../../store/EltypeClass/actions/actionEltypeClass'

import WarningValueNotSelected from '../../components/WarningWindow/WarningValueNotSelected';


const mapDispatchToProps = {
            saveDataStore,
            start_POST_RequestServer,
            start_PUT_RequestServer
        }
const mapStateToProps = (state) => {
    return {
        initialProperties: state.createDataEltypeClass,
        linkActiveTable: state.stateLinksEltypeClass.linkActiveTable,
        stateStylesAll: state.stateStyle.stylesAll, //переключение цветового решения приложения
        staleSelect: state.stateStyle.styleSelect
    }
}


class EditWindow_EltypeClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.initialProperties.stateData;
        this.nameWindow = props.initialProperties.nameWindow;
        this.labels = props.initialProperties.labels;
        this.placeholders = props.initialProperties.placeholders;
        this.typeData = props.initialProperties.typeData;

        this.saveDataStore = props.saveDataStore;
        this.start_POST_RequestServer = props.start_POST_RequestServer;
        this.start_PUT_RequestServer = props.start_PUT_RequestServer;

        this.typeRequestServer = props.initialProperties.typeRequest;

        this.linkAddress = props.linkActiveTable;
    }


    handlerOnChange = (event, keyName, typeInput) => {
        if (typeInput === "text") {
            this.setState({ [keyName]: event.target.value });
        };
        if (typeInput === "checkbox") {
            this.setState({ [keyName]: !this.state[keyName] });
            console.log("checkbox ", !this.state[keyName]);
        };
    }
        

    nullStateApp = () => {
        let nullState = {};
        Object.keys(this.state).map((key) => nullState[key] = '')
        this.setState({ ...nullState });
    }
    handlerClose = () => {
        let nullState = {};
        Object.keys(this.state).map((key) => nullState[key] = '');
        //this.saveDataStore({ ...nullState });

        this.setState({ ...nullState });
    }
    componentDidMount() {
        if (this.typeRequestServer === 'post') {
            this.nullStateApp();
        }
    }
    handlerSave = () => {

        this.saveDataStore(this.state);

        if (this.typeRequestServer === 'post') {
            this.start_POST_RequestServer();
        } else
            if (this.typeRequestServer === 'put') {
                this.start_PUT_RequestServer();
            }
        this.handlerClose();
    }

    render() {
        return (
            (this.typeRequestServer === 'put' && this.state.uid === "") ?
                <WarningValueNotSelected
                    classnameWarningValueNotSelected={this.props.stateStylesAll[this.props.staleSelect].warningValueNotSelected}
                    classnameWarningHelp={this.props.stateStylesAll[this.props.staleSelect].warningHelp}
                    classnameButtonWarningHelp={this.props.stateStylesAll[this.props.staleSelect].buttonWarningHelp}
                    classnameButtonWarningComeBack={this.props.stateStylesAll[this.props.staleSelect].buttonWarningComeBack}
                    classnameWrapper={this.props.stateStylesAll[this.props.staleSelect].wrapper}
                    onclickWarning={() => console.log("WarningValueNotSelected")}
                    to={this.linkAddress}
                />
                : <ComponentEditWindow_EltypeClass
                    classnameWrapper={this.props.stateStylesAll[this.props.staleSelect].wrapper}
                    classnameWindow={this.props.stateStylesAll[this.props.staleSelect].windowEditWindow}
                    classNameCheckbox={this.props.stateStylesAll[this.props.staleSelect].beautifulCheckbox}

                    nameWindow={this.nameWindow}

                    onchange={this.handlerOnChange}
                    stateData={this.state}
                    labels={this.labels}
                    placeholders={this.placeholders}
                    typeData={this.typeData}

                    onclickYesButton={this.handlerSave}
                    onclickNoButton={this.handlerClose}

                    to={this.linkAddress}
                />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWindow_EltypeClass)

