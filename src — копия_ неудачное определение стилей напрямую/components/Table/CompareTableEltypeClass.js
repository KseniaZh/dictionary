import React from 'react';

import CompareTableBody from './CompareTableBody';
import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withSort from '../../hoc/withSortEC';
import withClickSaveFocusRow from '../../hoc/withClickSaveFocusRow';
import withHoverDescription from '../../hoc/withHoverDescription';
import DescriptionButton from '../../components/Description/DescriptionButton';

function CompareTableEltypeClass(props) {

    // логика сортировка в hoc
    const ButtonSortCompareTable = withSort(ButtonSmall, props.compareArr, "SortCompareTable");

    // логика всплывающей подсказки в hoc, обертка кнопки в доп div с подсказкой
    const ButtonSortCompareTableDescription = withHoverDescription(ButtonSortCompareTable, DescriptionButton);

    //логика выделения фокуса в hoc
    const CompareTableBodyWithSaveFocus = withClickSaveFocusRow(CompareTableBody, props.compareArr);

    const columnName = Object.keys(props.compareArr[0])

    return(
        <div className={props.classname}>
            <table>
                  <thead>
                    <tr>
                        <th> </th>
                        {
                            columnName.map((name, index) => {
                                if (name === 'name' || name === 'isDeleted' || name === 'isTemplate') {
                                    return <th
                                                key={index}
                                            >
                                                <div> {name} </div>

                                                <ButtonSortCompareTableDescription
                                                    icon="fa fa-indent"
                                                    data={name}
                                                    name="SortList"
                                                    classnameDescription={props.classnameDescription}
                                                    positionDescription="top"
                                                />

                                            </th>
                                }
                            })
                        }
                    </tr>
                  </thead>

                <CompareTableBodyWithSaveFocus
                            dataTable={props.compareArr}
                            focusData={props.focusData}
                            onclickDelete={props.onclickDelete}
                            colorRowTableBackground={props.colorRowTableBackground}
                            colorFocusRowBackground={props.colorFocusRowBackground}
                />

            </table>

    </div>
    )
}

export default CompareTableEltypeClass