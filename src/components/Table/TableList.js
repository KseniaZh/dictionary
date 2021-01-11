import React from 'react';
import { connect } from "react-redux";

import TableBody from './TableBody';
import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withHoverDescription from '../../hoc/withHoverDescription';
import withClickSaveFocus from '../../hoc/withClickSaveFocus';
import withSort from '../../hoc/withSort';
import withSearchTypeSelect from '../../hoc/withSearchTypeSelect';
import DescriptionButton from '../../components/Description/DescriptionButton';
import FooterTable from '../../containers/FooterTable/FooterTable';


function TableList(props) {

    const haveDescription = true;

    // логика сортировка в hoc
    const ButtonSortBase = withSort(ButtonSmall, props.stateTable, "SortAll");
    const ButtonSortList = withSort(ButtonSmall, props.dataTable, "SortActivList");
    const ButtonSortCompare = withSort(ButtonSmall, props.dataTable, "SortCompareTable", props.funcSorting);
    const ButtonSearchTypeSelect = withSearchTypeSelect(ButtonSmall);

    // логика всплывающей подсказки в hoc, обертка кнопки в доп div с подсказкой
    const ButtonSortBaseDescription = withHoverDescription(ButtonSortBase, DescriptionButton);
    const ButtonSortListDescription = withHoverDescription(ButtonSortList, DescriptionButton);
    const ButtonSearchTypeSelectDescription = withHoverDescription(ButtonSearchTypeSelect, DescriptionButton);

    //логика выделения фокуса в hoc
    const TableBodyWithSaveFocus = withClickSaveFocus(TableBody, props.dataTable);

    const flagHaveButtonSortBaseDescription = (flag, dataColumnName, typeButton) => {
        if (flag === true) {

            if(typeButton === 'ButtonSortBase') {
                return <ButtonSortBaseDescription
                            icon="fa fa-arrow-down"
                            data={dataColumnName}
                            name="SortBase"
                            classnameDescription={props.classnameDescription}
                            haveDescription={haveDescription}
                            positionDescription="top"
                        />
            };

            if (typeButton === 'ButtonSortList') {
                return <ButtonSortListDescription
                            icon="fa fa-indent"
                            data={dataColumnName}
                            name="SortList"
                            classnameDescription={props.classnameDescription}
                            haveDescription={haveDescription}
                            positionDescription="top"
                        />
            };

            if (typeButton === 'ButtonSortCompare') {
                return <ButtonSortCompare
                            icon="fa fa-arrow-down"
                            data={dataColumnName}
                            name="SortBase"
                            classnameDescription={props.classnameDescription}
                            haveDescription={haveDescription}
                            positionDescription="top"
                        />
            } 
        }else{
                return null
            };

    }

    const flagHaveButtonSearch = (flag, dataColumnName) => {
        if ( flag === true) {
            return <ButtonSearchTypeSelectDescription
                        icon="fa fa-search"
                        data={dataColumnName}
                        name="SearchTypeSelect"
                        classnameDescription={props.classnameDescription}
                        haveDescription={haveDescription}
                        positionDescription="top"
                    />
        } else {
            return null
        }
    }

    return(
        <div id='tableListBaseWrapper' className={props.classname}>
            <table>
                  <thead>
                    <tr className={props.classnameRowTable}>
                        <th> </th>

                    {
                        props.visibleNameСolumns.map((name, index) => {
                            return <th
                                        key={index}
                                    >
                                        <div>{name}</div>
                                        {
                                            props.flagOpenCompareWindow ?
                                                flagHaveButtonSortBaseDescription(props.sortСolumns[name], name, 'ButtonSortCompare')
                                            : flagHaveButtonSortBaseDescription(props.sortСolumns[name], name, 'ButtonSortBase')
                                        }
                                        {
                                            props.flagOpenCompareWindow ?
                                                null
                                            : flagHaveButtonSortBaseDescription(props.sortСolumns[name], name, 'ButtonSortList')
                                        }
                                        {
                                            props.flagOpenCompareWindow ?
                                                null
                                            : flagHaveButtonSearch(props.searchСolumnsName[name], name)
                                        }
                                            
                                    </th>
                        })
                    }
                    </tr>
                  </thead>

                  <TableBodyWithSaveFocus
                        dataTable={props.dataTable}
                        onclickDelete={props.onclickDelete}
                        onclickButtonRowClickAddCompareData={props.onclickButtonRowClickAddCompareData}
                        CountRow={props.CountRow}
                        visibleNameСolumns={props.visibleNameСolumns}
                        typeDataColumns={props.typeDataColumns}
                        flagOpenCompareWindow={props.flagOpenCompareWindow}
                        focusData={props.focusData}
                        compareArrUid={props.compareArrUid}
                        classnameRowTable={props.classnameRowTable}
                        classnameCheckbox={props.classnameCheckbox}
                        classnameDescription={props.classnameDescription}
                        colorRowTableBackground={props.colorRowTableBackground}
                        colorFocusRowBackground={props.colorFocusRowBackground}
                    />
                   
            </table>
            {
                props.flagOpenCompareWindow || props.flagOpenFilter?
                    <p>{props.textFooter}</p>
                    :<FooterTable
                        classname={props.classnameConsoleCountRow}
                        classnameButtonConsoleCountRow={props.classnameButtonConsoleCountPow}
                        classnameDescription={props.classnameDescription}
                        focusNull={props.focusNull}
                    />
            }
            
    </div>
    )
}

export default connect()(TableList)