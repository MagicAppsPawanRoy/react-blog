import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const blog = state.find((blog) => blog.id === navigation.getParam('id'))

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{blog.title}</Text>
            <Text style={styles.content}>{blog.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => ({
    headerRight: () => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Edit', { id: navigation.getParam('id') })
            }
        >
            <Feather name='edit' size={20} />
        </TouchableOpacity>
    ),
})

const styles = StyleSheet.create({
    container: { marginStart: 10 },
    heading: {
        fontSize: 20,
    },
    content: {
        fontSize: 16,
    },
})
export default ShowScreen
