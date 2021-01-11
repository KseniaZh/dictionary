import React, {useEffect, useRef} from 'react';

function Input (props){
    
    const data = props.data;
    const ref = useRef(props.value);
    
    useEffect( ()=>{
        ref.current.focus();
    }, []);
        
    return(
        <div>
        
            <label 
                    htmlFor={props.id}
                    className={props.classNameLabel}
        
            >
                {props.label}
            </label>
        
            <input
                    id = {props.id}
                    type = {props.type}
                    placeholder = {props.placeholder}
                    onChange = {(event)=>props.onchange(event, data)}
                    onBlur = {()=>props.onblur(data)}
                    data = {props.data}
                    value = {props.value}
                    tabIndex = {props.tabindex}
                    className = {props.classNameInput}
                    autoFocus = {props.autofocus}
                    disabled = {props.disabled}
                    ref={ref}
                    autocomplete='off'

            />

            
        </div>
    )
}

export default Input