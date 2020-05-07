import React, {useState} from 'react';
import { StyleSheet, Text,  View, Button } from 'react-native';
import Reinput from 'reinput';
import Icon from 'react-native-vector-icons/FontAwesome5';

const user_tie = <Icon name="user-tie" size={100} />; 

export default function Login() {
    const [passwordText, setPasswordText] = useState('');
    

    return (

        <View style={styles.container}>
            <View style={styles.loginBox}>
                <View style={styles.logoBox}>
                    {user_tie}
                </View>

                <View>
                    <View >
                        <Reinput
                            label="User"
                            labelColor="white"
                            activeColor="white"
                            underlineColor="white"
                            underlineActiveColor="white"
                        />
                    </View>
                    <View >
                        <Reinput
                            label="Password"
                            labelColor="white"
                            activeColor="white"
                            underlineColor="white"
                            underlineActiveColor="white"
                            secureTextEntry={true}
                            onChangeText={(newText) => {setPasswordText(newText) }}
                        />
                    </View>
                    <View>
                        <Button
                            title="Login"
                            color="#ff9849"
                            onClick={handleLogin}
                        />
                    </View>
                    <View>
                        <Text style={styles.AccountText}>Don't have account?</Text>
                        <Text style={styles.createAccountText}>Create Account</Text>
                    </View>
                </View>
            </View>
            <View style={styles.copyrightBox}>
                <Text style={styles.copyrightText}>&copy;Artur-Cavalcante</Text>
            </View>
        </View>
    );
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
    logoBox:{
        width: 250,
        display: "flex",
        alignItems: "center",
        marginBottom: 50

    },
    loginBox: {
        flex: 4,
        justifyContent: "center",
    },
    AccountText:{
        color: "white",
        textAlign: "center",
        marginTop: 20
    },  
    createAccountText:{
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
    },
});