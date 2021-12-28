import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [
                ...state,
                {
                    title: action.payload.title,
                    content: action.payload.content,
                    id: Math.floor(Math.random() * 99999),
                },
            ]
        case 'delete_blogPost':
            return state.filter((blog) => {
                return blog.id !== action.payload
            })
        default:
            return state
    }
}

function addBlogPost(dispatch) {
    return (title, content) => {
        dispatch({ type: 'add_blogPost', payload: { title, content } })
    }
}

function deleteBlogPost(dispatch, id) {
    return function (id) {
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
)
