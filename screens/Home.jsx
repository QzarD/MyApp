import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import Scream from "../components/Scream";

export default function Home() {
    const [screams, setScreams] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://us-central1-socialclub-e188d.cloudfunctions.net/api/screams')
            .then(res => {
                setScreams(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }, []);

    return (
        <View style={styles.container}>
            {(loading)
                ? <Text>Loading...</Text>
                : <FlatList data={screams} keyExtractor={item => item.screamId}
                            renderItem={({item}) => (
                                <Scream scream={item}/>
                            )}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
