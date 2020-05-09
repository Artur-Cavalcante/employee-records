import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';

import RoutesLoginPage from './components/RoutesLoginPage';
import RoutesHomePage from './components/RoutesHomePage';

export default function App() {
  const routesLoginPage = RoutesLoginPage;
  const routesHomePage  = RoutesHomePage ;


  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={routesHomePage} />      
        <Route exact path="/home" component={routesLoginPage} />
      </Switch>
    </NativeRouter>
  );
}

