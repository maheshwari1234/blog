import { LOGIN, LOGOUT, LOGIN_FAILURE } from './types'
import axios from 'axios'

export const login = (data,email) => {
    return {
        type: LOGIN,
        payload: true,
        success:data.message,
        email:email

    }
}

export const loginfailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    }
}


export const logout = (isLogged) => {
    return {
        type: LOGOUT,
        payload: isLogged

    }
}

export const loginAction = (email, password) => {
    return function (dispatch) {
        axios.post("http://localhost:2000/login", { email, password })
            .then((res) => {
                if(res){
                dispatch(login(res.data,email))
                }
            })
            .catch(err => {
                console.log("error of login",err)
                dispatch(loginfailure("Login Failed', 'Something went wrong'"))
            })
    }

}

export const logoutAction = () => {
    return function (dispatch) {
        dispatch(logout(false))

    }

}
