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

    const columnName = Object.keys(props.dataTable[0]).filter(key => key !== "uid");

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
                        <th>
                            №
                        </th>

                    {
                        columnName.map((name, index) => {
                                if (name === props.visibleNameСolumns[index]) {
                                        return <th
                                                  key={index}
                                                >
                                                    <div>{name}</div>
                                                    {
                                                        props.flagOpenCompareWindow ?
                                                            <ButtonSortCompare
                                                                icon="fa fa-arrow-down"
                                                                data={name}
                                                                name="SortBase"
                                                                classnameDescription={props.classnameDescription}
                                                                haveDescription={haveDescription}
                                                                positionDescription="top"
                                                            />
                                                            : <ButtonSortBaseDescription
                                                                icon="fa fa-arrow-down"
                                                                data={name}
                                                                name="SortBase"
                                                                classnameDescription={props.classnameDescription}
                                                                haveDescription={haveDescription}
                                                                positionDescription="top"
                                                            />
                                                    }
                                                    {
                                                        props.flagOpenCompareWindow ?
                                                            null
                                                            :<ButtonSortListDescription
                                                                icon="fa fa-indent"
                                                                data={name}
                                                                name="SortList"
                                                                classnameDescription={props.classnameDescription}
                                                                haveDescription={haveDescription}
                                                                positionDescription = "top"
                                                            /> 
                                                    }
                                                    {
                                                        props.flagOpenCompareWindow ?
                                                            null
                                                            : flagHaveButtonSearch(props.searchСolumnsName[name], name)
                                                    }
                                            
                                               </th>
                                    }    
                        })
                    }
                    </tr>
                  </thead>

                  <TableBodyWithSaveFocus
                        dataTable={props.dataTable}
                        onclickDelete={props.onclickDelete}
                        CountRow={props.CountRow}
                        visibleNameСolumns={props.visibleNameСolumns}
                        typeDataColumns={props.typeDataColumns}
                        flagOpenCompareWindow={props.flagOpenCompareWindow}
                        focusData={props.focusData}
                        classnameRowTable={props.classnameRowTable}
                        classnameCheckbox={props.classnameCheckbox}
                        classnameDescription={props.classnameDescription}
                        colorRowTableBackground={props.colorRowTableBackground}
                        colorFocusRowBackground={props.colorFocusRowBackground}
                    />
                   
            </table>
            {
                props.flagOpenCompareWindow ?
                    null
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