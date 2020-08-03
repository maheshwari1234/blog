import {FETCH_BY_ID,FETCH_BY_ID_FAILURE} from '../action/types'

const reducer=(state={},action)=>{
switch(action.type){
            case FETCH_BY_ID:
                return{
                   Idposts:action.payload
                }
                case FETCH_BY_ID_FAILURE:
                    return{
                       error:action.payload
                    }
                default:
                    return state
}
}

export default reducer;

