import React from 'react';
import { NavLink } from 'react-router-dom';

function ButtonLink (props){
    
    return(
           
            <div 
                className={props.classname}
                onClick={() => props.onclick()}
                tabIndex={props.tabindex}
            >
                <NavLink 
                        to={props.to}
                        className="ButtonLinkNavLink"
                    > 
                    <span
                        className={props.icon}
                        aria-hidden="true"
                    >
                        {props.name}
                    </span>
                      

                </NavLink>
            </div>
    )
}

export default ButtonLink