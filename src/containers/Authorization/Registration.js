import React from 'react';
import { connect } from 'react-redux';

import InputAuth from '../../UserInterface/InputAuth/InputAuth';
import { linkHome } from '../Navigation/Main';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';
import Button from '../../UserInterface/Buttons/Button/Button';
import {
    saveDataAuthorization,
    startSagasAuthPOSTRequestServer,
    changeFlagPrimaryRegistration
} from '../../store/Authorization/actionsAuthorization';

function mapStateToProps(state) {
    return {
        stateAuthorization: state.stateAuthorization.user,
        stateStylesAll: state.stateStyle.stylesAll, //переключение цветового решения приложения
        styleSelect: state.stateStyle.styleSelect,
    }
} 
const mapDispatchToProps = {
    saveDataAuthorization,
    startSagasAuthPOSTRequestServer,
    changeFlagPrimaryRegistration
}

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            secondName: '',
            login: '',
            password: '',
            flagValidation: {
                surname: true,
                name: true,
                secondName: true,
                login: true,
                password: true,
            }
        };
        this.dataInputAuth = {
            surname: {
                type: 'text',
                label: 'фамилия',
                placeholder: 'обязательно для заполнения',
                autofocus: true
            },
            name: {
                type: 'text',
                label: 'имя',
                placeholder: 'обязательно для заполнения',
                autofocus: false
            },
            secondName: {
                type: 'text',
                label: 'отчество',
                placeholder: 'обязательно для заполнения',
                autofocus: false
            },
            login: {
                type: 'text',
                label: 'логин',
                placeholder: 'обязательно для заполнения',
                autofocus: false
            },
            password: {
                type: 'password',
                label: 'пароль',
                placeholder: 'должен содержать не менее 8 символов',
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
     
    onclick = (event, nameInput) => {
        this.setState({
            ...this.state,
            [nameInput]: ''
        });
    }

    hendlerSave = () => {
        let flagValidationChange = this.state.flagValidation;
        let flagNotValid = false;

        const funcValidation = data => {
            if (this.state[data] === '') {
                flagValidationChange = {
                    ...flagValidationChange,
                    [data]: false
                }
                flagNotValid = true;
                console.log(`flagValidationChange ${data}`, flagValidationChange)
            }
        }

        funcValidation('surname');
        funcValidation('name');
        funcValidation('secondName');
        funcValidation('login');
        if (this.state.password.length<8) {
            flagValidationChange = {
                ...flagValidationChange,
                password: false
            }
            flagNotValid = true;
        }

        if (flagNotValid === true) {
            this.setState({
                ...this.state,
                flagValidation: { ...flagValidationChange }
            })
            console.log("flagValidationChange ", flagValidationChange)
            console.log("this.state ", this.state)
            return
        }

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

        this.props.changeFlagPrimaryRegistration(false);
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
    hendlerCloseWindowRegistration = () => {
        this.hendlerClearAll();
        this.props.changeFlagPrimaryRegistration(false);
    }

    render(){
        return (
            <div className={this.props.stateStylesAll[this.props.styleSelect].wrapper}>
                <div className={this.props.stateStylesAll[this.props.styleSelect].registration}>
                    <div>
                        <h2>Первичная регистрация :</h2>
                    </div>

                    <form>
                    {
                        Object.keys(this.dataInputAuth).map((keyState, index) => {
                            return <div key={index}>
                                        <InputAuth
                                            value={this.state[keyState]}
                                            id={keyState}
                                            tabindex={index}
                                            {...this.dataInputAuth[keyState]}
                                            onchange={this.onchange}
                                            onfocus={() => {}}
                                            onclick={this.onclick}
                                            styles={this.state.flagValidation[keyState] ? {} : { boxShadow: `0px 0px 3px 2px ${this.props.stateStylesAll[this.props.styleSelect].colorWarning} inset` }}
                                        />
                                        <div>
                                            {
                                            this.state.flagValidation[keyState] ?
                                                    null
                                            : <p style={{ color: this.props.stateStylesAll[this.props.styleSelect].colorWarning }}> <span className="fa fa-exclamation" aria-hidden="true"></span> "{this.dataInputAuth[keyState].label}" {this.dataInputAuth[keyState].placeholder}</p>
                                            }
                                        </div>
                                </div>
                        })
                    }
                    </form>

                    <div>
                        <ButtonLink
                            onclick={this.hendlerSave}
                            to={linkHome}
                            name="Сохранить"
                            icon=""
                        />
                        <Button
                            onclick={this.hendlerClearAll}
                            name=""
                            icon="fa fa-times"
                        />
                        <ButtonLink
                            onclick={this.hendlerCloseWindowRegistration}
                            to={linkHome}
                            name=""
                            icon="fa fa-share"
                            />
                    </div>
                </div>
            </div>
            )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)