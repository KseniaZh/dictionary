import React from 'react';
import ConsoleButton from '../../components/ConsoleButton/ConsoleButton';
import ButtonLinkSmallNotMouse from '../../UserInterface/Buttons/Button/ButtonLinkSmallNotMouse';

function HeaderCompare (props){
    
    return (

        <div className={props.classnameHeaderContainer}>

            <ConsoleButton
                classnameHeaderConsole={props.classnameHeaderConsole}
                stateConsoleButton={props.stateConsoleButton}
                classnameDescription={props.classnameDescription}
                tabindex="-1"
            />

            <div className={props.classnameHeader}>
                <h2>{props.nameBase}</h2>
                <h1>{props.nameHeader}</h1>
            </div>

            <ButtonLinkSmallNotMouse
                to={props.to}
                icon="fa fa-share"
                onclick={props.hendlerCloseWindow}
            />
        </div>

        
    )
}

export default HeaderCompare