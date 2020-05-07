import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import Login from './src/components/Login';

export default function App() {
  const login = Login; 

  return (
    <NativeRouter>
        <Route path="/" component={login}/>      
    </NativeRouter>
  );
}

