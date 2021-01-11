import React from 'react';
import InputDatalist from '../../UserInterface/Input/InputDatalist';
import InputFilter from '../../UserInterface/InputFilter/InputFilter';
import ConsoleButton from '../../components/ConsoleButton/ConsoleButton';

function HeaderDictionary(props) {
    const labelSearchBase = <span className="fa fa-search" aria-hidden="true"></span>

    const arrValue = () => {
        if (props.flagOpenFilter === true) {
            return props.dataTable 
        } else {
            return props.stateTable
        }
    }
    
    return (
        <div>
            <ConsoleButton
                classnameHeaderConsole={props.classnameHeaderConsole}
                stateConsoleButton={props.stateConsoleButton}
                classnameDescription={props.classnameDescription}
                tabindex="-1"
            />
            <div>
                <h1>{props.nameHeader}</h1>    
                <InputDatalist
                    id='SearchBaseName'
                    label={labelSearchBase}
                    listId='SearchNameBase'
                    placeholder={`Поиск: ${props.searchKey}`}
                    arrValue={arrValue()}
                    searchKey={props.searchKey}
                    autocomplete='off'
                    onchange={props.onchangeSearch}
                    classInputDatalis={props.classnameSearchDatalis}

                />
                <InputFilter
                    flagOpenFilter={props.flagOpenFilter}
                    onclickCloseFilter={props.onclickCloseFilter}
                    onclickOpenFilter={props.onclickOpenFilter}
                    classnameFilter={props.classnameFilter}
                    classnameDescription={props.classnameDescription}
                    classNameInput={props.classNameInputFilterBase}
                    id='filterBase'
                    placeholder={`Фильтр : ${props.searchKey}`}
                    onchange={props.onchangeFilterBase}
                    value={props.valueFilterBase}
                    />
               
            </div>
            
        </div>
        
    )
}

export default HeaderDictionary