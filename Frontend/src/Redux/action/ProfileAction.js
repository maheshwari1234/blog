import {FETCH_PROFILE,FETCH_PROFILE_FAILURE}  from './types'
import axios from 'axios'

export const FetchProfile=(data)=>{
    return {
        type:FETCH_PROFILE,
        payload:data
    }
}

export const FetchProfileFailure= (error) => {
    return {
        type: FETCH_PROFILE_FAILURE,
        payload: error
    }
}


export const Profile = (name) => {
    return function (dispatch) {
        axios.get("http://localhost:2000/profile/"+name)
            .then((response) => {
                dispatch(FetchProfile(response.data))
            })
            .catch((error)=>{
                dispatch(FetchProfileFailure(error.message))
            })

    }


}