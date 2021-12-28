import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native'
import { Context } from '../context/BlogContext'
const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(Context)
    return (
        <View>
            <Text styles={styles.label}>EnterTitle:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}
            />
            <Text styles={styles.label}>EnterContent:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(newContent) => setContent(newContent)}
            />

            <Button
                title='Add Post'
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index')
                    })
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
    },
    label: {
        fontSize: 15,
        marginBottom: 3,
        marginLeft: 5,
    },
})
export default CreateScreen
