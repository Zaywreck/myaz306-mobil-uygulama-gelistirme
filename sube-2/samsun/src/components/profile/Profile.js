import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/colors';
import AvatarImage from '../../../assets/mert.jpeg.jpg';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.col1}>
                <Image
                    style={styles.avatar}
                    source={AvatarImage} />
            </View>
            <View style={styles.col2}>
                <View>
                    <Text style={[styles.text, styles.weight]}>Hoş geldiniz!</Text>
                    <Text style={styles.text}>Mert Gülle</Text>
                </View>
            </View>
            <View style={styles.col3}>
                <Ionicons name="notifications" size={24} color={Colors.white} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 32,

    },
    col1: {
        flex: .2
    },
    col2: {
        flex: .7,
        justifyContent: 'space-evenly'
    },
    col3: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 100
    },
    text: {
        color: Colors.white,
        fontSize: 16,
    },
    weight: {
        fontWeight: 'bold'
    }
})

export default Profile