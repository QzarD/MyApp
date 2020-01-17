import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H3 } from 'native-base';
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

export default function Scream({scream:{
    body, createdAt, userImage, userHandle,
    screamId, likeCount, commentCount
}}) {
    dayjs.extend(relativeTime);

    return (
        <View style={styles.card}>
            <View style={styles.cardMedia}>
                <Thumbnail source={{uri: `${userImage}`}} />
            </View>
            <View style={styles.cardContent}>
                <H3>{userHandle}</H3>
                <Text style={styles.cardTextTime}>{dayjs(createdAt).fromNow()}</Text>
                <Text style={styles.cardContentBody}>{body}</Text>
                <View style={styles.cardContentButtons}>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>{likeCount} likes</Text>
                    </Button>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>{commentCount} comments</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        position: 'relative',
        flexDirection: 'row',
        margin: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    cardMedia: {
        justifyContent: 'center',
    },
    cardContent: {
        padding: 10,
        width:'80%'
    },
    cardContentButtons: {
        flexDirection: 'row',
    },
    cardTextTime: {
        fontSize: 14,
        color: '#888888'
    },
    cardContentBody: {
        marginLeft:10,
        marginTop:3,
    }
});
