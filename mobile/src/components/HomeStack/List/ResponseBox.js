import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
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
                {props.errorCode ? props.errorCode : 'Empty'}    
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
        width: wp('90%')
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center'
    }
})