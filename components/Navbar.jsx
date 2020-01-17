import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Login from "../screens/Login";
import Home from "../screens/Home";
import Signup from "../screens/Signup";

export default function Navbar() {
    const[page, setPage]=useState(1);

    return (
        <Container>
            <Header hasTabs />
            <Tabs initialPage={1} page={page}>
                <Tab heading="Login">
                    <Login setPage={setPage}/>
                </Tab>
                <Tab heading="Home">
                    <Home />
                </Tab>
                <Tab heading="Signup">
                    <Signup />
                </Tab>
            </Tabs>
        </Container>
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
