import React from 'react';


function Button(props) {

    const data = props.data;
    
    return(
        <React.Fragment>
           
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

        </React.Fragment>
    )
}

export default Button
