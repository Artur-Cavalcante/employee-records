import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Reinput from 'reinput';
import ResponseBox from './ResponseBox';
import AlterEmployeeForm from './AlterEmployeeForm';

import maskCpf from '../../../utils/masks/maskCpf';

import checkInputErrorSearch from './checkInputErrorSearch';
import checkInputErrorAlter from './checkInputErrorAlter';

import getEmployee from './getEmployee';
import alterEmployee from './alterEmployee';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Alter() {
    const [redirect, setRedirect] = useState(null);

    const [employeeInfo, setEmployeeInfo] = useState('');
    const [editColor, setEditColor] = useState(null);

    const [showForm, setShowForm] = useState(null);
    const [showSpinner, setShowSpinner] = useState(null);

    const [employeeCpf, setEmployeeCpf] = useState('');
    const [requestErrorCode, setRequestErrorCode] = useState('');
    const [errorTextCpf, setErrorTextCpf] = useState('');

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
        name='user-edit'
        size={31}
        color={editColor}
        onPress={() => {
            setEditColor('#777777');
            checkInputErrorSearch({
                setErrorTextCpf,
                employeeCpf,
            }) ?
                getEmployee({
                    setShowSpinner,
                    employeeCpf,
                    setEditColor,
                    setShowForm,
                    setShowResponseBox,
                    setEmployeeInfo,
                    setRequestErrorCode,
                    setRedirect,
                    setErrorTextCpf,
                }) :
                setShowSpinner(false);
        }}
    />

    const [showResponseBox, setShowResponseBox] = useState('');

    const [nameText, setNameText] = useState(null);
    const [errorNameText, setErrorNameText] = useState(null);

    const [cpfText, setCpfText] = useState(null);
    const [errorCpfText, setErrorCpfText] = useState(null);

    const [addressText, setAddressText] = useState(null);
    const [errorAddressText, setErrorAddressText] = useState(null);

    const [dateOfBirthText, setDateOfBirthText] = useState(null);
    const [errorDateOfBirthText, setErrorDateOfBirthText] = useState(null);

    const [activeText, setActiveText] = useState(null);
    const [errorActiveText, setErrorActiveText] = useState(null);

    const [contractDate, setContractDate] = useState(null);
    const [errorContractDate, setErrorContractDate] = useState(null);

    const [numberPhoneText, setNumberPhoneText] = useState(null);
    const [errorNumberPhoneText, setErrorNumberPhoneText] = useState(null);

    const [occupationText, setOccupationText] = useState(null);
    const [errorOccupationText, setErrorOccupationText] = useState(null);

    const [salaryText, setSalaryText] = useState(null);
    const [errorSalaryText, setErrorSalaryText] = useState(null);

    const [sectorText, setSectorText] = useState(null);
    const [errorSectorText, setErrorSectorText] = useState(null);

    useEffect(() => {
        setNameText(employeeInfo.name_employee);
        setNumberPhoneText(employeeInfo.number_phone_employee);
        setDateOfBirthText(employeeInfo.birthday_date_employee);
        setCpfText(employeeInfo.cpf);
        setContractDate(employeeInfo.contract_date_employee);
        setAddressText(employeeInfo.address_employee);
        setOccupationText(employeeInfo.occupation_employee);
        setSalaryText(employeeInfo.salary_employee);
        setSectorText(employeeInfo.sector_employee);
        setActiveText(employeeInfo.employee_is_active);
    }, [employeeInfo])


    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoBox}>
                {userTie}
            </View>
            {showForm ?
                <>
                    <View style={styles.alterEmployeeForm}>
                        <AlterEmployeeForm
                            nameText={nameText}
                            cpfText={cpfText}
                            addressText={addressText}
                            dateOfBirthText={dateOfBirthText}
                            activeText={activeText}
                            contractDate={contractDate}
                            numberPhoneText={numberPhoneText}
                            occupationText={occupationText}
                            salaryText={salaryText}
                            sectorText={sectorText}

                            errorNameText={errorNameText}
                            errorCpfText={errorCpfText}
                            errorAddressText={errorAddressText}
                            errorDateOfBirthText={errorDateOfBirthText}
                            errorActiveText={errorActiveText}
                            errorContractDate={errorContractDate}
                            errorNumberPhoneText={errorNumberPhoneText}
                            errorOccupationText={errorOccupationText}
                            errorSalaryText={errorSalaryText}
                            errorSectorText={errorSectorText}

                            setNameText={setNameText}
                            setCpfText={setCpfText}
                            setAddressText={setAddressText}
                            setDateOfBirthText={setDateOfBirthText}
                            setActiveText={setActiveText}
                            setContractDate={setContractDate}
                            setNumberPhoneText={setNumberPhoneText}
                            setOccupationText={setOccupationText}
                            setSalaryText={setSalaryText}
                            setSectorText={setSectorText}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            checkInputErrorAlter({
                                nameText,
                                cpfText,
                                addressText,
                                dateOfBirthText,
                                activeText,
                                contractDate,
                                numberPhoneText,
                                occupationText,
                                salaryText,
                                sectorText,
                                setErrorNameText,
                                setErrorCpfText,
                                setErrorAddressText,
                                setErrorDateOfBirthText,
                                setErrorActiveText,
                                setErrorContractDate,
                                setErrorNumberPhoneText,
                                setErrorOccupationText,
                                setErrorSalaryText,
                                setErrorSectorText,
                            }) ?
                                alterEmployee({
                                    nameText,
                                    cpfText,
                                    addressText,
                                    dateOfBirthText,
                                    activeText,
                                    contractDate,
                                    numberPhoneText,
                                    occupationText,
                                    salaryText,
                                    sectorText,
                                    setShowForm,
                                    setShowResponseBox,
                                    setShowSpinner,
                                    setRequestErrorCode,
                                    setRedirect,
                                    setErrorTextCpf,
                                }) :
                                setShowSpinner(false);
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Alter
                        </Text>
                    </TouchableOpacity>
                </>
                :
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
            }
            {showSpinner ? spinner : null}
            {showResponseBox ? <ResponseBox requestErrorCode={requestErrorCode} /> : null}
            {redirect}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logoBox: {
        alignSelf: 'center',
        marginBottom: 20,
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
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#ff7913',
        paddingHorizontal: 100,
        paddingVertical: 15,
        borderRadius: 5,
        elevation: 3,
        marginBottom: 20
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    alterEmployeeForm: {
        width: wp('90%'),
        backgroundColor: '#ff7913',
        marginBottom: 38,
        padding: 10,
        borderRadius: 10,
        shadowRadius: 4,
        shadowColor: '#ff7913',
        elevation: 2,
        alignSelf: 'center'
    }
});