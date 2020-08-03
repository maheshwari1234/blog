import {FETCH_BY_ID,FETCH_BY_ID_FAILURE}  from './types'
import axios from 'axios'

export const FetchById=(data)=>{
    return {
        type:FETCH_BY_ID,
        payload:data
    }
}

export const fetchIdfailure = (error) => {
    return {
        type: FETCH_BY_ID_FAILURE,
        payload: error
    }
}


export const fetch = (id) => {
    return function (dispatch) {
        axios.get("http://localhost:2000/posts/"+id)
            .then((response) => {
                dispatch(FetchById(response.data[0]))
            })
            .catch((error)=>{
                dispatch(fetchIdfailure(error.message))
            })

    }


}