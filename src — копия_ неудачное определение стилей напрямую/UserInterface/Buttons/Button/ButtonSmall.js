import React from 'react';


function ButtonSmall (props){

    const data = props.data;

    return(
        <React.Fragment>
           
                <div 
                    className= {props.classname}
                    onClick = {(event)=>props.onclick(event, data)}
                    tabIndex = {props.tabindex}
                >    
                    <span
                            className={props.icon}
                            aria-hidden="true"                         
                    >
                    </span>

                </div>

        </React.Fragment>
    )
}

export default ButtonSmall
