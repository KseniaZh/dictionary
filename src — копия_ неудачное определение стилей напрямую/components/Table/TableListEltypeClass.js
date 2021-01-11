import React from 'react';

import TableBody from './TableBody';
import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withHoverDescription from '../../hoc/withHoverDescription';
import withClickSaveFocusRow from '../../hoc/withClickSaveFocusRow';
import withSort from '../../hoc/withSortEC';
import DescriptionButton from '../../components/Description/DescriptionButton';
import FooterTable from '../FooterTable/FooterTable';


function TableList(props) {

    const haveDescription = true;

    // логика сортировка в hoc
    const ButtonSortBase = withSort(ButtonSmall, props.stateTable, "SortAll");
    const ButtonSortList = withSort(ButtonSmall, props.dataTable, "SortActivList");

    // логика всплывающей подсказки в hoc, обертка кнопки в доп div с подсказкой
    const ButtonSortBaseDescription = withHoverDescription(ButtonSortBase, DescriptionButton);
    const ButtonSortListDescription = withHoverDescription(ButtonSortList, DescriptionButton);

    //логика выделения фокуса в hoc
    const TableBodyWithSaveFocus = withClickSaveFocusRow(TableBody, props.dataTable);

    const columnName = Object.keys(props.stateTable[0]);

    return(
        <div id='tableListBaseWrapper' className={props.classname}>
            <table>
                  <thead>
                    <tr>
                        <th>
                            №
                        </th>

                    {
                        columnName.map((name, index) => {
                            if (name === 'name' || name === 'isDeleted' || name === 'isTemplate') {
                                return <th
                                            key={index}
                                        >
                                            <div>{name}</div>

                                            <ButtonSortBaseDescription
                                                    icon="fa fa-arrow-down"
                                                    data={name}
                                                    name="SortBase"
                                                    classnameDescription='DescriptionButton'
                                                    haveDescription={haveDescription}
                                                    positionDescription="top"
                                                />
                                            <ButtonSortListDescription
                                                    icon="fa fa-indent"
                                                    data={name}
                                                    name="SortList"
                                                    classnameDescription='DescriptionButton'
                                                    haveDescription={haveDescription}
                                                    positionDescription = "top"
                                                />

                                        </th>
                            }
                        })
                    }
                    </tr>
                  </thead>

                    <TableBodyWithSaveFocus
                        dataTable={props.dataTable}
                        focusData={props.focusData}
                        CountRow={props.CountRow}
                        visibleNameColumns={props.visibleNameColumns}
                        typeDataColumns={props.typeDataColumns}
                        classnameDescription={props.classnameDescription}
                        colorRowTableBackground={props.colorRowTableBackground}
                        colorFocusRowBackground={props.colorFocusRowBackground}
                    />
                   
            </table>
            <FooterTable
                classname={props.classnameConsoleCountRow}
                classnameButtonConsoleCountRow={props.classnameButtonConsoleCountPow}
                classnameDescription={props.classnameDescription}
                func={props.func}
            />
    </div>
    )
}

export default TableList