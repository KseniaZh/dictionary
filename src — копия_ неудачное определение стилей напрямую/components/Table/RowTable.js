import React, {useEffect, useState } from 'react';
import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withHoverDescription from '../../hoc/withHoverDescription';
import DescriptionButton from '../../components/Description/DescriptionButton';

function RowTable(props) {
    
    const Keys = Object.keys(props.dataRow).filter(key => key !== "uid");
    const uid = props.dataRow.uid;

    const inputChecked = data => data ? 'checked' : false;

    const deleteRowfromCompare = (event) => {
        props.onclick(event, uid);
        props.onclickDelete();
    }

    // логика всплывающей подсказки спрятана в hoc, обертка кнопок и подсказка реализованы в ButtonConsoleTable
    const ButtonDeleteRow = withHoverDescription(ButtonSmall, DescriptionButton);

    const [colorRow, setColorRow] = useState(props.colorRowTableBackground);

    const hendlerClick = (event) => {
        props.onclick(event, uid);
    }

    useEffect(() => {
        if (props.focusData.uid === uid) {
            setColorRow(props.colorFocusRowBackground);
        }
    }, [])

    return(

        <tr className={props.classnameRowTable} >
            {
                props.flagOpenCompareWindow ?
                    <td className={colorRow}
                        uid={props.dataRow.uid}
                        onClick={deleteRowfromCompare}
                    >
                        <ButtonDeleteRow
                            icon="fa fa-times-circle"
                            onclick={deleteRowfromCompare}
                            data={props.dataRow}
                            name="DeleteRow"
                            classnameDescription={props.classnameDescription }
                            positionDescription="no"
                        />
                    </td>
                    : <td className={colorRow}>
                        {props.number}
                    </td>
            }
            
            
            {
                Keys.map((keyObj, index) => {

                    if (props.number <= props.CountRow) {

                        if (props.typeDataColumns[index] === 'text') {
                                return <td
                                            key={index}
                                            uid={props.dataRow.uid}
                                            onClick={hendlerClick}
                                            className={colorRow}
                                        >
                                            {props.dataRow[keyObj]}
                                        </td>
                            }

                        if (props.typeDataColumns[index] === 'checkbox') {
                                return <td
                                        key={index}
                                        uid={props.dataRow.uid}
                                        onClick={hendlerClick}
                                        className={colorRow}
                                    >
                                        < input
                                            type="checkbox"
                                            checked={inputChecked(props.dataRow[keyObj])}
                                            disabled="disabled"
                                            className={props.classnameCheckbox}
                                            style={colorRow}
                                        />
                                    
                                </td>
                            }
                    }  
                }) 
            }
        
        </tr>
    )
}

export default RowTable

//  const inputChecked = data => data ? <span className="fa fa-check" aria-hidden="true"></span> : null



