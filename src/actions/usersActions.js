import axios from 'axios'

export const asyncRegisterUser = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/register',formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(setUser(result))
            }
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
}

export const setUser = (formData) => {
    return {
        type : 'SET_USER',
        payload : formData
    }
}