import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ResponseBox(props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.requestErrorCode ? props.requestErrorCode : null}    
            </Text>    
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        margin: 50,
        backgroundColor: '#fc1f4a',
        padding: 40,
        borderRadius: 10,
        width: wp('90%'),
        alignSelf: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center'
    }
})