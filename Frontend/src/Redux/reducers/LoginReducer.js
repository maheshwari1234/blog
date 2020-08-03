
const { LOGIN, LOGOUT, LOGIN_FAILURE } = require("../action/types")
const initialstate = {
    isLogged: false,
    error: ''
}

const login = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged: action.payload,
                error: '',
                success:action.success,
                email:action.email
            }
        case LOGOUT:
            return {
                isLogged: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                error: action.payload,

            }
        default:
            return state
    }
}

export default login