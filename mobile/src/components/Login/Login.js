import React, { useState } from 'react';
import {  StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import { NativeRouter, Link } from 'react-router-native';

import LoginInputs from './LoginInputs';


export default function Login({navigation}) {
    const user_tie = <Icon name="user-tie" size={100} />;
    const eyeOpened = <Icon name="eye" size={23} color="white" onPress={() => setShowPassword(false)} />;
    const eyeClosed = <Icon name="eye-slash" size={23} color="white" onPress={() => setShowPassword(true)} />;
    const spinner = <Spinner visible={true} textContent={'Loading...'} textStyle={{ color: "#fff" }} color="white" size="large" visible={true} overlayColor="rgba(0,0,0,0.45)" />

    const [passwordText, setPasswordText] = useState('');
    const [userText, setUserText] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);


    function handleLogin() {
        setShowSpinner(true);
    };

    function handleSignUp(){
        navigation.navigate('Signup');
    }

    return (
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <View style={styles.logoBox}>
                        {user_tie}
                    </View>
                    {showSpinner ? spinner : null}
                    <View>
                        <LoginInputs
                            setUserText={setUserText}
                            setPasswordText={setPasswordText}

                            showPassword={showPassword}
                            setShowPassword={setShowPassword}

                            eyeClosed={eyeClosed}
                            eyeOpened={eyeOpened}
                        />
                        <View>
                                <Button
                                    title="Login"  
                                    color="#ff9849"
                                    onPress={handleLogin}
                                />
                        </View>
                        <View>
                            <Text style={styles.AccountText}>Don't have account?</Text>
                            <Text 
                                style={styles.createAccountText}
                                onPress={handleSignUp}    
                            >Create Account</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.copyrightBox}>
                    <Text style={styles.copyrightText}>&copy;Artur-Cavalcante</Text>
                </View>
            </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ff7913',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoBox: {
        width: 250,
        display: "flex",
        alignItems: "center",
        marginBottom: 50

    },
    loginBox: {
        flex: 4,
        justifyContent: "center",
    },
    AccountText: {
        color: "white",
        textAlign: "center",
        marginTop: 20
    },
    createAccountText: {
        color: "#7169c6",
        textAlign: "center"
    },
    copyrightBox: {
        flex: 1,
        justifyContent: "flex-end",

    },
    copyrightText: {
        color: "white",
        fontStyle: "italic"
    }
});
