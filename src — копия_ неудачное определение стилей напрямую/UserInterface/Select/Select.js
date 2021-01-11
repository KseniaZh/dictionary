import React from 'react';

function Select (props){
    
    const data = props.data;
 
    return(
        <div>
        
            <label 
                    htmlFor={props.id}
                    className={props.classNameLabel}
            >
                {props.label}
           </label>


            <select
                id={props.id}
                className={props.classNameSelect}
                placeholder={props.placeholder}
                onChange={(event) => props.onchange(event, data)}
                value={props.value}
                tabIndex={props.tabindex}
            >

                {
                    props.arrOptionSelect.map((data, index) => {
                        return <option key={index} value={data} >
                                    {data}
                                </option>
                    })
                }
            </select>
            
        </div>
    )
}

export default Select