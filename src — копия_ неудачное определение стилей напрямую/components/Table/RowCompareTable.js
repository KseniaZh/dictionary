import React, { useEffect, useState } from 'react';
import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withHoverDescription from '../../hoc/withHoverDescription';
import DescriptionButton from '../../components/Description/DescriptionButton';

function RowCompareTable (props){
    
    const Keys = Object.keys(props.dataRow);

    const uid = props.dataRow.uid;

    const inputChecked = data => data ? 'checked' : false

    const deleteRowfromCompare = (event) => {
        props.onclick(event, uid);
        props.onclickDelete();
    }

    // логика всплывающей подсказки спрятана в hoc, обертка кнопок и подсказка реализованы в ButtonConsoleTable
    const ButtonDeleteRow = withHoverDescription(ButtonSmall, DescriptionButton);

    const [colorRow, setColorRow] = useState({ background: `${props.colorRowTableBackground}` });

    const hendlerClick = (event) => {
        props.onclick(event, uid);
    }

    useEffect(() => {
        if (props.focusData.uid === uid) {
            setColorRow({ background: `${props.colorFocusRowBackground}` });
        }
    }, [])

    return(

        <tr style={colorRow}>
                    <td
                        uid={props.dataRow.uid}
                        onClick={deleteRowfromCompare}
                    >
                        <ButtonDeleteRow
                            icon="fa fa-times-circle"
                            onclick={deleteRowfromCompare}
                            data={props.dataRow}
                            name="DeleteRow"
                            classnameDescription='DescriptionButton'
                            positionDescription="no"
                        />
                    </td>
            {
                Keys.map((keyObj, index) => {



                            if (keyObj === 'name') {
                                return <td
                                            key={index}
                                            uid={props.dataRow.uid}
                                            onClick={(event) => props.onclick(event, uid)}
                                        >
                                            {props.dataRow[keyObj]}

                                </td>
                            }

                            if (keyObj === 'isDeleted' || keyObj === 'isTemplate') {
                                return <td
                                            key={index}
                                            uid={props.dataRow.uid}
                                            onClick={(event) => props.onclick(event, uid)}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={inputChecked(props.dataRow[keyObj])}
                                                    disabled="disabled"

                                                /><span className="fa fa-check" aria-hidden="true"></span>
                                        </td>
                            }
   

                    
                }) 
            }
        
        </tr>
    )
}

export default RowCompareTable