import React from 'react';
import Button from '../../UserInterface/Buttons/Button/Button';
import ButtonLinkSmallNotMouse from '../../UserInterface/Buttons/Button/ButtonLinkSmallNotMouse';

function ContextMenuCompare(props) {

    const stateButton = props.stateConsoleButton;

    return (
        <div
            className={props.classname}
            style={{ top: props.clientY, left: props.clientX }}
        >
            <Button
                    onclick={stateButton[3].onclick}
                    tabindex='1'
                    name={stateButton[3].text}
                    data={stateButton[3].data}
                />

            <hr />

            <div>

                    <ButtonLinkSmallNotMouse
                            to={stateButton[0].link}
                            onclick={stateButton[0].onclick}
                            tabindex='2'
                            icon={stateButton[0].icon}
                        />
                    <ButtonLinkSmallNotMouse
                            to={stateButton[1].link}
                            onclick={stateButton[1].onclick}
                            tabindex='3'
                            icon={stateButton[1].icon}
                        />
                    <ButtonLinkSmallNotMouse
                            to={stateButton[2].link}
                            onclick={stateButton[2].onclick}
                            tabindex='4'
                            icon={stateButton[2].icon}
                        />
                    <ButtonLinkSmallNotMouse
                            to={stateButton[4].link}
                            onclick={stateButton[4].onclick}
                            tabindex="5"
                            icon={stateButton[4].icon}
                        />

            </div>

        </div>
    )
}

export default ContextMenuCompare