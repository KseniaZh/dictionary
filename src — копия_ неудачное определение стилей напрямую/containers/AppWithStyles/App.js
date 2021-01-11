import React from 'react';
import Header from './containers/Navigation/Header';
import { Main } from './containers/Navigation/Main';

import './styles/index.scss';

import LoginAuth from './containers/Authorization/LoginAuth';
import withAuthorization from './hoc/withAuthorization';

function App() {

    const MainWithAuthorization = withAuthorization(Main, LoginAuth);
    
  return (
    <div className="App">
          <Header />
          <MainWithAuthorization />
    </div>
  );
}

export default App;
