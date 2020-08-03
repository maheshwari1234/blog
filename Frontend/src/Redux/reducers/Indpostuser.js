import {FETCH_BY_USER,FETCH_BY_USER_FAILURE} from '../action/types'

const reducer=(state={},action)=>{
switch(action.type){
            case FETCH_BY_USER:
                return{
                   Userposts:action.payload
                }
                case FETCH_BY_USER_FAILURE:
                    return{
                       error:action.payload
                    }
                default:
                    return state
}
}

export default reducer;

