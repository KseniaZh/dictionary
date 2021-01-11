import React from 'react';
import { connect, useSelector } from "react-redux";
import AppCoffee from './containers/AppWithStyles/AppCoffee';
import AppGrey from './containers/AppWithStyles/AppGrey';

import LoginAuth from './containers/Authorization/LoginAuth';
import withAuthorization from './hoc/withAuthorization';

function App() {

    const staleSelect = useSelector(state => state.stateStyle.styleSelect);
    const AppCoffeeWithAuthorization = withAuthorization(AppCoffee, LoginAuth);
    const AppGreyWithAuthorization = withAuthorization(AppGrey, LoginAuth);

    const app = dataStyle => {
        if (dataStyle === 'Coffee') {
            return <AppCoffeeWithAuthorization />
        };
        if (dataStyle === ' GreyBlue') {
            return < AppGreyWithAuthorization />
        };
    }
    
    
    
  return (
          app(staleSelect)
  );
}

export default connect()(App);
