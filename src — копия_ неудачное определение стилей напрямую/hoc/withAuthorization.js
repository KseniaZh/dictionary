import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        flagPassword: state.stateAuthorization.user.password,
    }
}

const withAuthorization = (Component, ComponentAuthorization) => {

    class ComponentWithAuthorization extends React.Component {


       render() {  
            return(
                <>
                    {
                        this.props.flagPassword === "notConfirmed" ?
                            <ComponentAuthorization />
                            :
                            <Component {...this.props} />
                    }
               </> 
                )
        }
    }

    return connect(mapStateToProps)(ComponentWithAuthorization)
}

export default withAuthorization