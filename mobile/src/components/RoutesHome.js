import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './HomeStack/List/List';
import Search from './HomeStack/Search/Search';
import Create from './HomeStack/Create/Create';
import Alter from './HomeStack/Alter/Alter';
import Delete from './HomeStack/Delete/Delete';
import Home from './HomeStack/Home';

const HomeStack = createStackNavigator();

export default function RoutesHome() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />
                <HomeStack.Screen
                    name='List'
                    component={List}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#ff7913'
                        }
                    }}
                />
                <HomeStack.Screen
                    name='Search'
                    component={Search}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#ff7913'
                        }
                    }}
                />
                <HomeStack.Screen
                    name='Create'
                    component={Create}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#ff7913'
                        }
                    }}
                />
                <HomeStack.Screen
                    name='Alter'
                    component={Alter}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#ff7913'
                        }
                    }}
                />
                <HomeStack.Screen
                    name='Delete'
                    component={Delete}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#ff7913'
                        }
                    }}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
};