import {FETCH_PROFILE_FAILURE,FETCH_PROFILE} from '../action/types'

const Profilereducer=(state={},action)=>{
switch(action.type){
            case FETCH_PROFILE:
                return{
                   ProfilePosts:action.payload
                }
                case FETCH_PROFILE_FAILURE:
                    return{
                       error:action.payload
                    }
                default:
                    return state
}
}

export default Profilereducer;

