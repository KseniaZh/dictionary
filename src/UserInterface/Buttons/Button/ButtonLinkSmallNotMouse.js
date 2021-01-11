import React from 'react';
import { NavLink } from 'react-router-dom';

function ButtonLinkSmallNotMouse (props){
    
    return(
        <React.Fragment>
           
                <div 
                    className={props.classname}
                    tabIndex={props.tabindex}
                    onClick={props.onclick}
                >
                    <NavLink 
                            to={props.to}
                    > 
                        <span
                                className={props.icon}
                                aria-hidden="true"                         
                        >
                        </span>


                    </NavLink>
                </div>

        </React.Fragment>
    )
}

export default ButtonLinkSmallNotMouse