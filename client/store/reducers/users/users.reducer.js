import actionTypes from "./users.actionTypes";
import initialState from "./users.initState";


const usersReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.LOGIN_REQUEST:
            return state;

        case actionTypes.LOGGED_IN_SUCCESS:
            return {...state, isLoggedIn: true,  token: payload, isAuthenticated: true };

        case actionTypes.LOGIN_FAILED:
            return {...state, error: payload };
        
        case actionTypes.LOGIN_KEEPSESSION:
            return {...state, isLoggedIn: true, isAuthenticated: true };
        
        case actionTypes.LOGOUT:
            return {...state, error: payload, isLoggedIn: false,  token:"", isAuthenticated: false};

        default:
            return state;
    }
}

export default usersReducer;