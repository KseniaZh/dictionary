import React from 'react';
import InputDatalist from '../../UserInterface/Input/InputDatalist';
import ConsoleButton from '../../components/ConsoleButton/ConsoleButton';

function HeaderDictionary(props) {
    const lab = <span className="fa fa-search" aria-hidden="true"></span>
    
    return (
        <div className={props.classnameHeaderContainer}>
            <ConsoleButton
                classnameHeaderConsole={props.classnameHeaderConsole}
                stateConsoleButton={props.stateConsoleButton}
                classnameDescription={props.classnameDescription}
                tabindex="-1"
            />
            <div className={props.classnameHeader}>
                <h1>{props.nameHeader}</h1>    
                <InputDatalist
                    id='SearchBaseName'
                    listId='SearchNameBase'
                    placeholder={`Поиск: ${props.searchKey}`}
                    arrValue={props.stateTable}
                    searchKey={props.searchKey}
                    autocomplete='off'
                    onchange={props.onchangeSearch}
                    label={lab}
                    classInputDatalis={props.classnameSearchDatalis}

                />
            </div>
            
        </div>
        
    )
}

export default HeaderDictionary