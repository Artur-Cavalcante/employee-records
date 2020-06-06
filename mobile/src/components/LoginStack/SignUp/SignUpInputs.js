import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Reinput from 'reinput';

export default function SignInputs(props) {
    return (
        <View styles={styles.inputsContainer}>
            <View style={styles.userBox}>
                <Reinput
                    label='User'
                    labelColor='#777777'
                    activeColor='#777777'
                    underlineColor='#777777'
                    underlineActiveColor='#777777'
                    onChangeText={(newText) => { props.setUserText(newText) }}
                    fontSize={16}
                    error={props.errorTextUser}
                    errorStyle={{ fontSize: 12 }}

                />
            </View>
            <View style={styles.passwordBox}>
                <Reinput

                    label='Password'
                    labelColor='#777777'
                    activeColor='#777777'
                    underlineColor='#777777'
                    underlineActiveColor='#777777'
                    onChangeText={(newText) => { props.setPasswordText1(newText) }}
                    fontSize={16}
                    error={props.errorTextPassword1}
                    errorStyle={{ fontSize: 12 }}
                />
                <Reinput
                    label='Password'
                    labelColor='#777777'
                    activeColor='#777777'
                    underlineColor='#777777'
                    underlineActiveColor='#777777'
                    onChangeText={(newText) => { props.setPasswordText2(newText) }}
                    fontSize={16}
                    error={props.errorTextPassword2}
                    errorStyle={{ fontSize: 12 }}
                />

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    inputsContainer: {
        flex: 1
    },
    userBox: {
        display: 'flex'
    },
    passwordBox: {
        display: 'flex'
    }
})