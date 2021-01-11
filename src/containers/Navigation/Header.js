import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import NavigationWindowBlind from '../../UserInterface/Navigation/NavigationWindowBlind';
import NavigationToggle from '../../UserInterface/Navigation/NavigationToggle';

import withHoverDescription from '../../hoc/withHoverDescription';
import ButtonLink from '../../UserInterface/Buttons/Button/ButtonLink';
import ButtonLinkSmall from '../../UserInterface/Buttons/Button/ButtonLinkSmall';
import DescriptionNavigation from '../../components/Description/DescriptionNavigation';

import { saveDataStore } from '../../store/BasisReport/actions/actionFocusData';

function Header(props) {

    const dispatch = useDispatch();
    const login = useSelector(state => state.stateAuthorization.user.login);

    //переключение цветового решения приложения
    const stateStylesAll = useSelector(state => state.stateStyle.stylesAll);
    const staleSelect = useSelector(state => state.stateStyle.styleSelect);

    const [isOpen, setIsOpen] = useState(false);

    const hendlerNavigationToggle = () => {
        if (isOpen === false) {
            dispatch(saveDataStore({}));
        }
        setIsOpen(!isOpen);
    };

    const navStyle = [stateStylesAll[staleSelect].navigation];
    if (!isOpen) {
        navStyle.push("close");
    };

    const pages = [
        {
            to: '/',
            name: 'Home'
        },
        {
            to: '/EltypeClass',
            name: 'EltypeClass'
        },
        {
            to: '/ViewType',
            name: 'ViewType'
        }
    ]
    // логика всплывающей подсказки спрятана в обертку hoc, 
    // обертка кнопок и подсказка реализованы в ButtonNavigationSmall и ButtonNavigation
    const ButtonNavigationSmall = withHoverDescription(ButtonLinkSmall, DescriptionNavigation);
    const ButtonNavigation = withHoverDescription(ButtonLink, DescriptionNavigation);

    return (
        <header>
            <nav className={navStyle.join(' ')}>

                    <ButtonNavigationSmall
                                to='/Personalize'
                                icon="fa fa-user-circle-o"
                                classname={stateStylesAll[staleSelect].personalizeButton}
                                name='Personalize'
                                onclick={() => setIsOpen(false)}
                                tabindex="-1"
                                haveDescription={isOpen}
                                classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
                    />
                    {
                        login === "administrator" ?
                                <ButtonNavigation
                                            to= '/User'
                                            name='User'
                                            onclick={() => setIsOpen(false)}
                                            classname={stateStylesAll[staleSelect].navigationButtonLink}
                                            tabIndex= '2'
                                            haveDescription={isOpen}
                                            classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
                                />
                                : null
                    }
                    {
                        pages.map((page, index) => 
                                <ButtonNavigation
                                            to={page.to}
                                            name={page.name}
                                            onclick={() => setIsOpen(false)}
                                            classname={stateStylesAll[staleSelect].navigationButtonLink}
                                            tabIndex={index + 2}
                                            key={index + 2}
                                            haveDescription={isOpen}
                                            classnameDescription={stateStylesAll[staleSelect].navigationLinkAbout}
                              />)
                    }
                
            </nav>
 
            {
                isOpen ?
                    <NavigationWindowBlind
                        onclick={() => setIsOpen(false)}
                        classname={stateStylesAll[staleSelect].navigationWindowBlind}
                    />
                    : null
            }
            
            <NavigationToggle
                openNavigation={hendlerNavigationToggle}
                isOpen={isOpen}
                classname={stateStylesAll[staleSelect].navigationToggle}
            />

        </header>
    )
}
export default connect()(Header)
