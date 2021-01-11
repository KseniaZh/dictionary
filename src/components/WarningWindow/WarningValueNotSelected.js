import React, { useState } from 'react';

import ButtonSmall from '../../UserInterface/Buttons/Button/ButtonSmall';
import ButtonLinkNotMouse from '../../UserInterface/Buttons/Button/ButtonLinkNotMouse';

function WarningValueNotSelected(props) {

    const [helper, setHelper] = useState(false);

    const hendlerButtonHelp = () => {
        setHelper(true);
    }

    return (
        <div className={props.classnameWrapper}>
            <div className={props.classnameWarningValueNotSelected}>

                {
                    helper ?
                        <div className={props.classnameWarningHelp}>
                            <h4>Для выбора значения:</h4>
                            <p><span className="fa fa-table" aria-hidden="true"> </span>вернитесь в таблицу</p>
                            <p><span className="fa fa-search" aria-hidden="true"> </span>выберите значение</p>
                            <p><span className="fa fa-hand-pointer-o" aria-hidden="true"></span>кликните по строке</p>
                            <p><span className="fa fa-check" aria-hidden="true"> </span>значение выбрано</p>
                            <p><span className="fa fa-hand-pointer-o" aria-hidden="true"> </span>выберите действие в консоли</p>
                        </div>
                       :<div>
                            <span className="fa fa-ban" aria-hidden="true"></span>
                            <div> Значение не выбрано</div>
                        </div>
                }

                <div >
                    <ButtonLinkNotMouse
                        classname={props.classnameButtonWarningComeBack}
                        onclick={props.onclickWarning}
                        name='Назад'
                        to={props.to}
                    />
                    {
                        helper ?
                            null
                        :   <ButtonSmall
                                classname={props.classnameButtonWarningHelp}
                                icon="fa fa-question"
                                onclick={hendlerButtonHelp}
                            />
                    }

                </div>
            </div>
        </div>
      
    )
}

export default WarningValueNotSelected