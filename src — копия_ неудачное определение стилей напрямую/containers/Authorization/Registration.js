import React from 'react';
import { connect } from 'react-redux';

import InputAuth from '../../UserInterface/InputAuth/InputAuth';
import { linkHome } from '../Navigation/Main';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';
import {
    saveDataAuthorization,
    startSagasAuthPOSTRequestServer
} from '../../store/Authorization/actionsAuthorization';

function mapStateToProps(state) {
    return {
        stateAuthorization: state.stateAuthorization.user
    }
} 
const mapDispatchToProps = {
    saveDataAuthorization,
    startSagasAuthPOSTRequestServer
}

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            secondName: '',
            login: '',
            password: ''
        };
        this.dataInputAuth = {
            surname: {
                type: 'text',
                placeholder: 'фамилия',
                autofocus: true
            },
            name: {
                type: 'text',
                placeholder: 'имя',
                autofocus: false
            },
            secondName: {
                type: 'text',
                placeholder: 'отчество',
                autofocus: false
            },
            login: {
                type: 'text',
                placeholder: 'login',
                autofocus: false
            },
            password: {
                type: 'password',
                placeholder: 'пароль',
                autofocus: false
            }
        };
        
    }

    onchange = (event, nameInput) => {
        this.setState({
            ...this.state,
            [nameInput]: event.target.value
        });
    }
     
    onclick = nameInput => {
        this.setState({
            ...this.state,
            [nameInput]: ''
        });
    }

    hendlerSave = () => {
        localStorage.setItem('login', this.state.login);
        localStorage.setItem('nameAuth', `${this.state.name} ${this.state.secondName}`);

        let stateAuth = {
                            uid: '',
                            login: this.state.login,
                            name: `${this.state.surname} ${this.state.name} ${this.state.secondName}`,
                            password: this.state.password,
        };

        this.props.saveDataAuthorization(stateAuth);

        this.props.startSagasAuthPOSTRequestServer();
    }

    hendlerClearAll = () => {
        this.setState({
            surname: '',
            name: '',
            secondName: '',
            login: '',
            password: ''
        });
    }


    render(){
        return (
            <div>
                <h2>Для начала работы пройдите регистрацию :</h2>

                {
                    Object.keys(this.dataInputAuth).map((keyState, index) => {
                        return <InputAuth
                                        value={this.state[keyState]}
                                        key = { index }
                                        id={keyState}
                                        tabindex={index}
                                        {...this.dataInputAuth[keyState]}
                                        onchange={this.onchange}
                                        onfocus={() => {}}
                                        onclick={this.onclick}
                                    />
                    })
                }

                <ButtonLink
                    onclick={this.hendlerSave}
                    to={linkHome}
                    name="Сохранить"
                    icon="fa fa-user-plus"
                />
                <button
                    onClick={this.hendlerClearAll}
                >
                    <span className="fa fa-times" aria-hidden="true"></span>
                    Очистить
                </button>
                <ButtonLink
                    onclick={this.hendlerClearAll}
                    to={linkHome}
                    name="Назад"
                    icon="fa fa-sign-in"
                />
            </div>

            )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)