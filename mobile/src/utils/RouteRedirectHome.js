import React from 'react';
import { Redirect, Route } from 'react-router-native';

export default function RouteRedirectHome() {
    return (
        <Route>
            <Redirect push to='/home' />
        </Route>
    )

};