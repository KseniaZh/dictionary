import React from 'react';


function InputDatalist(props) {

    const searchKey = props.searchKey;

    return(
        <div className={props.classInputDatalis}>
        
            <label 
                    htmlFor={props.id}  
            >
                {props.label}
            </label>
        
                <input
                        id={props.id}
                        list={props.listId}
                        type='text'
                        placeholder={props.placeholder}
                        onChange={(event) => props.onchange(event)}

                        tabIndex={props.tabindex}
                        autoComplete={props.autocomplete}
                />

                <datalist id={props.listId} >
                    {
                        props.arrValue.map((data, index) => {
                            return <option key={index} value={data[searchKey]} ></option>
                            })
                    }
                </datalist>
            
        </div>
    )
}

export default InputDatalist

