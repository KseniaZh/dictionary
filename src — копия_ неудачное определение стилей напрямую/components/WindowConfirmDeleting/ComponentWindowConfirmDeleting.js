import React from 'react';

import ButtonLinkSmall from '../../UserInterface/Buttons/Button/ButtonLinkSmall';
import WindowLinksButtonsConsole from '../../UserInterface/Buttons/WindowLinksButtonsConsole'

function ComponentWindowConfirmDeleting(props) {
    return (
        <div className={props.classnameWrapper}>
            <div className={props.classnameWindow}>
                <ButtonLinkSmall
                    onclick={props.onclickNoButton}
                    to={props.to}
                    tabindex="-1"
                    icon="fa fa-times"
                />
                <div>
                    <p>
                        Подтвердите удаление:
                    </p>
                    <p>
                        {props.dataDelete}
                    </p>
                </div>

                <WindowLinksButtonsConsole
                    to={props.to}
                    nameYesButton="Удалить"
                    onclickYesButton={props.onclickYesButton}
                    nameNoButton="Отмена"
                    onclickNoButton={props.onclickNoButton}
                />

            </div>
        </div>
    )
}

export default ComponentWindowConfirmDeleting