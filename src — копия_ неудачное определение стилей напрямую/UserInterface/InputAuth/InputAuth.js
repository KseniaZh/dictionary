import React, {useEffect, useRef} from 'react';

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
                {props.placeholder}
            </label>
        
            <input
                    id = {props.id}
                    type = {props.type}
                    placeholder = {props.placeholder}
                    onChange={(event) => props.onchange(event, nameInput)}
                    onFocus={() => props.onfocus( nameInput, flagInput)}
                    value = {props.value}
                    tabIndex = {props.tabindex}
                    disabled = {props.disabled}
                    ref={ref}
                    autoComplete = 'off'
            />
            <button
                onClick={() => props.onclick(nameInput)}
            >
                <span className="fa fa-times" aria-hidden="true"></span>
            </button>
            
        </div>
    )
}

export default InputAuth