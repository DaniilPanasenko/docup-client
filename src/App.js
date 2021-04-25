import React, { useEffect, useState }  from 'react'
import {BrowserRouter, Route, Switch, Redirect, Router} from 'react-router-dom'
import {Provider, useSelector} from 'react-redux'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import store from './store'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import SignIn from "./components/signin/SignIn";
import AdminUsers from "./components/admin/AdminUsers";
import AdminAddDevice from "./components/admin/AdminAddDevice";
import AdminAddIllness from "./components/admin/AdminAddIllness";
import HomePage from "./components/route/HomePage";
import Operator from "./components/operator/Operator";

import history from "./history";

function App() {


  return (
        <Provider store={store}>
          <HomePage/>
        </Provider>
  );
}

export default App;
