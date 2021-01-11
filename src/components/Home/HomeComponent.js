import React from 'react';


function HomeComponent(props) {

    return (
        <div className={props.classname}>
            <div>
                <div><img src={props.logo} alt='логотип компании' /></div>
                <div>Добро пожаловать!</div>

            </div>
        </div>
    )
}

export default HomeComponent
