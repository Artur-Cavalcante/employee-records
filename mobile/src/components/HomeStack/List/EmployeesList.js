import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import Employee from './Employee';

export default function EmployeesList(props) {
  const [employeesList, setEmployeesList] = useState('');

  useEffect(() => {
    setEmployeesList(props.employeesList);
  }, [props.employeesList])

  return (
    <View style={styles.flatListBox}>
      {employeesList ?
        <FlatList
          data={employeesList}
          renderItem={({ item }) => (
            <Employee
              name_employee={item.name_employee}
              cpf={item.cpf}
              address_employee={item.address_employee}
              birthday_date_employee={item.birthday_date_employee}
              employee_is_active={item.employee_is_active}
              contract_date_employee={item.contract_date_employee}
              number_phone_employee={item.number_phone_employee}
              occupation_employee={item.occupation_employee}
              salary_employee={item.salary_employee}
              sector_employee={item.sector_employee}
            />
          )}
          keyExtractor={item => item.cpf}
        />
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  flatListBox: {
    flex: 1,
    marginTop: 1,
  },
  
})