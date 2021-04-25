import React, { useEffect, useState }  from 'react'
import {BrowserRouter, Route, Switch, Redirect, Router} from 'react-router-dom'
import {Provider, useSelector} from 'react-redux'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import store from './store'
import {createBrowserHistory} from 'history'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import SignIn from "./components/signin/SignIn";
import AdminUsers from "./components/admin/AdminUsers";
import AdminAddDevice from "./components/admin/AdminAddDevice";
import AdminAddIllness from "./components/admin/AdminAddIllness";
import HomePage from "./components/route/HomePage";
import Operator from "./components/operator/Operator";

const history = createBrowserHistory();

function App() {


  return (
        <Provider store={store}>
          <Router history={history}>
            <React.Fragment>
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/signin' component={SignIn}/>
                  <Route exact path='/admin/users' component={AdminUsers} />
                  <Route exact path='/admin/add_device' component={AdminAddDevice} />
                  <Route exact path='/admin/add_illness' component={AdminAddIllness} />
                  <Route exact path='/operator/notifications' component={Operator} />
              </Switch>
            </React.Fragment>
          </Router>
        </Provider>
  );
}

export default App;
