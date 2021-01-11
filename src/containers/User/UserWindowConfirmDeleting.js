import React from 'react';

import ComponentWindowConfirmDeleting from '../../components/WindowConfirmDeleting/ComponentWindowConfirmDeleting';
import { connect, useDispatch, useSelector } from "react-redux";
import WarningValueNotSelected from '../../components/WarningWindow/WarningValueNotSelected';

import {
    startUser_DELETE_RequestServer
} from '../../store/User/actions/actionUser';
import {
    deleteDataCompareArr
} from '../../store/User/actions/actionsCompareUser';
import {
    saveDataStore
} from '../../store/BasisReport/actions/actionFocusData';



function UserWindowConfirmDeleting(props) {

    const dispatch = useDispatch();
    const dataDelete = useSelector(state => state.focusData);
    const linkActiveTable = useSelector(state => state.stateLinksUser.linkBase); //ссылка перехода в активную таблицу
    const arrCompare = useSelector(state => state.stateCompareUser); //массив значений, выбранных для сравнения

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const hendlerDataDelete = () => {

        dispatch(startUser_DELETE_RequestServer());
        dispatch(deleteDataCompareArr(dataDelete, arrCompare)); //удаляем из массива сравнений
        let nullState = {};
        Object.keys(dataDelete).map((key) => nullState[key] = '');
        dispatch(saveDataStore({ ...nullState })); // обнуляем фокус
    }

    return (
        (dataDelete.uid === "" || dataDelete.uid === undefined) ?
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
                to={linkActiveTable}
            />  
    )
}

export default connect()(UserWindowConfirmDeleting)