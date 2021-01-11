import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import Checkbox from '../../UserInterface/Input/Checkbox';
import { employDescriptionAll } from '../../store/Flags/actionsFlags';
import Select from '../../UserInterface/Select/Select';
import { changeStyleSelect } from '../../store/Style/actionsStyle';
import { linkLoginAuthChange } from '../Navigation/Main';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';

function Personalize(props) {


    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const styleSelect = useSelector(state => state.stateStyle.styleSelect);
    const keysStyle = Object.keys(stateStylesAll);


    const hendlerStylesSelect = (event) => {
        event.preventDefault();
        if (event.target.tagName !== 'SELECT') return;
        dispatch(changeStyleSelect(event.target.value));
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
                    <Select
                        id="styleSelect"
                        onchange={hendlerStylesSelect}
                        value={styleSelect}
                        tabindex='1'
                        arrOptionSelect={keysStyle}
                     />
                </div>
                <Checkbox
                    label="Показывать всплывающие подсказки"
                    id="haveDescription"
                    type='checkbox'

                    onchange={HendlerHaveDescription}
                    checked={inputChecked(flagEmployDescription)}
                    classNameLabel=''
                    classNameCheckbox={stateStylesAll[styleSelect].beautifulCheckbox}
            />
            <ButtonLink
                onclick={()=>console.log('Открыть окно смены пароля LoginAuthСhange')}
                to={linkLoginAuthChange}
                name="Изменить пароль"
                icon="fa fa-user-secret"
            />

            </div>

    )
}

export default connect()(Personalize)