import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView 
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import RouteRedirectLogin from '../../utils/RouteRedirectLogin';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home({ navigation, route }) {    
    const userTie = <Icon name='user-tie' size={100} />;

    const [redirect, setRedirect] = useState(null);

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}    
        >
            <TouchableOpacity 
                style={styles.logoutBox}
                onPress={() => setRedirect(<RouteRedirectLogin />)}
            >
                <Text style={styles.logout}>
                    Logout
                </Text>
            </TouchableOpacity>
            {redirect}

            <View style={styles.logoBox}>
                {userTie}
                <Text style={styles.logoName}>
                    Employee Records
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('List')}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            LIST
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        color='#ff9849'
                        style={styles.button}
                        onPress={() => navigation.navigate('Search')}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            SEARCH
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Create')}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            CREATE
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Alter')}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            ALTER
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Delete')}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            DELETE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.copyrightBox}>
                <Text style={styles.copyrightText}>&copy;Artur-Cavalcante</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    contentContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutBox:{
        alignSelf: 'flex-end',
        marginRight: '1%',
        marginTop: '5%',
        elevation: 10,
        backgroundColor: '#fc1f4a',
        borderRadius: 5,
    },
    logout: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    logoBox: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        height: hp('25%'),
    },
    logoName: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        height: hp('50%'),
        width: wp('60%')
    },
    button: {
        backgroundColor: '#ff7913',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 5,
        padding: 10,
        elevation: 5,
        marginBottom: 20
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    copyrightBox: {
        flex: 1,
        height: hp('17,5%'),
        justifyContent: 'flex-end',
    },
    copyrightText: {
        color: '#777777',
        fontStyle: 'italic'
    },
})
