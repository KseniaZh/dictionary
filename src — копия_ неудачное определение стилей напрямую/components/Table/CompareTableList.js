import React from 'react';

import CompareTableBody from './CompareTableBody';
import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withSort from '../../hoc/withSort';
import withClickSaveFocus from '../../hoc/withClickSaveFocus';
import withHoverDescription from '../../hoc/withHoverDescription';
import DescriptionButton from '../../components/Description/DescriptionButton';

function CompareTableList(props) {

    // логика сортировка в hoc
    const ButtonSortCompareTable = withSort(ButtonSmall, props.compareArr, "SortCompareTable");

    // логика всплывающей подсказки в hoc, обертка кнопки в доп div с подсказкой
    const ButtonSortCompareTableDescription = withHoverDescription(ButtonSortCompareTable, DescriptionButton);

    //логика выделения фокуса в hoc
    const CompareTableBodyWithSaveFocus = withClickSaveFocus(CompareTableBody, props.dataTable);

    const columnName = Object.keys(props.dataTable[0]).filter(key => key !== "uid");
    
    return(
        <div className={props.classname}>
            <table>
                  <thead>
                    <tr>
                        <th> </th>
                        {
                            columnName.map((name, index) => {
                                if (name === props.visibleNameСolumns[index]) {
                                    return <th
                                                key={index}
                                            >
                                                <div> {name} </div>

                                                <ButtonSortCompareTableDescription
                                                    icon="fa fa-indent"
                                                    data={name}
                                                    name="SortList"
                                                    classnameDescription='DescriptionButton'
                                                    positionDescription="top"
                                                />

                                            </th>
                                }
                            })
                        }
                    </tr>
                  </thead>

                <CompareTableBodyWithSaveFocus
                            dataTable={props.dataTable}
                            onclickDelete={props.onclickDelete}
                            visibleNameСolumns={props.visibleNameСolumns}
                            typeDataColumns={props.typeDataColumns}
                            colorRowTableBackground={props.colorRowTableBackground}
                            colorFocusRowBackground={props.colorFocusRowBackground}
                />

            </table>

        </div>
    )
}

export default CompareTableList