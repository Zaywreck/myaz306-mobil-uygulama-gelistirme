import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import CategoryHeader from '../categories/CategoryHeader'
import speakersdata from './eventdata'

const Events = () => {

    const renderSpeakers = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image style={styles.cover} source={{uri: item.src}} />
            </View>
        )
    }

    return (
        <View>
            <CategoryHeader name="Konuşmacılar" />
            <FlatList
                keyExtractor={(item) => item.src}
                horizontal={true}
                data={speakersdata}
                renderItem={renderSpeakers}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16,
        overflow: 'hidden'
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 16
    }
})

export default Events