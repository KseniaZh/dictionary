import React from 'react';
import { connect } from 'react-redux';

import InputAuth from '../../UserInterface/InputAuth/InputAuth';
import { linkRegistration } from '../Navigation/Main';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';
import {
    saveDataFromLoginWindow,
    startSagasAuthGETloginRequestServer,
    fucnsFlagRepeatPasswordAuth,
    confirmLogin
} from '../../store/Authorization/actionsAuthorization';

function mapStateToProps(state) {
    return {
        flagLoginConfirmed: state.stateAuthorization.flagLoginConfirmed,
        flagRepeatPasswordAuth: state.stateAuthorization.flagRepeatPasswordAuth,
        stateStylesAll: state.stateStyle.stylesAll, //переключение цветового решения приложения
        staleSelect: state.stateStyle.styleSelect
    }
} 
const mapDispatchToProps = {
    saveDataFromLoginWindow,
    startSagasAuthGETloginRequestServer,
    fucnsFlagRepeatPasswordAuth,
    confirmLogin
}

class LoginAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            helloName: '',
            flagOpenWindowRegistration: false
        };
    } 

    helloLogin = () => {
        let loginLocalStorage = localStorage.getItem('login');
        if (localStorage.getItem('login') === null) { loginLocalStorage = '' };
        this.setState({
            login: loginLocalStorage,
            helloName: localStorage.getItem('nameAuth')
        })
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
        if (nameInput === 'login') {
            this.setState({
                helloName: ''
            });
            localStorage.setItem('nameAuth', '');
        };
    }

    onfocus = (nameInput) => {
        this.setState({
            [nameInput]: ''
        })
        if (nameInput === 'login') {
            this.props.confirmLogin('true');
        };
        if (nameInput === 'password') {
            this.props.fucnsFlagRepeatPasswordAuth('true');
        };
    }

    hendlerSave = () => {

        localStorage.setItem('login', this.state.login);

        this.props.saveDataFromLoginWindow({
                                            login: this.state.login,
                                            password: this.state.password
                                        }); //сохраняем данные в redux для запроса логина на сервер
        this.props.startSagasAuthGETloginRequestServer(); //слушатель саги делает запрос по логину
    }

    hendlerInitialRegistration = () => {
        console.log(' первичная регистрация ', this.state);
    }


    componentWillMount() {  
        this.helloLogin();
    }

    render() {

        return (
            <div>
                <h2> Добрый день!</h2>
                <h2> Для начала работы пройдите авторизацию </h2>
                <InputAuth
                    value={this.state.login}
                    id="login"
                    type= 'text'
                    placeholder= 'login'
                    autofocus= 'false'
                    onchange={this.onchange}
                    onfocus={this.onfocus}
                    onclick={this.onclick}
                />
                <div>
                    {
                        this.props.flagLoginConfirmed ?
                            null
                            :<p>Веденный логин не зарегистрирован в системе</p>
                    }
                </div>
                <InputAuth
                    value={this.state.password}
                    id='password'
                    type='password'
                    placeholder='пароль'
                    autofocus='false'
                    onchange={this.onchange}
                    onfocus={this.onfocus}
                    flagInput={this.state.warningPassword}
                    onclick={this.onclick}
                />
                <div>
                    {
                        this.props.flagRepeatPasswordAuth ?
                            null
                            : <p>Введен неверный пароль</p>
                    }
                </div>

                <button
                    onClick={this.hendlerSave}
                >
                    Войти
                </button>

                <ButtonLink
                    onclick={this.hendlerInitialRegistration}
                    to={linkRegistration}
                    name="Первичная регистрация"
                    icon="fa fa-user-plus"
                />

            </div>

            )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuth)