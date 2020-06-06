import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


import {widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default function Employee(props) {
    const {
        name_employee,
        cpf,
        address_employee,
        birthday_date_employee,
        employee_is_active,
        contract_date_employee,
        number_phone_employee,
        occupation_employee,
        salary_employee,
        sector_employee
    } = props.employeeInfo;

    return (
        <View style={styles.itemBox}>
            <Text style={styles.itemLabel} >Name</Text>
            <Text style={styles.itemText}>{name_employee}</Text>
            <Text style={styles.itemLabel} >Cpf</Text>
            <Text style={styles.itemText}>{cpf}</Text>
            <Text style={styles.itemLabel} >Address</Text>
            <Text style={styles.itemText}>{address_employee}</Text>
            <Text style={styles.itemLabel} >Date of Birth</Text>
            <Text style={styles.itemText}>{birthday_date_employee}</Text>
            <Text style={styles.itemLabel} >Active</Text>
            <Text style={styles.itemText}>{employee_is_active}</Text>
            <Text style={styles.itemLabel}>Contract Date</Text>
            <Text style={styles.itemText}>{contract_date_employee}</Text>
            <Text style={styles.itemLabel} >Number Phone</Text>
            <Text style={styles.itemText}>{number_phone_employee}</Text>
            <Text style={styles.itemLabel} >Occupation</Text>
            <Text style={styles.itemText}>{occupation_employee}</Text>
            <Text style={styles.itemLabel} >Salary</Text>
            <Text style={styles.itemText}>{salary_employee}</Text>
            <Text style={styles.itemLabel} >Sector</Text>
            <Text style={styles.itemText}>{sector_employee}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemBox: {
        width: wp('90%'),
        backgroundColor: '#ff7913',
        marginBottom: 38,
        padding: 10,
        borderRadius: 10,
        shadowRadius: 4,
        shadowColor: '#ff7913',
        elevation: 2,
        alignSelf: 'center'  
    },
    itemText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        padding: 5,
        marginBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#333333'
    },
    itemLabel: {
        color: '#333',
        marginBottom: 5,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});