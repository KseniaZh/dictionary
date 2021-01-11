import React from 'react';
import withHoverDescription from '../../hoc/withHoverDescription';
import ButtonLinkSmall from '../../UserInterface/Buttons/Button/ButtonLinkSmall';
import DescriptionButton from '../../components/Description/DescriptionButton';

function ConsoleButton (props){

    // логика всплывающей подсказки спрятана в обертку hoc
    const ButtonConsoleTable = withHoverDescription(ButtonLinkSmall, DescriptionButton);

    return(
        <div className={props.classnameHeaderConsole}>

            {
                props.stateConsoleButton.map((obj, index) =>
                    <ButtonConsoleTable
                        to={obj.link}
                        onclick={obj.onclick}
                        tabindex="-1"
                        text={obj.text}
                        name={obj.name}
                        icon={obj.icon}
                        positionDescription="botton"
                        classnameDescription={props.classnameDescription}
                        key={index}
                    />)
            }
        </div>
    )
}

export default ConsoleButton
