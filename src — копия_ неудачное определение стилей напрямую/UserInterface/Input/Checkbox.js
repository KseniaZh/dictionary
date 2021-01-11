import React from 'react';

function Checkbox (props){
    
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
            
            <label
                className={props.classNameCheckbox}
            >
                <input
                        id = {props.id}
                        type = {props.type}
                        onChange={(event) => props.onchange(event, data, typeInput)}
                        checked={props.checked}
                        tabIndex={props.tabindex}
                        className={props.classNameCheckbox}
                />
          
            </label>
        </div>
    )
}

export default Checkbox

//      <span className="fa fa-check" aria-hidden="true"></span>