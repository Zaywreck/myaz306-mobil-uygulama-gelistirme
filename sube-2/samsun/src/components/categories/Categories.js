import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CategoryHeader from './CategoryHeader'
import categories from './categoryData'
import CategoryIcon from './CategoryIcon'

const Categories = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.categoryContainer}>
                <CategoryIcon icon={item?.icon} name={item?.categoryName} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <CategoryHeader name="Kategoriler" />
            <FlatList
                // horziontal  kaydırmalı yapmak için horizontal={true} yazılabilir
                numColumns={3}
                keyExtractor={(item) => item.categoryId}
                data={categories}
                renderItem={renderItem}
                style={styles.categoryList}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Categories