import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from '../User/User';
import UserWindowConfirmDeleting from '../User/UserWindowConfirmDeleting';
import EditWindowUser from '../User/EditWindowUser';
import CompareUser from '../User/CompareUser';

import EltypeClass from '../EltypeClass/EltypeClass';
import EditWindowEltypeClass from '../EltypeClass/EditWindowEltypeClass';
import CompareEltypeClass from '../EltypeClass/CompareEltypeClass';
import EltypeClassWindowConfirmDeleting from '../EltypeClass/EltypeClassWindowConfirmDeleting';

import ViewType from '../ViewType/ViewType';
import EditWindowViewType from '../ViewType/EditWindowViewType';
import CompareViewType from '../ViewType/CompareViewType';

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
        <Route exact path='/EditWindowEltypeClass' component={EditWindowEltypeClass} />
        <Route exact path='/CompareEltypeClass' component={CompareEltypeClass} />
        <Route exact path='/EltypeClassWindowConfirmDeleting' component={EltypeClassWindowConfirmDeleting} />

        <Route exact path='/ViewType' component={ViewType} />
        <Route exact path='/EditWindowViewType' component={EditWindowViewType} />
        <Route exact path='/CompareViewType' component={CompareViewType} />

        <Route exact path='/WarningValueNotSelected' component={WarningValueNotSelected} />

        <Route exact path='/Personalize' component={Personalize} />
    </Switch>
  </main>
) 
export const linkHome = '/';

export const linkRegistration = '/Registration';
export const linkLoginAuthChange = '/LoginAuthChange';

export const linkWarningValueNotSelected = '/WarningValueNotSelected';

export const linkPersonalize = '/Personalize';