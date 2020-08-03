const { SEARCH_BY_TAG,SEARCH_BY_WORD} = require("../action/types")


const searchTag=(state={},action)=>{
switch(action.type){
    case SEARCH_BY_TAG:
    return{
        ...state,
        data:action.payload
    }
    case SEARCH_BY_WORD:
    return{
        ...state,
        data:action.payload
    }
    default:
        return state
}
}

export default searchTag