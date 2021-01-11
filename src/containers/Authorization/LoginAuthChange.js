import React from 'react';
import { connect } from 'react-redux';

import InputAuth from '../../UserInterface/InputAuth/InputAuth';
import { linkPersonalize } from '../Navigation/Main';
import Button from '../../UserInterface/Buttons/Button/Button';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';
import ButtonLinkSmall from '../../UserInterface/Buttons/Button/ButtonLinkSmall';
import WindowValidationResult from '../../components/Authorization/WindowValidationResult';
import {
    changeDataAuthorization,
    startSagasAuthPUTRequestServer
} from '../../store/Authorization/actionsAuthorization';

function mapStateToProps(state) {
    return {
        stateLogin: state.stateAuthorization.user.login,
        statePassword: state.stateAuthorization.user.password,
        stateUser: state.stateAuthorization.user,
        stateStylesAll: state.stateStyle.stylesAll, //переключение цветового решения приложения
        staleSelect: state.stateStyle.styleSelect
    }
} 

const mapDispatchToProps = {
    changeDataAuthorization,
    startSagasAuthPUTRequestServer
}

class LoginAuthChange extends React.Component {
    constructor(props) {
        super(props);
        this.linkBack = linkPersonalize;
        this.state = {
            passwordOld: '',
            passwordNewFirst: '',
            passwordNewSecond: '',
            flagOpenValidationResult: false,
            flagWarning: false,
            warningPasswordOld: false,
            warningPasswordNewFirst: false,
            warningPasswordNewSecond: false
        };
        this.dataInputAuth = {

            passwordOld: {
                type: 'password',
                label:'действующий пароль',
                placeholder: '',
                autofocus: true,
                flagInput: 'warningPasswordOld'

            },
            passwordNewFirst: {
                type: 'password',
                label:'новый пароль',
                placeholder: 'не менее 8 символов',
                autofocus: false,
                flagInput: 'warningPasswordNewFirst'
            },
            passwordNewSecond: {
                type: 'password',
                label:'подтвердите пароль',
                placeholder: 'требует полного совпадения',
                autofocus: false,
                flagInput: 'warningPasswordNewSecond'
            }
        };
        
    }


    onchange = (event, nameInput) => {
        this.setState({
            [nameInput]: event.target.value
        });
    }
     
    onclick = (event, nameInput) => {
        this.setState({
            [nameInput]: '',
            flagOpenValidationResult: false
        });
    }

    hendlerValidation = () => {

        let flag = false;

        if (this.state.passwordOld !== this.props.statePassword) {
            this.setState({
                warningPasswordOld: true
            });
            flag = true;
        };
        if (this.state.passwordNewFirst.length<8 || this.state.passwordNewFirst === '' || this.state.passwordNewFirst === null || this.state.passwordNewFirst === undefined) {
            this.setState({
                warningPasswordNewFirst: true
            })
            flag = true;
        };
        if (this.state.passwordNewFirst !== this.state.passwordNewSecond) {
            this.setState({
                warningPasswordNewSecond: true
            })
            flag = true;
        };
        this.setState({
            flagOpenValidationResult: true,
            flagWarning: flag
        })

    }

    onfocus = ( nameInput, flagInput) => {
        this.setState({
            [nameInput]: '',
            flagOpenValidationResult: false,
            flagWarning: false,
            [flagInput]: false
        })
    }

    hendlerSave = () => {
        //в хранилище для передачи в сагу
        this.props.changeDataAuthorization({ password: this.state.passwordNewFirst }, this.props.stateUser);
        this.props.startSagasAuthPUTRequestServer();
    }


    render() {

        return (
            <div className={this.props.stateStylesAll[this.props.staleSelect].wrapper}>
                <div className={this.props.stateStylesAll[this.props.staleSelect].loginAuthChange}>
                    <ButtonLinkSmall
                        onclick={() => { }}
                        to={this.linkBack}
                        tabindex="-1"
                        icon="fa fa-share"
                    />
                    <div>
                        <h2> Изменить пароль входа в систему </h2>
                        <h3> login : {this.props.stateLogin}</h3>
                    </div>

                    <form>
                    {
                        Object.keys(this.dataInputAuth).map((keyState, index) => {
                            return <InputAuth
                                        value={this.state[keyState]}
                                        key={index}
                                        id={keyState}
                                        tabindex={index}
                                        {...this.dataInputAuth[keyState]}
                                        onchange={this.onchange}
                                        onfocus={this.onfocus}
                                        onclick={this.onclick}
                                        flagValidation={this.state[keyState.flagInput]}
                                        styles={this.state[this.dataInputAuth[keyState].flagInput] ? { boxShadow: `0px 0px 3px 2px ${this.props.stateStylesAll[this.props.staleSelect].colorWarning} inset` } : {}}
                                       />
                        })
                    }
                    </form>

                    <div>
                        <Button
                            onclick={this.hendlerValidation}
                            name="Сохранить"
                        />

                        <ButtonLink
                            onclick={() => {}}
                            to={this.linkBack}
                            name=""
                            icon="fa fa-share"
                            />
                    </div>

                    {
                        this.state.flagOpenValidationResult ?
                            <WindowValidationResult
                                flagWarning={this.state.flagWarning}
                                warningPasswordOld={this.state.warningPasswordOld}
                                warningPasswordNewFirst={this.state.warningPasswordNewFirst}
                                warningPasswordNewSecond={this.state.warningPasswordNewSecond}
                                to={this.linkBack}
                                onclickSave={this.hendlerSave}

                            />
                            :null
                    }

                </div>
            </div>
            )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthChange)