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

const history = browserHistory();

function App() {
  return (
        <Provider store={store}>
          <BrowserRouter history={history}>
            <React.Fragment>
              <Switch>
                  <Route history={history} path='/signin' component={SignIn} />
                  <Route history={history} path='/admin/users' component={AdminUsers} />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
  );
}

export default App;
