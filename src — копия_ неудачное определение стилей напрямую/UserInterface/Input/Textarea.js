import React from 'react';

function Textarea (props){
    
    const data = props.data;
//    const ref= useRef();
//    
//    useEffect( ()=>{
//        ref.current.focus();    
//    }, []);
//    
    return(
        <div>
        
            <label 
                    htmlFor={props.id}
                    className={props.classNameLabel}
        
            >
                {props.label}
            </label>
        
/           <textarea
                    ref = {props.refTextarea}
                    id = {props.id}
                    placeholder = {props.placeholder}
                    onChange = {(event)=>props.onchange(event, data)}
                    tabIndex = {props.tabindex}
                    value = {props.value}
                    className = {props.classNameTextarea}
                    required ={props.required}
                    cols = {props.cols}
                    rows = {props.rows}
                    disabled = {props.disabled}

            />
        
            
        </div>
    )
}

export default Textarea