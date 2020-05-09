import Login from './Login/Login';
import Signup from './Login/Signup/Signup';

import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const LoginStack = createStackNavigator();

export default function RoutesLoginPage({ history }) {
    return (
        <NavigationContainer>
            <LoginStack.Navigator>
                <LoginStack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <LoginStack.Screen
                    name="Signup"
                    component={Signup}
                />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
};