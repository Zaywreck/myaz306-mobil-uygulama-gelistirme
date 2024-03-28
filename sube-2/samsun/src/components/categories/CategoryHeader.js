import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/colors';


const CategoryHeader = ({ name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.name} >
                <Text>{name}</Text>
            </View>
            <View style={styles.icon}>
                <FontAwesome5 name="list-ul" size={24} color={Colors.primary500}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    name:{

    },
    icon: {
    }
})

export default CategoryHeader