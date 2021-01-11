import React from 'react';

function Input (props){
    
    const data = props.data;
    const typeInput = props.type;
 
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
                    onChange={(event) => props.onchange(event, data, typeInput)}
                    value = {props.value}
                    tabIndex = {props.tabindex}
                    className={props.classNameInput}
                    autoComplete='off'
            />

            
        </div>
    )
}

export default Input