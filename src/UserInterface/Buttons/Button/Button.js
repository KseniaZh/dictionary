import React from 'react';


function Button(props) {

    const data = props.data;
    
    return(

            <div 
                className= {props.classname}
                onClick={() => props.onclick(data)}
                tabIndex = {props.tabindex}
            >    
                <span
                    className={props.icon}
                    aria-hidden="true" 
                >
                        
                </span>
                <span>{props.name}</span>
            </div>

    )
}

export default Button
