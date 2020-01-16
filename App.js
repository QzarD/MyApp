import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.container}>
          <Home/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
