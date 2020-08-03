const { REGISTER,REGISTER_FAILURE} = require("../action/types")

const initialstate={
    isLogged:false,
    isregister:false
}

const register=(state=initialstate,action)=>{
switch(action.type){
    case REGISTER:
    return{
        ...state,
        isLogged:true,
        success:action.success,
        isregister:true,
        email:action.email
    }
    case REGISTER_FAILURE:
        return{
            isLogged:false,
        isregister:false,
            error:action.payload
        }
    default:
        return state
}
}

export default register