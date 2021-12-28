import React, { useContext } from 'react'
import {
    TouchableOpacity,
    View,
    Button,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    deleteBlogPost(item.id)
                                }}
                            >
                                <Feather style={styles.icon} name='trash' />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
})
export default IndexScreen
