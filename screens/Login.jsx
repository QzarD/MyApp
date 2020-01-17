import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput, Button} from 'react-native';
import axios from 'axios';
import {Container, Header, Content, Form, Item, Input, Label} from 'native-base';
import {Formik} from 'formik';


export default function Login({setPage}) {
    const [loading, setLoading] = useState(false);
    const loginUser=(values)=>{
        setLoading(true);
        axios.post('https://us-central1-socialclub-e188d.cloudfunctions.net/api/login', values)
            .then(res=>{
                console.log(res.data.token);
                /*dispatch(getUserData());
                dispatch({type: CLEAR_ERRORS});*/
                setPage(1);
                setLoading(false);
            })
            .catch(err=>{
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
            })
    };

    return (
        <Container style={styles.container}>
            <Content>
                <Formik initialValues={{email: '', password: ''}} onSubmit={values => {loginUser(values)
                }}>
                    {props => (
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input placeholder='email' onChangeText={props.handleChange('email')} value={props.values.email}/>
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input placeholder='password' onChangeText={props.handleChange('password')} value={props.values.password}/>
                            </Item>
                            <View style={styles.button}>
                                <Button title='Submit'  onPress={props.handleSubmit}/>
                            </View>
                            <View style={styles.answer}>
                                <Text>
                                    Dont have an account?
                                </Text>
                                <Button title='Signup' color='green'  onPress={()=>setPage(2)}/>
                            </View>
                        </Form>
                    )}
                </Formik>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaeaea'
    },
    button:{
        marginTop: 55,
    },
    answer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 30,
    },
});
