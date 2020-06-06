import React from 'react';
import { 
  NativeRouter,
  Route, 
  Switch, 
} from 'react-router-native';

import RoutesLogin from './src/components/RoutesLogin';
import RoutesHome from './src/components/RoutesHome';

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route 
          exact 
          path='/' 
          render={() => RoutesLogin()}
        />
        <Route
          path='/home'
          render={() => RoutesHome()}
        />
      </Switch>
    </NativeRouter>
  );
}

