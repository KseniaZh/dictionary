import React from 'react';


import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import Button from '../../UserInterface/Buttons/Button/Button';
import Input from '../../UserInterface/Input/Input';


function ConsoleCountRow(props) {



    const fullArrNumberPages = [];
    let activArrNumberPages = [];

    for (let i = 0; i < props.counterPages; i++) {
        fullArrNumberPages[i] = i + 1;
    };

    if (props.numberActivList === 1) {
        activArrNumberPages = [1, 2, 3];
    } else if (props.numberActivList === fullArrNumberPages.length) {
        activArrNumberPages[0] = fullArrNumberPages.length - 2;
        activArrNumberPages[1] = fullArrNumberPages.length - 1;
        activArrNumberPages[2] = fullArrNumberPages.length;
    } else {
        activArrNumberPages = fullArrNumberPages.filter(num => (num === props.numberActivList || num === (props.numberActivList - 1) || num === (props.numberActivList + 1)));
    };

    const hendlerStartButtonConsole = () => {

    }

    const hendlerFinishButtonConsole = () => {

    }
    const hendlerPrevButton = () => {

    }
    const hendlerNextButton = () => {

    }

    return (

        <div className={props.classname}>

            <div>
                Открыта страница<span>{props.numberActivList}</span> из <span>{fullArrNumberPages.length}</span>
            </div>

            <div>
                {
                    fullArrNumberPages.length > 3 && props.numberActivList > 2 ?
                        <>
                            <Button
                                onclick={hendlerStartButtonConsole}
                                tabindex='-1'
                                icon="fa fa-step-backward" 

                            />
                            <Button
                                onclick={hendlerPrevButton}
                                tabindex='-1'
                                icon="fa fa-caret-left"

                            />
                        </>
                        : null
                }
                {
                    activArrNumberPages.map((num, index) => {
                                return <Button
                                            onclick={props.onclick}
                                            tabindex='-1'
                                            name={num}
                                            data={num}
                                            key={index}
                                        />
                    })
                }
                {
                    fullArrNumberPages.length > 3 && props.numberActivList < (fullArrNumberPages.length -1) ?
                        <>
                            <Button
                                onclick={hendlerNextButton}
                                tabindex='-1'
                                icon="fa fa-caret-right"

                            />
                            <Button
                                onclick={hendlerFinishButtonConsole}
                                tabindex='-1'
                                icon="fa fa-step-forward"

                            />
                        </>
                        : null
                }
            </div>
            
               
            <div>
                {
                    props.flagCountRow ?
                        <Input
                            id="inputCountRow"
                            type="number"
                            label="Строк на странице : "
                            onchange={props.onchange}
                            value={props.CountRow}
                            tabindex="-1"
                        />
                        : <div> Строк на странице : <span> {props.CountRow} </span></div>
                }
            </div>
            {
                props.flagCountRow ?
                    <ButtonSmall
                        className={props.classnameButtonConsoleCountRow}
                        onclick={props.onclickInputSave}
                        tabindex='-1'
                        icon="fa fa-floppy-o"
                    />
                    :<ButtonSmall
                        className={props.classnameButtonConsoleCountRow}
                        onclick={props.onclickInputOpen}
                        tabindex='-1'
                        icon="fa fa-pencil"
                    />
             }

           

            
        </div>

    )
}

export default ConsoleCountRow