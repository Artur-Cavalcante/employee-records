import List from './Home/List/List';
import Search from './Home/Search/Search';
import Create from './Home/Create/Create';
import Alter from './Home/Alter/Alter';
import Delete from './Home/Delete/Delete';
import Home from './Home/Home';

import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function RoutesLoginPage({ history }) {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <HomeStack.Screen
                    name="List"
                    component={List}
                />
                <HomeStack.Screen
                    name="Search"
                    component={Search}
                />
                <HomeStack.Screen
                    name="Create"
                    component={Create}
                />
                <HomeStack.Screen
                    name="Alter"
                    component={Alter}
                />
                <HomeStack.Screen
                    name="Delete"
                    component={Delete}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
};