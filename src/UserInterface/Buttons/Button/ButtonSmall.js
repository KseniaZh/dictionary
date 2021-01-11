import React from 'react';


function ButtonSmall (props){

    const data = props.data;

    return(        
            <div 
                className= {props.classname}

                tabIndex = {props.tabindex}
            >    
                <span
                        className={props.icon}
                        aria-hidden="true" 
                        onClick={(event) => props.onclick(event, data)}
                >
                </span>

            </div>
    )
}

export default ButtonSmall
