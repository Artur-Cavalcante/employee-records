import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';

import LoginInputs from './LoginInputs';

import handleLogin from './handleLogin';

export default function Login({ navigation }) {
    const userTie = <Icon name='user-tie' size={100} />;
    const spinner = <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
        color='white'
        size='large'
        overlayColor='rgba(0,0,1,0.42)'
    />

    const [redirect, setRedirect] = useState(null);

    const [userText, setUserText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);

    const [errorTextUser, setErrorTextUser] = useState(null);
    const [errorTextPassword, setErrorTextPassword] = useState(null);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
        >
            <View style={styles.loginBox}>
                <View style={styles.logoBox}>
                    {userTie}
                    <Text style={styles.logoName}>
                        Employee Records
                    </Text>
                </View>
                <View>
                    <LoginInputs
                        setUserText={setUserText}
                        setPasswordText={setPasswordText}

                        showPassword={showPassword}
                        setShowPassword={setShowPassword}

                        errorTextPassword={errorTextPassword}
                        errorTextUser={errorTextUser}
                    />
                    <View>
                        <Button
                            title='Login'
                            color='#ff7913'
                            onPress={() => {
                                handleLogin({
                                    userText,
                                    passwordText,
                                    setErrorTextUser,
                                    setErrorTextPassword,
                                    setShowSpinner,
                                    setRedirect
                                })
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.AccountText}>
                            Don't have account?
                        </Text>
                        <Text
                            style={styles.createAccountText}
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            Create Account
                        </Text>
                    </View>
                </View>
            </View>
            {showSpinner ? spinner : null}
            <View style={styles.copyrightBox}>
                <Text style={styles.copyrightText}>&copy;Artur-Cavalcante</Text>
            </View>
            {redirect}
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    contentContainerStyle: {
        alignItems: 'center',
    },
    loginBox: {
        width: wp('70%'),
        height: hp('85%'),
        justifyContent: 'center',

    },
    logoBox: {
        alignItems: 'center',
        paddingBottom: 30

    },
    logoName: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    AccountText: {
        color: '#777777',
        textAlign: 'center',
        marginTop: 20
    },
    createAccountText: {
        color: '#7169c6',
        textAlign: 'center'
    },
    copyrightBox: {
        height: hp('15%'),
        justifyContent: 'flex-end'
    },
    copyrightText: {
        color: '#777777',
        fontStyle: 'italic'
    }
});
