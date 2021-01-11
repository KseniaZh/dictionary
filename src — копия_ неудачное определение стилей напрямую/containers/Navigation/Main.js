import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from '../User/User';
import UserWindowConfirmDeleting from '../User/UserWindowConfirmDeleting';
import EditWindowUser from '../User/EditWindowUser';
import CompareUser from '../User/CompareUser';

import EltypeClass from '../baseEltypeClass/EltypeClass';
import EditWindow_EltypeClass from '../baseEltypeClass/EditWindowEltypeClass';
import CompareEltypeClass from '../baseEltypeClass/CompareEltypeClass';
import WindowConfirmDeleting from '../baseEltypeClass/WindowConfirmDeleting';
import WarningValueNotSelected from '../../components/WarningWindow/WarningValueNotSelected';
import Personalize from '../Personalize/Personalize';

import Home from '../Home/Home';
import Registration from '../Authorization/Registration';
import LoginAuthChange from '../Authorization/LoginAuthChange';

export const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/Registration' component={Registration} />
        <Route exact path='/LoginAuthChange' component={LoginAuthChange} />

            <Route exact path='/User' component={User} />
            <Route exact path='/UserWindowConfirmDeleting' component={UserWindowConfirmDeleting} />
            <Route exact path='/EditWindowUser' component={EditWindowUser} />
            <Route exact path='/CompareUser' component={CompareUser} />

        <Route exact path='/EltypeClass' component={EltypeClass} />
        <Route exact path='/EditWindowEltypeClass' component={EditWindow_EltypeClass} />
        <Route exact path='/CompareEltypeClass' component={CompareEltypeClass} />

        <Route exact path='/WindowConfirmDeleting' component={WindowConfirmDeleting} />
        <Route exact path='/WarningValueNotSelected' component={WarningValueNotSelected} />

        <Route exact path='/Personalize' component={Personalize} />
    </Switch>
  </main>
) 
export const linkHome = '/';

export const linkRegistration = '/Registration';
export const linkLoginAuthChange = '/LoginAuthChange';

export const linkUser = '/User';
export const linkUserWindowConfirmDeleting = '/UserWindowConfirmDeleting';
export const linkEditWindowUser = '/EditWindowUser';
export const linkCompareUser = '/CompareUser';

export const linkEltypeClass = '/EltypeClass';
export const linkEditWindowEltypeClass = '/EditWindowEltypeClass';
export const linkCompareEltypeClass = '/CompareEltypeClass';

export const linkWindowConfirmDeleting = '/WindowConfirmDeleting';
export const linkWarningValueNotSelected = '/WarningValueNotSelected';

export const linkPersonalize = '/Personalize';