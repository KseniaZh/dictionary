import React from 'react';
import { NavLink } from 'react-router-dom';

function ButtonLinkSmall (props){
    
    return(
                <div 
                        className={props.classname}
                        onClick={props.onclick}
                        tabIndex={props.tabindex}
                >
                    <NavLink 
                            to={props.to}
                            exact={props.exact}
                    > 
                        <span
                                className={props.icon}
                                aria-hidden="true"                         
                        >
                        </span>

                    </NavLink>
                </div>
    )
}

export default ButtonLinkSmall