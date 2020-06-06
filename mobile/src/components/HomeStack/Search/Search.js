import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import Reinput from 'reinput';

import maskCpf from '../../../utils/masks/maskCpf';
import checkInputError from './checkInputError';
import getEmployee from './getEmployee';

import ResponseBox from './ResponseBox';
import Employee from './Employee';


export default function Search({ route }) {
    const [searchColor, setSearchColor] = useState('#000000');
    const [redirect, setRedirect] = useState(null);
    const [showSpinner, setShowSpinner] = useState(null);
    
    const [showEmployee, setShowEmployee] = useState(null);
    const [employeeCpf, setEmployeeCpf] = useState('');
    const [errorTextCpf, setErrorTextCpf] = useState('');

    const [showRequestErrorCode, setShowRequestErrorCode] = useState(null);
    const [requestErrorCode, setRequestErrorCode] = useState('');

    const [employeeInfo, setEmployeeInfo] = useState('');

    const userTie = <Icon name='user-tie' size={100} />;
    const spinner = <Spinner 
        visible={true} 
        textContent={'Loading...'} 
        textStyle={{ color: '#fff' }} 
        color='white' 
        size='large'
        overlayColor='rgba(0,0,1,0.42)' 
    />

    const search = <Icon
        name='search'
        size={31}
        color={searchColor}
        onPress={() => {
            setSearchColor('#777777');
            checkInputError(employeeCpf, setErrorTextCpf) ?
            getEmployee({
                setShowSpinner,
                employeeCpf,
                setErrorTextCpf,
                setShowEmployee,
                setEmployeeInfo,
                setShowRequestErrorCode,
                setRequestErrorCode,
                setShowSpinner,
                setSearchColor,
                setRedirect
            }) :
            setShowSpinner(false)
            setSearchColor('#000000');
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
                <View style={styles.search}>
                    {search}
                </View>
            </View>
            {showSpinner ? spinner : null}
            {showEmployee ? <Employee employeeInfo={employeeInfo} /> : null}
            {showRequestErrorCode ? <ResponseBox requestErrorCode={requestErrorCode} /> : null}
            {redirect}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    logoBox: {
        alignSelf: 'center',
        marginTop: 10
    },
    inputBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15
    },
    input: {
        width: 250
    },
    search: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        paddingLeft: 5
    }
});