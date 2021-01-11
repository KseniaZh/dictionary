import React, { useEffect, useRef } from 'react';

function Input (props){
    
    const data = props.data;
    const typeInput = props.type;

    const ref = useRef(props.value);

    useEffect(() => {
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
                    placeholder={props.placeholder}
                    onChange={(event) => props.onchange(event, data, typeInput)}
                    value = {props.value}
                    tabIndex = {props.tabindex}
                    className={props.classNameInput}
                    autoComplete='off'
                    ref={ref}
            />

            
        </div>
    )
}

export default Input

