import React, { useEffect } from 'react';
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
    const CompareTableWithContextMenu = withContextMenuWindow(TableList, ContextMenuCompare, props.stateConsoleButton, stateStylesAll[staleSelect].contextMenuWindow);
    
    useEffect(() => {
        haveDescription(props.stateConsoleButton);
    }, [])

    return (

        <div className={stateStylesAll[staleSelect].dataBaseContainer}>

            <HeaderCompare
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
                        classnameConsoleCountRow={stateStylesAll[staleSelect].consoleCountRow}
                        classnameButtonConsoleCountPow={stateStylesAll[staleSelect].personalizeButton}
                        classnameRowTable={props.classRowTable}
                        classnameCheckbox={stateStylesAll[staleSelect].beautifulCheckboxTable}
                        classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                        colorRowTableBackground={stateStylesAll[staleSelect].rowTableBackground}
                        colorFocusRowBackground={stateStylesAll[staleSelect].focusRowBackground}

                        flagOpenCompareWindow={props.flagOpenCompareWindow}
                        textFooter="Активирован режим сравнения избранных данных"

                        stateTable={props.compareArr}
                        visibleNameСolumns={props.visibleNameСolumns}
                        dataTable={props.compareArr}
                        sortСolumns={props.sortСolumns}
                        CountRow={props.compareArr.length + 1}
                        onclickDelete={props.hendlerButtonRowClickDeleteCompareData}
                        typeDataColumns={props.typeDataColumns}
                        funcSorting={(data)=> dispatch(sortingCompareArr(data))}
                    />
                    : <WarningCompare />
            }

        </div>
    )
}

export default connect()(BasisCompare)