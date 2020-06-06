import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import {widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function ResponseBox(props) {
    const [boxColor, setBoxColor] = useState(null);

    useEffect(() => {
        if (props.requestErrorCode) {
            setBoxColor('#fc1f4a');
        } else {
            setBoxColor('#0DB104');
        }
    }, [props.requestErrorCode])

    return (
        <View style={{...styles.container, backgroundColor: boxColor}}>
            <Text style={styles.text}>
                {props.requestErrorCode ? props.requestErrorCode : 'User has been altered'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 50,
        padding: 40,
        borderRadius: 10,
        width: wp('90%'),
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center'
    }
})
