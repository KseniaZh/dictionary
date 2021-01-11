﻿import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import HeaderCompare from '../../components/Header/HeaderCompare';
import TableList from '../../components/Table/TableList';
import WarningCompare from '../../components/WarningWindow/WarningCompare';
import ContextMenuCompare from '../../components/ContextMenuWindow/ContextMenuCompare';

import { sortingCompareArr } from '../../store/User/actions/actionsCompareUser';
import { addDescription } from "../../store/Description/actionsDescription";

import withContextMenuWindow from '../../hoc/withContextMenuWindow';


function BasisCompare(props) {


    const dispatch = useDispatch();

    const visibleNameСolumns = useSelector(state => state.stateInputEditWindowUser.nameСolumnsTableList); // наименования ключей для заполнения колонок в таблице

    const typeDataColumns = useSelector(state => state.stateInputEditWindowUser.typeData); // тип данных значений, заполняющих колонки

    const flagEmployDescription = useSelector(state => state.stateFlagsAll.employDescriptionAll) // разрешен ли пользователем показ подсказок

    const arrDescription = useSelector(state => state.stateDescription); // массив подсказок из store (пока без кнопок консоли, заполнится после рединга)

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    

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
    const CompareTableWithContextMenu = withContextMenuWindow(TableList, ContextMenuCompare, props.stateConsoleButton, "ContextMenuWindow");
    
    useEffect(() => {
        haveDescription(props.stateConsoleButton);
    }, [])

    return (

        <div className={stateStylesAll[staleSelect].dataBaseContainer}>

            <HeaderCompare
                classnameHeaderContainer={stateStylesAll[staleSelect].dataBaseHeaderContainer}
                classnameHeader={stateStylesAll[staleSelect].dataBaseHeaderHeader}
                classnameHeaderConsole={stateStylesAll[staleSelect].dataBaseHeaderConsole}
                stateConsoleButton={props.stateConsoleButton}
                classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                nameBase={props.nameBase}
                nameHeader={props.nameHeader}
                hendlerCloseWindow={props.hendlerCloseWindow}
                to={props.linkBack}
            />

            {
                (props.compareArr.length > 1) ?
                    <CompareTableWithContextMenu
                        classname={stateStylesAll[staleSelect].dataBaseTableContainer}
                        colorRowTableBackground={stateStylesAll[staleSelect].rowTableBackground}
                        colorFocusRowBackground={stateStylesAll[staleSelect].focusRowBackground}

                        flagOpenCompareWindow={props.flagOpenCompareWindow}

                        stateTable={props.compareArr}
                        dataTable={props.compareArr}
                        CountRow={props.compareArr.length + 1}
                        onclickDelete={props.hendlerDeleteContext}
                        visibleNameСolumns={visibleNameСolumns}
                        typeDataColumns={typeDataColumns}
                        funcSorting={(data)=> dispatch(sortingCompareArr(data))}
                    />
                    : <WarningCompare />
            }

        </div>
    )
}

export default connect()(BasisCompare)