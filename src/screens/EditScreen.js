import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context)
    const blogPost = state.find((blog) => blog.id == navigation.getParam('id'))

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return (
        <View>
            <Text>Title</Text>
            <TextInput
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}
            />
            <Text>Content</Text>
            <TextInput
                value={content}
                onChangeText={(newContent) => setContent(newContent)}
            />
            <Button
                title='Update'
                onPress={() => {
                    console.log(navigation.getParam('id'))
                    editBlogPost(navigation.getParam('id'), title, content)
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({})
export default EditScreen
