import { REGISTER, REGISTER_FAILURE } from './types'
import axios from 'axios'

export const register = (data,email) => {
    return {
        type: REGISTER,
        success: data.message,
        payload: true,
        email:email

    }
}

export const registerfailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        payload: error

    }
}

export const registerAction = (newUserDetails) => {
    const email=newUserDetails.email
    return function (dispatch) {
        axios.post("http://localhost:2000/register", { newUserDetails })
            .then((res) => {
                dispatch(register(res.data,email))
            })
            .catch(err => {
                dispatch(registerfailure(err.message))
            })
    }

}

