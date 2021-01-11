import React from 'react';


function WindowButtonsConsole (props){
    
    return(

        <div className={props.classWrapper}>
        
            <div className= {props.classButtonWrapper}>
                <div 
                    onClick={props.onclickYesButton }
                    className = {props.classButton}
                    >
                    <b>{props.nameYesButton}</b>
                </div>
            </div>
            <div />
            <div />
            <div className= {props.classButtonWrapper}>
                <div 
                    onClick={props.onclickNoButton}
                    className = {props.classButton}
                    >
                    <b>{props.nameNoButton}</b>
                </div>
            </div>

        </div>

    )
}

export default WindowButtonsConsole