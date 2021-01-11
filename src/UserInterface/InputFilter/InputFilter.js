import React from 'react';
import ButtonSmall from '../Buttons/Button/ButtonSmall';
import DescriptionButton from '../../components/Description/DescriptionButton';
import withHoverDescription from '../../hoc/withHoverDescription';
import Input from '../Input/Input';

function InputFilter(props) {

    // логика всплывающей подсказки спрятана в обертку hoc, обертка кнопок и подсказка реализованы в ButtonConsoleTable
    const ButtonWithHoverDescription = withHoverDescription(ButtonSmall, DescriptionButton);

    return (

        <div className={props.classnameFilter}>
            {
                props.flagOpenFilter ?
                    <ButtonWithHoverDescription
                        onclick={props.onclickCloseFilter}
                        name="FilterInputClose"
                        icon="fa fa-times"
                        positionDescription="botton"
                        classnameDescription={props.classnameDescription}
                        tabindex="-1"
                    />
                    : <ButtonWithHoverDescription
                        onclick={props.onclickOpenFilter}
                        name="FilterInputOpen"
                        icon="fa fa-binoculars"
                        positionDescription="botton"
                        classnameDescription={props.classnameDescription}
                        tabindex="-1"
                    />
            }
            {
                props.flagOpenFilter ?
                    <Input
                        id={props.id}
                        type='text'
                        placeholder={props.placeholder}
                        onchange={props.onchange}
                        value={props.value}
                        tabIndex='-1'
                        classNameInput={props.classNameInput}
                    />
                    : <div
                        onClick={props.onclickOpenFilter}
                    >
                        {props.placeholder}
                    </div>
            }
        </div>

    )
}

export default InputFilter