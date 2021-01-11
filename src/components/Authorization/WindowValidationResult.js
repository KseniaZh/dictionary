import React from 'react';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';

function WindowValidationResult(props) {

    return (

        <div className="">
            {
                props.flagWarning ?
                    <div>
                     
                        <h3>Неверно заполнены поля:</h3>
                        {
                            props.warningPasswordOld ?
                                <div><span className="fa fa-exclamation-triangle" aria-hidden="true"></span>Действующий пароль не подтвержден</div>
                                : null
                        }
                        {
                            props.warningPasswordNewFirst ?
                                <div><span className="fa fa-exclamation-triangle" aria-hidden="true"></span>Новый пароль должен содержать не менее 8 символов</div>
                                : null
                        }
                        {
                            props.warningPasswordNewSecond ?
                                <div><span className="fa fa-exclamation-triangle" aria-hidden="true"></span>Символы повторного ввода нового пароля не совпадают</div>
                                : null
                        }

                    </div>
                    : <div>
                        <h3>Успешно! На данном этапе возможно:</h3>
                            <div><span className="fa fa-pencil-square-o" aria-hidden="true"></span> внести правки, вернувшись в окно ввода</div>
                            <div><span className="fa fa-share-square-o" aria-hidden="true"></span> отменить изменения и оставить действующий пароль</div>
                            <div><span className="fa fa-floppy-o" aria-hidden="true"></span> сохранить новый пароль</div>
                        <h4>Подтвердите смену пароля:</h4>
                            <div>
                                <div>
                                    <ButtonLink
                                        onclick={props.onclickSave}
                                        to={props.to}
                                        name="Сохранить"
                                        icon=""
                                    />

                                    <ButtonLink
                                        onclick={() =>{}}
                                        to={props.to}
                                        name=""
                                        icon="fa fa-share"
                                        />
                                </div>
                            </div>
                    </div>
            }
        </div>

    )
}

export default WindowValidationResult