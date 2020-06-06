import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import ResponseBox from './ResponseBox';
import EmployeesList from './EmployeesList';

import getEmployees from './getEmployees';

export default function List() {
    const userTie = <Icon name='user-tie' size={100} />;
    const spinner = <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
        color='white'
        size='large'
        overlayColor='rgba(0,0,1,0.42)'
    />

    const [showSpinner, setShowSpinner] = useState(null);
    const [redirect, setRedirect] = useState(null);
    const [employeesList, setEmployeeList] = useState(null);
    const [errorCode, setErrorCode] = useState('');

    useEffect(() => {
        getEmployees({
            setShowSpinner,
            setEmployeeList,
            setErrorCode,
            setRedirect,
        });
    }, [])

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
        >
            <View style={styles.logoBox}>
                {userTie}
            </View>
            {showSpinner ? spinner : null}
            {employeesList ? <EmployeesList employeesList={employeesList} /> : <ResponseBox errorCode={errorCode} />}
            {redirect}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoBox: {
        width: 250,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10

    },
})