import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Scream({scream:{
    body, createdAt, userImage, userHandle,
    screamId, likeCount, commentCount
}}) {
    return (
        <View style={styles.card}>
            <Text>{body}</Text>
            <Text>{createdAt}</Text>
            <Text>{userImage}</Text>
            <Text>{userHandle}</Text>
            <Text>{screamId}</Text>
            <Text>{likeCount}</Text>
            <Text>{commentCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        flexDirection: 'row',
        marginBottom: 20,
        width: 300
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
    }
});
