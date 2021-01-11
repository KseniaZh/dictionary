import React from 'react';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';

function WindowValidationResult(props) {

    return (

        <div className="">
            {
                props.flagWarning ?
                    <div>
                        <div>Внимание!</div>
                        <div>При попытке смены пароля неверно заполнены поля:</div>
                        {
                            props.warningPasswordOld ?
                                <div>Действующий пароль не подтвержден</div>
                                : null
                        }
                        {
                            props.warningPasswordNewFirst ?
                                <div>Новый пароль должен содержать не менее 8 символов</div>
                                : null
                        }
                        {
                            props.warningPasswordNewSecond ?
                                <div>Символы повторного ввода нового пароля не совпадают</div>
                                : null
                        }

                    </div>
                    : <div>
                        <div>Успешно!</div>
                        <ul>На этом этапе возможно:
                            <li>внести правки, вернувшись в окно ввода</li>
                            <li>отменить изменения и оставить действующий пароль</li>
                            <li>сохранить новый пароль</li>
                        </ul>

                        <ButtonLink
                            onclick={props.onclickSave}
                            to={props.to}
                            name="Сохранить"
                            icon="fa fa-floppy-o"
                        />

                        <ButtonLink
                            onclick={() =>{}}
                            to={props.to}
                            name="Отменить"
                            icon="fa fa-times"
                        />
                    </div>
            }
        </div>

    )
}

export default WindowValidationResult