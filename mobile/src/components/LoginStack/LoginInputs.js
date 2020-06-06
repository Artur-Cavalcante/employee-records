import React from 'react';
import { 
    StyleSheet, 
    View, 
} from 'react-native';
import Reinput from 'reinput';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function LoginInputs(props) {
    const eyeOpened = <Icon 
                            name='eye' 
                            size={23} 
                            color='#777777' 
                            onPress={() => props.setShowPassword(true)} 
                        />;
    
    const eyeClosed = <Icon 
                            name='eye-slash' 
                            size={23} 
                            color='#777777' 
                            onPress={() => props.setShowPassword(false)} 
                        />;
      
    return (
        <View>
            <View >
                <Reinput
                    label='User'
                    labelColor='#777777'
                    activeColor='#777777'
                    underlineColor='#777777'
                    underlineActiveColor='#777777'
                    onChangeText={(newText) => { props.setUserText(newText) }}
                    fontSize= {16}
                    error={props.errorTextUser}
                    errorStyle={{fontSize: 12}}
                />
            </View>
            <View style={styles.passwordBox}>
                <Reinput

                    style={styles.passwordInput}
                    label='Password'
                    labelColor='#777777'
                    activeColor='#777777'
                    underlineColor='#777777'
                    underlineActiveColor='#777777'
                    secureTextEntry={props.showPassword ? false : true}
                    onChangeText={(newText) => { props.setPasswordText(newText) }}
                    fontSize= {16}
                    error={props.errorTextPassword}
                    errorStyle={{fontSize: 12}}
                />
                <View style={styles.showPassword}>
                    {props.showPassword ? eyeClosed : eyeOpened}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    passwordBox: {
        flexDirection: 'row'
    },
    passwordInput: {
        flex: 6
    },
    showPassword: {
        flex: 1,
        alignSelf: 'center',
        marginBottom: 40
    }
})
