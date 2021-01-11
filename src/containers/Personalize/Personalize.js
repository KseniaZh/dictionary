import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import Checkbox from '../../UserInterface/Input/Checkbox';
import { employDescriptionAll } from '../../store/Flags/actionsFlags';
import Select from '../../UserInterface/Select/Select';
import { changeStyleSelect } from '../../store/Style/actionsStyle';
import { linkLoginAuthChange } from '../Navigation/Main';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';

function Personalize(props) {

    const persona = useSelector(state => state.stateAuthorization.user.name);
    const login = useSelector(state => state.stateAuthorization.user.login);

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const styleSelect = useSelector(state => state.stateStyle.styleSelect);
    const keysStyle = Object.keys(stateStylesAll);


    const hendlerStylesSelect = (event) => {
        event.preventDefault();
        if (event.target.tagName !== 'SELECT') return;
        dispatch(changeStyleSelect(event.target.value));
        localStorage.setItem('stylesInterface', event.target.value);
    }

    //переключение подсказок во всем приложении
    const flagEmployDescription = useSelector(state => state.stateFlagsAll.employDescriptionAll);

    const dispatch = useDispatch();

    const inputChecked = flag => {
        if (flag === true) {
            return "checked"
        } else {
            return ""
        }
    }
    const HendlerHaveDescription = (event) => {
        if (event.target.type === "checkbox") {
            dispatch(employDescriptionAll(!flagEmployDescription));
        }
    }


    return (
        <div className={stateStylesAll[styleSelect].personalize}>
            <div>
                <h1>Персонализация</h1>
                <h3>логин : <span>{login}</span></h3>
                <h3>{persona}</h3>
                

            </div>
            <div>
                <h2>Возможности: </h2>
              
                <Select
                    id="styleSelect"
                    onchange={hendlerStylesSelect}
                    value={styleSelect}
                    tabindex='1'
                    arrOptionSelect={keysStyle}
                    label="Выбор цветового решения интерфейса"
                    />
               
                <Checkbox
                    label="Согласие на всплывающие подсказки"
                    id="haveDescription"
                    type='checkbox'

                    onchange={HendlerHaveDescription}
                    checked={inputChecked(flagEmployDescription)}
                    classNameLabel=''
                    classNameCheckbox={stateStylesAll[styleSelect].beautifulCheckbox}
                />
                <div>
                    <ButtonLink
                        onclick={() => console.log('Открыть окно смены пароля LoginAuthСhange')}
                        to={linkLoginAuthChange}
                        name="Изменение действующего пароля"
                        icon=""
                    />
                    <ButtonLink
                        onclick={()=>console.log('Открыть окно смены пароля LoginAuthСhange')}
                        to={linkLoginAuthChange}
                        name=""
                        icon="fa fa-user-secret"
                        />
                </div>

            </div>
        </div>
    )
}

export default connect()(Personalize)