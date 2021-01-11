import React from 'react';
import { NavLink } from 'react-router-dom';


function WindowLinksButtonsConsole (props){
    
    return(

        <div className={props.classname}>
       
            <div 
                onClick = {props.onclickYesButton}
            >
                <NavLink
                    to = {props.to}
                > 
                    <b>{props.nameYesButton}</b>
                </NavLink>
            </div>
        
            <div 
                onClick={props.onclickNoButton}
            >
                <NavLink
                    to = {props.to}
                > 
                    <b>{props.nameNoButton}</b>
                </NavLink>
            </div>

        </div>

    )
}

export default WindowLinksButtonsConsole