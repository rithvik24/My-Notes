import Axios from 'axios'

export const axios = Axios.create({
    baseURL : 'https://dct-user-auth.herokuapp.com'
})