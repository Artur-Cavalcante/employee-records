import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home({navigation}) {
    return (
        <View style={styles.container}>

            <Button
                title="List"
                color="#ff9849"
                onPress={ () => navigation.navigate('List')}
            />
             <Button
                title="Search"
                color="#ff9849"
                onPress={ () => navigation.navigate('Search')}
            />
             <Button
                title="Create"
                color="#ff9849"
                onPress={ () => navigation.navigate('Create')}
            />
             <Button
                title="Alter"
                color="#ff9849"
                onPress={ () => navigation.navigate('Alter')}
            />
             <Button
                title="Delete"
                color="#ff9849"
                onPress={ () => navigation.navigate('Delete')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ff7913',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
