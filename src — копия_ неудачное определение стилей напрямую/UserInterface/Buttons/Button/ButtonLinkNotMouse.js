import React from 'react';
import { NavLink } from 'react-router-dom';

function ButtonLinkNotMouse (props){
    
    return(
           
        <div 
                className={props.classname}
                onClick={() => props.onclick()}
                tabIndex={props.tabindex}
        >
            <NavLink 
                    to={props.to}
                    exact={props.exact}
            > 
                {props.name}

            </NavLink>

        </div>
    )
}

export default ButtonLinkNotMouse