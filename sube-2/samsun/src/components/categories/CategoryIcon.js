import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/colors';

const CategoryIcon = ({name,icon}) =>
{
    return (
        <View style={styles.container}>
            <View style={styles.IconContainer}>
                <FontAwesome5 name={icon} size={24} color={Colors.white}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}> {name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        margin: 5,
        width: 120,
    },
    IconContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 20,
        width: 40,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
    }
})

export default CategoryIcon