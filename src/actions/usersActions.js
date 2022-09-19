import axios from 'axios'

export const asyncRegisterUser = (formData,handleReset) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/register',formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(setUser(result))
                alert('Successfully registered user')
                handleReset()
            }
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncLoginUser = (formData,handleReset,handleIsLoggedIn) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/login',formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                alert('successfully logged in')
                handleReset()
                handleIsLoggedIn()
                localStorage.setItem('token',result.token)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncLogoutUser = (handleIsLoggedIn) => {
    return () => {
        axios.delete('https://dct-user-auth.herokuapp.com/users/logout',{
            headers : { 'x-auth' : localStorage.getItem('token') }
        })
        .then((response) => {
            const result = response.data
            alert(result.notice)
            localStorage.removeItem('token')
            handleIsLoggedIn()
        })  
        .catch((err) => {
            alert(err.message)
        })     
    }
}

export const setUser = (formData) => {
    return {
        type : 'SET_USER',
        payload : formData
    }
}