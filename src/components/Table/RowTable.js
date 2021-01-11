import React, {useEffect, useState } from 'react';
import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withHoverDescription from '../../hoc/withHoverDescription';
import DescriptionButton from '../../components/Description/DescriptionButton';

function RowTable(props) {
    
    const Keys = Object.keys(props.dataRow).filter(key => key !== "uid");
    const uid = props.dataRow.uid;

    const inputChecked = data => data ? 'checked' : false;

   
    const deleteRowfromCompare = (event, data) => {
        event.stopPropagation(); //останавливаем всплытие события
        props.onclick(event, uid); // появляется из hoc withClickSaveFocus в компоненте TableList
        props.onclickDelete(data);
    }

    const addRowfromCompare = (event, data) => {
        event.stopPropagation(); //останавливаем всплытие события
        props.onclick(event, uid); // появляется из hoc withClickSaveFocus в компоненте TableList
        props.onclickButtonRowClickAddCompareData(data);
    }
    const [styleRow, setStyleRow] = useState({ background: `${props.colorRowTableBackground}`, 'fontWeight': 'normal'});

    const [buttonRow, setButtonRow] = useState({icon: "fa fa-filter fa-lg", name: 'addCompare', func: addRowfromCompare });

    // логика всплывающей подсказки спрятана в hoc, обертка кнопок и подсказка реализованы в ButtonConsoleTable
    const ButtonRow = withHoverDescription(ButtonSmall, DescriptionButton);

    const hendlerClick = (event) => {
        props.onclick(event, uid);
    }

    useEffect(() => {

        // кнопка добавить/убрать из сравнения в начале строки основной таблицы, данные сохраняются после перерисовки
        if (props.flagOpenCompareWindow === false) {
            props.compareArrUid.map(arrUid => {
                if (arrUid === uid) {
                    setButtonRow((prevState) => {
                        return { icon: "fa fa-times-circle", name: "DeleteRow", func: deleteRowfromCompare};
                    })
                }
            })
        };

        //выделение строки фокуса цветом
        if (props.focusData.uid === uid) {
            setStyleRow((prevState) => {
                return {background: `${props.colorFocusRowBackground}`, 'fontWeight': '600' };
            })
        };
    }, [])

    return(

        <tr className={props.classnameRowTable} style={styleRow}>
            {
                props.flagOpenCompareWindow ?
                    <td onClick={deleteRowfromCompare} >
                        <ButtonRow
                            icon="fa fa-times-circle"
                            onclick={deleteRowfromCompare}
                            data={props.dataRow}
                            name="DeleteRow"
                            classnameDescription={props.classnameDescription }
                            positionDescription="no"
                        />
                    </td>
                    : <td>
                        <ButtonRow
                            icon={buttonRow.icon}
                            onclick={buttonRow.func}
                            data={props.dataRow}
                            name={buttonRow.name}
                            classnameDescription={props.classnameDescription}
                            positionDescription="no"
                        />
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
                                        >
                                            {props.dataRow[keyObj]}
                                        </td>
                            }

                        if (props.typeDataColumns[index] === 'checkbox') {
                                return <td
                                        key={index}
                                        uid={props.dataRow.uid}
                                        onClick={hendlerClick}
                                >
                                        < input
                                            type="checkbox"
                                            checked={inputChecked(props.dataRow[keyObj])}
                                            disabled="disabled"
                                            className={props.classnameCheckbox}
                                            style={styleRow}
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



