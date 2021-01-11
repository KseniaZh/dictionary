import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import ButtonLinkSmallNotMouse from '../../UserInterface/Buttons/Button/ButtonLinkSmallNotMouse';
import ConsoleButton from '../../components/ConsoleButton/ConsoleButton';
import HeaderCompare from '../../components/Header/HeaderCompare';
import CompareTableEltypeClass from '../../components/Table/CompareTableEltypeClass';
import WarningCompare from '../../components/WarningWindow/WarningCompare';
import ContextMenuCompare from '../../components/ContextMenuWindow/ContextMenuCompare';

import {
    saveDataStore,
    saveTypeRequest,
    saveNameWindow,
} from '../../store/EltypeClass/actions/actionEltypeClass';

import { changeAdressOpenTable } from '../../store/EltypeClass/actions/actionsLinksEltypeClass';

import {
    clearCompareArr,
    deleteDataCompareArr
} from '../../store/EltypeClass/actions/actionsCompareEltypeClass';

import { addDescription } from "../../store/Description/actionsDescription";

import withContextMenuWindow from '../../hoc/withContextMenuWindow';


function CompareEltypeClass(props) {


    const dispatch = useDispatch();

    const compareArr = useSelector(state => state.compareDataEltypeClass); // массив строк, избранных для сравнения

    const focusData = useSelector(state => state.createDataEltypeClass.stateData); //хранение данных выбранной строки

    const links = useSelector(state => state.stateLinksEltypeClass); //список ссылок для переходов между окнами

    const flagEmployDescription = useSelector(state => state.stateFlagsAll.employDescriptionAll) // разрешен ли пользователем показ подсказок

    const arrDescription = useSelector(state => state.stateDescription); // массив подсказок из store (пока без кнопок консоли, заполнится после рединга)

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const hendlerOpenWindow = (nameWindow, typeRequest) => {
        dispatch(saveTypeRequest(typeRequest));
        dispatch(saveNameWindow(nameWindow));
    }

    const hendlerClearCompareArr = () => {
        dispatch(clearCompareArr());
        // изменяем ссылку перенаправления на активную таблицу для закрытия вспомогательных окон:
        dispatch(changeAdressOpenTable(links.linkBase));
    }
    
    const hendlerDeleteContext = () => {
        dispatch(deleteDataCompareArr(focusData, compareArr)); // удалить из массива сравнений
        //удаляем из списка сравнений и поэтому обнуляем хранение фокуса:
        dispatch(saveDataStore({
                                uid: "",
                                name: "",
                                isDeleted: false,
                                isTemplate: false
                            })
                            );
    }

    const hendlerCloseWindow = () => {
            //закрываем окно и поэтому обнуляем хранение фокуса:
            dispatch(saveDataStore({
                                        uid: "",
                                        name: "",
                                        isDeleted: false,
                                        isTemplate: false
                                    })
                        );
            // изменяем ссылку перенаправления на активную таблицу для закрытия вспомогательных окон:
            dispatch(changeAdressOpenTable(links.linkBase));
    }


    const stateConsoleButton = [

        {
            text: "Внести изменения",
            name: 'edit',
            icon: "fa fa-pencil-square-o fa-lg",
            onclick: () => hendlerOpenWindow("Внести изменения", "put"),
            link: links.linkEditWindow
        },
        {
            text: "Удалить из базы данных",
            name: 'delete',
            icon: "fa fa-times fa-lg",
            onclick: () => { },
            link: links.linkWindowConfirmDeleting
        },
        {
            text: "Убрать из сравнения",
            name: 'deleteList',
            icon: "fa fa-times-circle",
            onclick: hendlerDeleteContext,
            data: focusData,
            link: links.linkCompare
        },
        {
            text: "Очистить список сравнений",
            name: 'clear',
            icon: "fa fa-minus-square-o",
            onclick: hendlerClearCompareArr,
            link: links.linkBase
        },
        {
            text: "Назад",
            name: 'back',
            icon: "fa fa-share",
            onclick: hendlerCloseWindow,
            link: links.linkBase
        }
    ];

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
    const CompareTableWithContextMenu = withContextMenuWindow(CompareTableEltypeClass, ContextMenuCompare, stateConsoleButton, "ContextMenuWindow");

    useEffect(() => {
        haveDescription(stateConsoleButton);
    }, [])

    return (

        <div className={stateStylesAll[staleSelect].dataBaseContainer}>

            <div className={stateStylesAll[staleSelect].dataBaseHeaderContainer}>

                <ConsoleButton
                    classnameWrapper={stateStylesAll[staleSelect].dataBaseHeaderConsole}
                    classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                    stateConsoleButton={stateConsoleButton}
                    tabindex="-1"
                />

                <HeaderCompare
                    classname={stateStylesAll[staleSelect].dataBaseHeaderHeader}
                    nameBase="Классы для Типов связей и Типов сущностей"
                    nameHeader="Сравнить избранное"
                />

                <ButtonLinkSmallNotMouse
                    to={links.linkBase}
                    icon="fa fa-share"
                    onclick={hendlerCloseWindow}
                />
            </div>
            {
                (compareArr.length > 1) ?
                    <CompareTableWithContextMenu
                        classname={stateStylesAll[staleSelect].dataBaseTableContainer}
                        classnameDescription={stateStylesAll[staleSelect].descriptionButton}
                        colorRowTableBackground={stateStylesAll[staleSelect].rowTableBackground}
                        colorFocusRowBackground={stateStylesAll[staleSelect].focusRowBackground}
                        compareArr={compareArr}
                        focusData={focusData}
                        onclickDelete={hendlerDeleteContext}
                    />
                    : <WarningCompare />
            }

        </div>
    )
}

export default connect()(CompareEltypeClass)