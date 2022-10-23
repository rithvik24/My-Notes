import Axios from 'axios'

export const axios = Axios.create({
    baseURL : 'http://dct-user-auth.herokuapp.com'
})