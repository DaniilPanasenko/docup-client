import React, { useEffect, useState }  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import store from './store'
import browserHistory from 'history/createBrowserHistory'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import SignIn from "./components/signin/SignIn";
import AdminUsers from "./components/admin/AdminUsers";
import AdminAddDevice from "./components/admin/AdminAddDevice";
import AdminAddIllness from "./components/admin/AdminAddIllness";

const history = browserHistory();

function App() {
  return (
        <Provider store={store}>
          <BrowserRouter history={history}>
            <React.Fragment>
              <Switch>
                  <Route history={history} path='/signin' component={SignIn} />
                  <Route history={history} path='/admin/users' component={AdminUsers} />
                  <Route history={history} path='/admin/add_device' component={AdminAddDevice} />
                  <Route history={history} path='/admin/add_illness' component={AdminAddIllness} />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
  );
}

export default App;
