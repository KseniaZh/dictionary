import React from 'react';
import { connect } from 'react-redux';

import InputAuth from '../../UserInterface/InputAuth/InputAuth';
import { linkPersonalize } from '../Navigation/Main';
import Button from '../../UserInterface/Buttons/Button/Button';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';
import WindowValidationResult from '../../components/Authorization/WindowValidationResult';
import {
    changeDataAuthorization,
    startSagasAuthPUTRequestServer
} from '../../store/Authorization/actionsAuthorization';

function mapStateToProps(state) {
    return {
        stateLogin: state.stateAuthorization.user.login,
        statePassword: state.stateAuthorization.user.password,
        stateUser: state.stateAuthorization.user
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
                placeholder: 'действующий пароль',
                autofocus: true,
                flagInput: 'warningPasswordOld'

            },
            passwordNewFirst: {
                type: 'password',
                placeholder: 'новый пароль',
                autofocus: false,
                flagInput: 'warningPasswordNewFirst'
            },
            passwordNewSecond: {
                type: 'password',
                placeholder: 'подтвердите пароль',
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
     
    onclick = nameInput => {
        this.setState({
            [nameInput]: ''
        });
    }

    hendlerValidation = () => {
        console.log('проверить новый пароль  ', this.state);

        let flag = false;

        if (this.state.passwordOld !== this.props.statePassword) {
            this.setState({
                warningPasswordOld: true
            });
            flag = true;
        };
        if (this.state.passwordNewFirst.length<1 || this.state.passwordNewFirst === '' || this.state.passwordNewFirst === null || this.state.passwordNewFirst === undefined) {
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
            <div>
                <h2> Изменить пароль входа в систему </h2>
                <h3> Для login {this.props.stateLogin}</h3>

                {
                    Object.keys(this.dataInputAuth).map((keyState, index) => {
                        return <InputAuth
                                        value={this.state[keyState]}
                                        key = { index }
                                        id={keyState}
                                        tabindex={index}
                                        {...this.dataInputAuth[keyState]}
                                        onchange={this.onchange}
                                        onfocus={this.onfocus}
                                        onclick={this.onclick}
                                    />
                    })
                }


                <Button
                    onclick={this.hendlerValidation}
                    name="Проверить новый пароль"
                    icon="fa fa-user-secret"
                />

                <ButtonLink
                    onclick={() => {}}
                    to={this.linkBack}
                    name="Назад"
                    icon="fa fa-share"
                />
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

            )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthChange)