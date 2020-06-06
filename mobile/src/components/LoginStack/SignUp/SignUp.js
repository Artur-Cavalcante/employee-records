import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';

import SignUpInputs from './SignUpInputs';

import handleSignUp from './handleSignUp';
import checkInputError from './checkInputError';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SignUp({ navigation }) {
    const userTie = <Icon name='user-tie' size={100} />;

    const spinner = <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
        color='white'
        size='large'
        overlayColor='rgba(0,0,1,0.42)'
    />

    const [showSpinner, setShowSpinner] = useState(false);

    const [userText, setUserText] = useState('');
    const [passwordText1, setPasswordText1] = useState('');
    const [passwordText2, setPasswordText2] = useState('');

    const [errorTextUser, setErrorTextUser] = useState(null);
    const [errorTextPassword1, setErrorTextPassword1] = useState(null);
    const [errorTextPassword2, setErrorTextPassword2] = useState(null);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
        >
            <View style={styles.signupBox}>
                <View style={styles.logoBox}>
                    {userTie}
                    <Text style={styles.logoName}>
                        Employee Records
                    </Text>
                </View>
                {showSpinner ? spinner : null}
                <View>
                    <SignUpInputs
                        setUserText={setUserText}

                        setPasswordText1={setPasswordText1}
                        setPasswordText2={setPasswordText2}

                        errorTextPassword1={errorTextPassword1}
                        errorTextPassword2={errorTextPassword2}

                        errorTextUser={errorTextUser}
                    />
                    <View>
                        <Button
                            title='Create'
                            color='#ff7913'
                            onPress={() => {
                                checkInputError({
                                    userText,
                                    passwordText1,
                                    passwordText2,
                                    setErrorTextUser,
                                    setErrorTextPassword1,
                                    setErrorTextPassword2
                                })
                                    ? handleSignUp({
                                        navigation,
                                        userText,
                                        passwordText1,
                                        passwordText2,
                                        setErrorTextUser,
                                        setErrorTextPassword1,
                                        setErrorTextPassword2,
                                        setShowSpinner
                                    }) : null
                            }
                            }
                        />
                    </View>
                </View>
            </View>
            <View style={styles.copyrightBox}>
                <Text style={styles.copyrightText}>&copy;Artur-Cavalcante</Text>
            </View>
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
    signupBox: {
        width: wp('70%'),
        height: hp('74%'),
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

    copyrightBox: {
        justifyContent: 'flex-end',
        height: hp('15%'),
    },
    copyrightText: {
        color: '#777777',
        fontStyle: 'italic'
    }
});
