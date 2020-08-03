import { SEARCH_BY_TAG,SEARCH_BY_WORD } from "./types";
import axios from 'axios'

export const searchByTag=(data)=>{
    return{
        type:SEARCH_BY_TAG,
        payload:data
    }
}


export const searchByWord=(data)=>{
    return{
        type:SEARCH_BY_WORD,
        payload:data
    }
}

export const searchByTagAction=(tag)=>{
    return function(dispatch){
axios.get("http://localhost:2000/t/"+tag)
.then((response)=>{
    
    dispatch(searchByTag(response.data))
})  
    }
}

export const searchByWordAction=(word)=>{
    return function(dispatch){
axios.get("http://localhost:2000/search/"+word)
.then((response)=>{
    dispatch(searchByWord(response.data))
})  
    }
}