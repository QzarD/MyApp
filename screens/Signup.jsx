import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import Scream from "../components/Scream";

export default function Signup() {
    return (
        <View style={styles.container}>
            <Text>Signup</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
