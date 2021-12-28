import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            action.payload.Callback()
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
        case 'edit_blogPost':
            state = state.filter(
                (blogPost) => blogPost.id !== action.payload.id
            )
            return [
                ...state,
                {
                    title: action.payload.title,
                    content: action.payload.content,
                    id: action.payload.id,
                },
            ]
        default:
            return state
    }
}

function editBlogPost(dispatch) {
    return (id, title, content) => {
        dispatch({ type: 'edit_blogPost', payload: { id, title, content } })
    }
}

function addBlogPost(dispatch) {
    return (title, content, Callback) => {
        dispatch({
            type: 'add_blogPost',
            payload: { title, content, Callback },
        })
    }
}

function deleteBlogPost(dispatch, id) {
    return function (id) {
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    []
)
