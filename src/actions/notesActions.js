import {axios} from '../helpers/axios'

export const asyncGetNotes = () => {
    return (dispatch) => {
        axios.get('/api/notes',{
            headers : {'x-auth' : localStorage.getItem('token')}
        })
        .then((response) => {
            const result = response.data
            dispatch(setNotes(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncAddNote = (formData,handleReset) => {
    return (dispatch) => {
        axios.post('/api/notes',formData,{
            headers : { 'x-auth' : localStorage.getItem('token') }
        })
        .then((response) => {
            const result = response.data
            dispatch(addNote(result))
            handleReset()
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncEditNote = (formData,handleToggle) => {
    return (dispatch) => {
        axios.put(`/api/notes/${formData.id}`,formData,{
            headers : {'x-auth' : localStorage.getItem('token')}
        })
        .then((response) => {
            const result = response.data
            dispatch(editNote(result))
            handleToggle()
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncRemoveNote = (id) => {
    return (dispatch) => {
        axios.delete(`/api/notes/${id}`,{
            headers : { 'x-auth' : localStorage.getItem('token') }
        })
        .then((response) => {
            const result = response.data
            dispatch(removeNote(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
} 

export const asyncShowNote = (id) => {
    return (dispatch) => {
        axios.get(`/api/notes/${id}`,{
            headers : {'x-auth' : localStorage.getItem('token')}
        })
        .then((response) => {
            const result = response.data
            alert(`${result.title} 
${result.body}`)
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const setNotes = (result) => {
    return {
        type : 'SET_NOTES',
        payload : result
    }
}

export const addNote = (result) => {
    return {
        type : 'ADD_NOTE',
        payload : result
    }
}

export const editNote = (result) => {
    return {
        type : 'EDIT_NOTE',
        payload : result
    }
}

export const removeNote = (result) => {
    return {
        type : 'REMOVE_NOTE',
        payload : result
    }
}