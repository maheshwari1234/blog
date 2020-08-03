import { NEW_POST } from "./types";
import axios from 'axios'

export const newPost=(data)=>{
    return{
        type:NEW_POST,
        payload:data
    }
}


export const NewpostAction=(newData,username)=>{
    return function(dispatch){
        axios.put("http://localhost:2000/newpost/"+username,newData)
        .then((res)=>{
    dispatch(newPost(true))
            })     
    }
    }
