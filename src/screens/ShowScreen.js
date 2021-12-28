import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const blog = state.find((blog) => blog.id === navigation.getParam('id'))

    return (
        <View>
            <Text>{blog.title}</Text>
            <Text>{blog.id}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})
export default ShowScreen
