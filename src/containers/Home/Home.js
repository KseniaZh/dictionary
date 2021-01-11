import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import HomeComponent from '../../components/Home/HomeComponent';
import logoCoffee from '../../image/logo2.png';
import logoGreyBlue from '../../image/logo4.png';


function Home(props) {

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const logo = () => {
        switch (staleSelect) {
            case 'Coffee':
                return logoCoffee
            case 'GreyBlue':
                return logoGreyBlue
        };
    };


    return(
        <>
            
            <HomeComponent
                classname={stateStylesAll[staleSelect].home}
                logo={logo()}
            />    
        </>
    )
}

export default connect()(Home)