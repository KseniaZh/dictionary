import React from 'react';

import ComponentWindowConfirmDeleting from '../../components/WindowConfirmDeleting/ComponentWindowConfirmDeleting';
import { connect, useDispatch, useSelector } from "react-redux";
import WarningValueNotSelected from '../../components/WarningWindow/WarningValueNotSelected';

import {
    start_DELETE_RequestServer,
    saveDataStore
} from '../../store/EltypeClass/actions/actionEltypeClass';



function WindowConfirmDeleting(props) {

    const dispatch = useDispatch();
    const dataDelete = useSelector(state => state.createDataEltypeClass.stateData);
    const linkActiveTable = useSelector(state => state.stateLinksEltypeClass.linkActiveTable); //ссылка перехода в активную таблицу

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);


    const hendlerDataDelete = () => {

        dispatch(start_DELETE_RequestServer());
        let nullState = {};
        Object.keys(dataDelete).map((key) => nullState[key] = '');
        saveDataStore({ ...nullState });
    }
    const hendler = () => { };

    return (
        (dataDelete.uid === "") ?
            <WarningValueNotSelected
                classnameWarningValueNotSelected={stateStylesAll[staleSelect].warningValueNotSelected}
                classnameWarningHelp={stateStylesAll[staleSelect].warningHelp}
                classnameButtonWarningHelp={stateStylesAll[staleSelect].buttonWarningHelp}
                classnameButtonWarningComeBack={stateStylesAll[staleSelect].buttonWarningComeBack}
                classnameWrapper={stateStylesAll[staleSelect].wrapper}
                onclickWarning={() => console.log("WarningValueNotSelected")}
                to={linkActiveTable}
            />
            : <ComponentWindowConfirmDeleting
                classnameWrapper={stateStylesAll[staleSelect].wrapper}
                classnameWindow={stateStylesAll[staleSelect].windowConfirmDeleting}
                onclickNoButton = {()=> console.log("click button x ")}
                dataDelete = {dataDelete.name}
                onclickYesButton = {hendlerDataDelete}
                onclickNoButton={() => console.log("click button NO ")}
                onmouseover={hendler}
                onmouseleave={hendler}
                to={linkActiveTable}
            />  
    )
}

export default connect()(WindowConfirmDeleting)