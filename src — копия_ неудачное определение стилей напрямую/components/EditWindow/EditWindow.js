import React from 'react';
import ButtonLinkSmall from '../../UserInterface/Buttons/Button/ButtonLinkSmall';
import Input from '../../UserInterface/Input/Input';
import Textarea from '../../UserInterface/Input/Textarea';
import WindowLinksButtonsConsole from '../../UserInterface/Buttons/WindowLinksButtonsConsole';

function EditWindow (props){
    
    const stateData = props.stateData;
    const stateKeys = Object.keys(stateData);
    
    return (

        <div className="">
        
            <ButtonLinkSmall
                onclick={props.onclickNoButton}
                onmouseover={props.onmouseover}
                onmouseleave={props.onmouseleave}
                to={props.to}
                tabindex="-1"
                icon="fa fa-times"
            />

            <div>
                <h4>{props.nameWindow}</h4>
            </div>
        
            <form>
                <Input 
                        refInput = {props.ref}
                        data = {stateKeys[0]}
                        id = {stateKeys[0]}
                        label = {props.labels[0]}
                        type = {props.typeData[0]}
                        placeholder = {props.placeholders[0]}
                        value = {stateData[stateKeys[0]]}
                        onchange = {props.onchange}
                        tabindex = '1'
                        classNameLabel = {props.classNameLabel}
                        classNameInput = {props.classNameInput}
                    />
                <Input 
                        data = {stateKeys[1]}
                        id = {stateKeys[1]}
                        label = {props.labels[1]}
                        type = {props.typeData[1]}
                        placeholder = {props.placeholders[1]}
                        value = {stateData[stateKeys[1]]}
                        onchange = {props.onchange}
                        tabindex = '2'
                        classNameLabel = {props.classNameLabel}
                        classNameInput = {props.classNameInput}
                    />
                <Textarea 
                        data = {stateKeys[2]}
                        id = {stateKeys[2]}
                        label = {props.labels[2]}
                        cols = "20"
                        rows = "5"
                        placeholder = {props.placeholders[2]}
                        value = {stateData[stateKeys[2]]}
                        onchange = {props.onchange}
                        tabindex = {props.tabIndex3}
                        classNameLabel = {props.classNameLabel}
                        classNameTextarea = {props.classNameTextarea}
                    />
                <Input 
                        data = {stateKeys[3]}
                        id = {stateKeys[3]}
                        label = {props.labels[3]}
                        type = {props.typeData[3]}
                        placeholder = {props.placeholders[3]}
                        value = {stateData[stateKeys[3]]}
                        onchange = {props.onchange}
                        tabindex = {props.tabIndex4}
                        classNameLabel = {props.classNameLabel}
                        classNameInput = {props.classNameInput}
                    />
                <Input 
                        data = {stateKeys[4]}
                        id = {stateKeys[4]}
                        label = {props.labels[4]}
                        type = {props.typeData[4]}
                        placeholder = {props.placeholders[4]}
                        value = {stateData[stateKeys[4]]}
                        onchange = {props.onchange}
                        tabindex = {props.tabIndex5}
                        classNameLabel = {props.classNameLabel}
                        classNameInput = {props.classNameInput}
                    />
                
            </form>
        
            <WindowLinksButtonsConsole
                        name1={props.nameButtonSave}
                        onclick1={props.onclick1}
                        name2={props.nameButtonClose}
                        onclick2={props.onclick2}
                        classWrapper={props.classWrapper}
                        classButtonWrapper={props.classButtonWrapper}
                        classButton={props.classButton}
                        to={props.to}
                />

        </div>

    )
}

export default EditWindow