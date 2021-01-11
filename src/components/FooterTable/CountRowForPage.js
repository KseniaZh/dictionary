import React from 'react';

import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import withHoverDescription from '../../hoc/withHoverDescription';
import DescriptionButton from '../../components/Description/DescriptionButton';
import Input from '../../UserInterface/Input/Input';


function CountRowForPage(props) {

    // логика всплывающей подсказки спрятана в hoc, обертка кнопок и подсказка реализованы в ButtonConsoleTable
    const ButtonWithHoverDescription = withHoverDescription(ButtonSmall, DescriptionButton);

    return (

        <>
          <div>
                {
                    props.dataButtonOpenInput.flag ?
                        <Input
                            id="inputCountRow"
                            type="number"
                            label="Строк на странице : "
                            onchange={props.onchangeInputValue}
                            value={props.inputValue}
                            tabindex="-1"
                        />
                        : <div> Строк на странице : <span> {props.CountRow} </span> из {props.length}</div>
                }
           </div>

                    <ButtonWithHoverDescription
                        className={props.classname}
                        onclick={props.onclickButtonInputOpen}
                        tabindex='-1'
                        icon={props.dataButtonOpenInput.icon}
                        name={props.dataButtonOpenInput.name}
                        classnameDescription={props.classnameDescription}
                        positionDescription="top"
                    />

            
        </>

    )
}

export default CountRowForPage