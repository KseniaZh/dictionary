import React from 'react';
import { connect, useSelector } from "react-redux";
import Header from './containers/Navigation/Header';
import { Main } from './containers/Navigation/Main';

import LoginAuth from './containers/Authorization/LoginAuth';
import withAuthorization from './hoc/withAuthorization';

function App() {

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const MainWithAuthorization = withAuthorization(Main, LoginAuth);
    
  return (
      <div className={stateStylesAll[staleSelect].app}>
          <Header />
          <MainWithAuthorization />
    </div>
  );
}

export default connect()(App);
