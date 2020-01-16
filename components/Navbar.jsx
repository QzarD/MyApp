import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button onPress={()=>{}} title='Login' color='blue'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={()=>{}} title='Home' color='blue'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={()=>{}} title='Signup' color='blue'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        //backgroundColor: '#222',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonContainer:{
        color: 'black',
        padding: 12,
        textAlign: 'center'
        //backgroundColor: 'blue'
    }
});
