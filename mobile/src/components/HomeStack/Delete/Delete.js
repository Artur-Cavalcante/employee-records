import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import Reinput from 'reinput';

import ResponseBox from './ResponseBox';
import checkInputError from './checkInputError';
import deleteEmployee from './deleteEmployee';
import maskCpf from '../../../utils/masks/maskCpf';

export default function Delete() {
    const [trashColor, setTrashColor] = useState('#fc1f4a');

    const [showSpinner, setShowSpinner] = useState(null);

    const [employeeCpf, setEmployeeCpf] = useState('');

    const [showResponseBox, setShowResponseBox] = useState('');

    const [errorRequestMessage, setErrorRequestMessage] = useState(null);
    const [errorTextCpf, setErrorTextCpf] = useState('');

    const [redirect, setRedirect] = useState(null);

    const userTie = <Icon name='user-tie' size={100} />;
    const spinner = <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
        color='white'
        size='large'
        visible={true}
        overlayColor='rgba(0,0,1,0.42)'
    />

    const trash = <Icon
        name='trash'
        size={27}
        color={trashColor}
        onPress={() => {
            setTrashColor('#777777');
            checkInputError({
                setErrorTextCpf,
                employeeCpf
            }) ?
            deleteEmployee({
                setShowResponseBox,
                setShowSpinner,
                employeeCpf,
                setTrashColor,
                setErrorRequestMessage,
                setErrorTextCpf,
                setRedirect,
            }) :
            setShowSpinner(false);
            setTrashColor('#fc1f4a');
        }}
    />

    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoBox}>
                {userTie}
            </View>
            <View style={styles.inputBox}>
                <Reinput
                    label='Type a CPF'
                    style={styles.input}
                    labelColor='#777777'
                    activeColor='#777777'
                    underlineColor='#777777'
                    underlineActiveColor='#777777'
                    fontSize={16}
                    onChangeText={(newText) => { setEmployeeCpf(newText) }}
                    value={employeeCpf ? maskCpf(employeeCpf) : ''}
                    maxLength={11}
                    error={errorTextCpf}
                    errorStyle={{ fontSize: 12 }}
                />
                <View style={styles.trash}>
                    {trash}
                </View>
            </View>
            {showSpinner ? spinner : null}
            {showResponseBox ? <ResponseBox errorRequestMessage={errorRequestMessage} /> : null}
            {redirect}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    logoBox: {
        alignSelf: 'center',
        marginTop: 10
    },
    inputBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15,
    },
    input: {
        width: 250,
    },
    trash: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        paddingLeft: 5
    }
});
