import {FETCH_BY_USER,FETCH_BY_USER_FAILURE}  from './types'
import axios from 'axios'

export const FetchByuser=(data)=>{
    return {
        type:FETCH_BY_USER,
        payload:data
    }
}

export const fetchuserfailure = (error) => {
    return {
        type: FETCH_BY_USER_FAILURE,
        payload: error
    }
}


export const fetchUser = (username,id) => {
    return function (dispatch) {
        axios.get("http://localhost:2000/posts/"+username+"/"+id)
            .then((response) => {
                dispatch(FetchByuser(response.data))
            })
            .catch((error)=>{
                dispatch(fetchuserfailure(error.message))
            })
    }
}