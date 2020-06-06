import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './LoginStack/Login';
import SignUp from './LoginStack/SignUp/SignUp';

const LoginStack = createStackNavigator();

export default function RoutesLogin() {
    return (
        <NavigationContainer>
            <LoginStack.Navigator>
                <LoginStack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <LoginStack.Screen
                    name='SignUp'
                    component={SignUp}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#ff7913'
                        }
                    }}
                />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
};