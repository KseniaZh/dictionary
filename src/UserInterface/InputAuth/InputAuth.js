import React, { useEffect, useRef, useState} from 'react';
import ButtonSmall from '../Buttons/Button/ButtonSmall';

function InputAuth(props){
    
    const ref = useRef(props.value);
    const autoFocus = props.autofocus;
    const nameInput = props.id;
    const flagInput = props.flagInput;


    useEffect(() => {
        if (autoFocus === true) {
            ref.current.focus();
        }
    }, []);
        
    return(
        <div>
        
            <label 
                    htmlFor={props.id}
            >
                {props.label}
            </label>
        
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={(event) => props.onchange(event, nameInput)}
                onFocus={() => props.onfocus(nameInput, flagInput)}
                onKeyDown={props.onkeydown}
                value={props.value}
                tabIndex={props.tabindex}
                disabled={props.disabled}
                ref={ref}
                autoComplete='off'
                style={props.styles}
            />

            <ButtonSmall
                onclick={props.onclick}
                data={nameInput}
                icon="fa fa-times"
            />
            
        </div>
    )
}

export default InputAuth