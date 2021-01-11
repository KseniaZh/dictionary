import React from 'react';
import ButtonLinkSmall from '../../UserInterface/Buttons/Button/ButtonLinkSmall';
import Input from '../../UserInterface/Input/Input';
import Checkbox from '../../UserInterface/Input/Checkbox';
import WindowLinksButtonsConsole from '../../UserInterface/Buttons/WindowLinksButtonsConsole';

function ComponentEditWindow_EltypeClass (props){
    
    const stateData = props.stateData;
    const stateKeys = Object.keys(stateData);

    const checkedInput = data => {
 
        if (stateData[data] === true) {
            return "checked"
        } else {
            return ""
        }
    }

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
                    <h3>{props.nameWindow}</h3>
                </div>
        
                <form>
                    <Input 
                            data = {stateKeys[1]}
                            id = {stateKeys[1]}
                            label = {props.labels[1]}
                            type = {props.typeData[1]}
                            placeholder = {props.placeholders[1]}
                            value = {stateData[stateKeys[1]]}
                            onchange = {props.onchange}
                            tabindex = '2'
                        />
                
                    <Checkbox 
                            data = {stateKeys[2]}
                            id = {stateKeys[2]}
                            label = {props.labels[2]}
                            type={props.typeData[2]}
                            checked={checkedInput(stateKeys[2])}
                            classNameCheckbox={props.classNameCheckbox}
                            onchange = {props.onchange}
                            tabindex='3'
                        />

                    <Checkbox 
                            data = {stateKeys[3]}
                            id = {stateKeys[3]}
                            label = {props.labels[3]}
                            type={props.typeData[3]}
                            checked={checkedInput(stateKeys[3])}
                            classNameCheckbox={props.classNameCheckbox}
                            onchange = {props.onchange}
                            tabindex = '4'
                        />
                
                </form>
        
                <WindowLinksButtonsConsole
                            nameYesButton="Сохранить"
                            onclickYesButton={props.onclickYesButton}
                            nameNoButton="Отмена"
                            onclickNoButton={props.onclickNoButton}
                            classWrapper={props.classWrapper}
                            classButtonWrapper={props.classButtonWrapper}
                            classButton={props.classButton}
                            to={props.to}
                    />
            </div>
        </div>

    )
}

export default ComponentEditWindow_EltypeClass