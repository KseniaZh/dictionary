import React from 'react';
import { connect, useSelector } from 'react-redux';
import Authorization from './Authorization';
import Registration from './Registration';



function LoginAuth() {

    const flagPrimaryRegistration = useSelector(state => state.stateAuthorization.flagPrimaryRegistration);

    return (
        <React.Fragment>
            {
            flagPrimaryRegistration ?
                    <Registration />
                    :<Authorization />
            }
        </React.Fragment>
        )
} 


export default connect()(LoginAuth)