import React from 'react';
import { Redirect, Route } from 'react-router-native';

export default function RouteRedirectLogin() {
    return (
        <Route>
            <Redirect push to='/' />
        </Route>
    )
};