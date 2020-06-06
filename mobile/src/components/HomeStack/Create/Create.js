import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import ResponseBox from './ResponseBox';
import CreateEmployeeForm from './CreateEmployeeForm';
import checkInputError from './checkInputError';
import createEmployee from './createEmployee';

export default function Create() {

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
    const [errorRequestMessage, setErrorRequestMessage] = useState(null);
    const [showResponseBox, setShowResponseBox] = useState('');

    const [nameText, setNameText] = useState(null);
    const [errorNameText, setErrorNameText] = useState(null);

    const [cpfText, setCpfText] = useState(null);
    const [errorCpfText, setErrorCpfText] = useState(null);

    const [addressText, setAddressText] = useState(null);
    const [errorAddressText, setErrorAddressText] = useState(null);

    const [dateOfBirthText, setdateOfBirthText] = useState(null);
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

    return (
        <ScrollView>
            <View style={styles.logoBox}>
                {userTie}
            </View>
            {showSpinner ? spinner : null}
            {showResponseBox ? <ResponseBox errorRequestMessage={errorRequestMessage} /> :
                <View>
                    <CreateEmployeeForm
                        nameText={nameText}
                        setNameText={setNameText}
                        errorNameText={errorNameText}

                        cpfText={cpfText}
                        setCpfText={setCpfText}
                        errorCpfText={errorCpfText}

                        addressText={addressText}
                        setAddressText={setAddressText}
                        errorAddressText={errorAddressText}

                        dateOfBirthText={dateOfBirthText}
                        setDateOfBirthText={setdateOfBirthText}
                        errorDateOfBirthText={errorDateOfBirthText}

                        activeText={activeText}
                        setActiveText={setActiveText}
                        errorActiveText={errorActiveText}

                        contractDate={contractDate}
                        setContractDate={setContractDate}
                        errorContractDate={errorContractDate}

                        numberPhoneText={numberPhoneText}
                        setNumberPhoneText={setNumberPhoneText}
                        errorNumberPhoneText={errorNumberPhoneText}

                        occupationText={occupationText}
                        setOccupationText={setOccupationText}
                        errorOccupationText={errorOccupationText}

                        salaryText={salaryText}
                        setSalaryText={setSalaryText}
                        errorSalaryText={errorSalaryText}

                        sectorText={sectorText}
                        setSectorText={setSectorText}
                        errorSectorText={errorSectorText}

                    />
                    <TouchableOpacity
                        onPress={() => {
                            checkInputError({
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
                                setErrorSectorText
                            }) ?
                                createEmployee({
                                        nameText,
                                        numberPhoneText,
                                        dateOfBirthText,
                                        cpfText,
                                        contractDate,
                                        addressText,
                                        occupationText,
                                        salaryText,
                                        sectorText,
                                        activeText,
                                        setShowResponseBox,
                                        setShowSpinner,
                                        setErrorRequestMessage,
                                        setRedirect,
                                        setErrorCpfText,
                                }) :
                                setShowSpinner(false);
                        }}
                        style={styles.button}

                    >
                        <Text style={styles.buttonText}>
                            Create
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            {redirect}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logoBox: {
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10,
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
    }
})