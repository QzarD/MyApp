import React,{useState} from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import Navbar from "./components/Navbar";

const getFonts=()=>Font.loadAsync({
    Roboto: require('./fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
});

export default function App() {
    const [fontsLoaded, setFontsLoaded]=useState(false);
    if (fontsLoaded){
        return <View style={styles.container}>
            <Navbar/>
        </View>
    } else {
        return <AppLoading startAsync={getFonts} onFinish={()=>setFontsLoaded(true)}/>
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
