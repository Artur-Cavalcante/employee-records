import React from 'react';
import { StyleSheet, View } from 'react-native';
import Reinput from 'reinput';


export default function LoginInputs(props) {
    return (
        <View>
            <View >
                <Reinput
                    label="User"
                    labelColor="white"
                    activeColor="white"
                    underlineColor="white"
                    underlineActiveColor="white"
                    onChangeText={(newText) => { props.setUserText(newText) }}
                />
            </View>
            <View style={styles.passwordBox}>
                <Reinput

                    style={styles.passwordInput}
                    label="Password"
                    labelColor="white"
                    activeColor="white"
                    underlineColor="white"
                    underlineActiveColor="white"
                    secureTextEntry={props.showPassword}
                    onChangeText={(newText) => { props.setPasswordText(newText) }}
                />
                <View style={styles.showPassword}>
                    {props.showPassword ? props.eyeOpened : props.eyeClosed}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    passwordBox: {
        flexDirection: "row"
        
    },
    passwordInput: {
        flex: 6
    },
    showPassword: {
        flex: 1,
        alignSelf: "center",
        marginBottom: 40
        
    },  
})