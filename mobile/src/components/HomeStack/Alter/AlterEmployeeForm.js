import React from 'react';
import Reinput from 'reinput';

import maskInputDate from '../../../utils/masks/maskInputDate';
import maskPhoneNumber from '../../../utils/masks/maskPhoneNumber';
import maskSalary from '../../../utils/masks/maskSalary';
import maskCpf from '../../../utils/masks/maskCpf';

export default function AlterEmployeeForm(props){
    return (
        <>
            <Reinput
                label='Name'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: Gustavo'
                onChangeText={(newText) => { props.setNameText(newText) }}
                value={props.nameText}
                error={props.errorNameText}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='CPF'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: 11122233344'
                onChangeText={(newText) => { props.setCpfText(newText) }}
                value={props.cpfText ? maskCpf(props.cpfText) : null}
                maxLength={11}
                error={props.errorCpfText}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='Address'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: Rua Fernando Augusto Silva Nº12'
                onChangeText={(newText) => { props.setAddressText(newText) }}
                value={props.addressText}
                error={props.errorAddressText}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='Date of Birth'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: 08/04/2002'
                maxLength={10}
                onChangeText={(newText) => { props.setDateOfBirthText(maskInputDate(newText)) }}
                value={props.dateOfBirthText}
                error={props.errorDateOfBirthText}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='Active'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: Yes'
                onChangeText={(newText) => { props.setActiveText(newText) }}
                value={props.activeText}
                error={props.errorActiveText}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='Contract Date'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: 02/03/2020'
                maxLength={10}
                onChangeText={(newText) => { props.setContractDate(maskInputDate(newText)) }}
                value={props.contractDate}
                error={props.errorContractDate}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='Number Phone'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: (79) 99804-1987'
                onChangeText={(newText) => { props.setNumberPhoneText(maskPhoneNumber(newText)) }}
                maxLength={15}
                value={props.numberPhoneText}
                error={props.errorNumberPhoneText}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='Occupation'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: Information Systems Technician'
                onChangeText={(newText) => { props.setOccupationText(newText) }}
                value={props.occupationText}
                error={props.errorOccupationText}
                errorStyle={{ fontSize: 12 }}
            />
            <Reinput
                label='Salary'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                onChangeText={(newText) => { props.setSalaryText(maskSalary(newText)) }}
                value={props.salaryText}
                maxLength={14}
                value={props.salaryText}
                error={props.errorSalaryText}
                errorStyle={{ fontSize: 12 }}
                placeholder='e.g: 2.300,00'
            />
            <Reinput
                label='Sector'
                labelColor='#333333'
                activeColor='#333333'
                underlineColor='#333333'
                color='#ffffff'
                fontSize={16}
                placeholder='e.g: T.I'
                onChangeText={(newText) => { props.setSectorText(newText) }}
                value={props.sectorText}
                error={props.errorSectorText}
                errorStyle={{ fontSize: 12 }}
            />
        </>
    );
};