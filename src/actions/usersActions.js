import { axios } from "../helpers/axios"

export const asyncRegisterUser = (formData,handleReset) => {
    return (dispatch) => {
        axios.post('/users/register',formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
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
        axios.post('/users/login',formData)
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

export const asyncLogoutUser = (handleIsLoggedIn,handlePush) => {
    return () => {
        axios.delete('/users/logout',{
            headers : { 'x-auth' : localStorage.getItem('token') }
        })
        .then((response) => {
            const result = response.data
            alert(result.notice)
            localStorage.removeItem('token')
            handleIsLoggedIn()
            handlePush()
        })  
        .catch((err) => {
            alert(err.message)
        })     
    }
}

export const asyncGetUser = () => {
    return (dispatch) => {
        axios.get('/users/account',{
            headers : { 'x-auth' : localStorage.getItem('token') }
        })
        .then((response) => {
            const result = response.data
            dispatch(getUser(result))
            dispatch(isLoading())
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const getUser = (user) => {
    return {
        type : 'GET_USER',
        payload : user
    }
}

const isLoading = () => {
    return {
        type : 'IS_LOADING'
    }
}