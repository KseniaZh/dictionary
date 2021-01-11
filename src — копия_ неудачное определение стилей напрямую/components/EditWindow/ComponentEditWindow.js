import React from 'react';
import ButtonLinkSmall from '../../UserInterface/Buttons/Button/ButtonLinkSmall';
import Input from '../../UserInterface/Input/Input';
import Checkbox from '../../UserInterface/Input/Checkbox';
import WindowLinksButtonsConsole from '../../UserInterface/Buttons/WindowLinksButtonsConsole';

function ComponentEditWindow (props){
    
    const stateData = props.stateData;
    const stateKeys = Object.keys(stateData).filter(key => key != "uid");

//"uid": "",
//"login": "",
//"name": "",
//"password": "",
//"isDeleted": false,
//"isSuperUser": false,
//"docInfo": [],
//"projectAuthorU": [],
//"projectUpdaterU": [],
//"userProjects": []

    //labels: [
    //    'uid',
    //    'login',
    //    'Ф.И.О.',
    //    'пароль',
    //    'isDeleted',
    //    'isSuperUser'
    //],
    //    placeholders: [
    //        'uid',
    //        'login',
    //        'Ф.И.О.',
    //        'пароль',
    //        'isDeleted',
    //        'isSuperUser'
    //    ],
    //        typeData: [
    //            "text",
    //            "text",
    //            "text",
    //            "text",
    //            "checkbox",
    //            "checkbox"
    //        ],
        //typeInput: [
        //    "input",
        //    "input",
        //    "input",
        //    "input",
        //    "checkbox",
        //    "checkbox"
        //]

    const checkedInput = data => {
 
        if (stateData[data] === true) {
            return "checked"
        } else {
            return ""
        }
    }

    return (
        <div className={props.classnameWrapper}>
            <div className={props.classnameWindow}>
        
                <ButtonLinkSmall
                    onclick={props.onclickNoButton}
                    to={props.to}
                    tabindex="-1"
                    icon="fa fa-times"
                />
        
                <div>
                    <h3>{props.nameWindow}</h3>
                </div>
        
                <form>
                    {
                        props.typeInput.map((data, index) => {

                            if (data === "input") {
                                return <Input
                                            data={stateKeys[index]}
                                            id={stateKeys[index]}
                                            label={props.labels[index]}
                                            type={props.typeData[index]}
                                            placeholder={props.placeholders[index]}
                                            value={stateData[stateKeys[index]]}
                                            onchange={props.onchange}
                                            tabindex={index +2}
                                            key={index}
                                        />
                            }
                            if (data === "checkbox") {

                                return <Checkbox
                                            data={stateKeys[index]}
                                            id={stateKeys[index]}
                                            label={props.labels[index]}
                                            type={props.typeData[index]}
                                            checked={checkedInput(stateKeys[index])}
                                            classNameCheckbox={props.classNameCheckbox}
                                            onchange={props.onchange}
                                            tabindex={index + 2}
                                            key={index}
                                        />
                            }
                        })
                    }
                </form>
        
                <WindowLinksButtonsConsole
                            nameYesButton="Сохранить"
                            onclickYesButton={props.onclickYesButton}
                            nameNoButton="Отмена"
                            onclickNoButton={props.onclickNoButton}
                            classWrapper={props.classWrapper}
                            classButtonWrapper={props.classButtonWrapper}
                            classButton={props.classButton}
                            to={props.to}
                    />
            </div>
        </div>

    )
}

export default ComponentEditWindow