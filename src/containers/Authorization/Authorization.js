import React from 'react';
import { connect } from 'react-redux';

import InputAuth from '../../UserInterface/InputAuth/InputAuth';
import Button from '../../UserInterface/Buttons/Button/Button';
import {
    saveDataFromLoginWindow,
    startSagasAuthGETloginRequestServer,
    fucnsFlagRepeatPasswordAuth,
    confirmLogin,
    changeFlagPrimaryRegistration
} from '../../store/Authorization/actionsAuthorization';
import { changeStyleSelect } from '../../store/Style/actionsStyle';

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
    confirmLogin,
    changeFlagPrimaryRegistration,
    changeStyleSelect
}

class Authorization extends React.Component {
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
    helloStylesInterface = () => {
        if (localStorage.getItem('stylesInterface') !== null) {
            this.props.changeStyleSelect(localStorage.getItem('stylesInterface'));
        }
    }

    onchange = (event, nameInput) => {
        this.setState({
            [nameInput]: event.target.value
        });
    }

    onclick = (event, nameInput) => {
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
        this.props.changeFlagPrimaryRegistration(true);
    }


    componentWillMount() {
        this.helloLogin();
        this.helloStylesInterface();
    }

    render() {

        return (

            <div className={this.props.stateStylesAll[this.props.staleSelect].authorization}>
                <div>
                    <div>
                        <h2> Авторизация </h2>
                    </div>
                    <form>
                        <InputAuth
                            value={this.state.login}
                            id="login"
                            type='text'
                            label="логин"
                            placeholder='login'
                            autofocus={false}
                            onchange={this.onchange}
                            onfocus={this.onfocus}
                            onclick={this.onclick}
                            styles={this.props.flagLoginConfirmed ? {} : {boxShadow: `0px 0px 1px 2px ${this.props.stateStylesAll[this.props.staleSelect].colorWarning} inset` } }
                        />
                        <div>
                            {
                                this.props.flagLoginConfirmed ?
                                    null
                                    : <p>Логин " {this.state.login} " не зарегистрирован в системе</p>
                            }
                        </div>
                        <InputAuth
                            value={this.state.password}
                            id='password'
                            type='password'
                            label="пароль"
                            placeholder='пароль'
                            autofocus={true}
                            onchange={this.onchange}
                            onfocus={this.onfocus}
                            flagInput={this.state.warningPassword}
                            onclick={this.onclick}
                            styles={this.props.flagRepeatPasswordAuth ? {} : { boxShadow: `0px 0px 1px 2px ${this.props.stateStylesAll[this.props.staleSelect].colorWarning} inset` }}
                            />
                
                        <div>
                            {
                                this.props.flagRepeatPasswordAuth ?
                                    null
                                    : <p>Введен неверный пароль</p>
                            }
                        </div>
                    </form>
                    <div>
                        <Button
                            onclick={this.hendlerSave}
                            name="Войти"
                            icon=""
                        />
                        <Button
                            onclick={this.hendlerInitialRegistration}
                            name=""
                            icon="fa fa-user-plus"
                        />
                    </div>
                </div>
            </div>

        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)