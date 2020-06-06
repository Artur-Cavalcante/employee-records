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
        if (props.errorRequestMessage) {
            setBoxColor('#fc1f4a');
        } else {
            setBoxColor('#0DB104');
        }
    }, [props.errorRequestMessage])

    return (
        <View style={{...styles.container, backgroundColor: boxColor}}>
            <Text style={styles.text}>
                {props.errorRequestMessage ? props.errorRequestMessage : 'User has been deleted'}
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
