import actionTypes from "./users.actionTypes";
import initialState from "./users.initState";


const usersReducer = (state = initialState, {type, payload}) => {
   switch(type) {
      case actionTypes.LOGGED_IN_SUCCESS:
         return {...state, isLoggedIn: true,  token: payload.token, isAuthenticated: true , username:payload.username};

      case actionTypes.LOGIN_FAILED:
         return {...state, error: payload };
        
      case actionTypes.LOGIN_KEEPSESSION:
         return {...state, isLoggedIn: true, isAuthenticated: true ,token: payload.token, username: payload.username };
        
      case actionTypes.LOGOUT:
         return {...state, error: payload, isLoggedIn: false,  token:"", isAuthenticated: false};

      case actionTypes.UPDATE_FAVOURITES:
         return {...state, favourites: payload }
        
      default:
         return state;
   }
}

export default usersReducer;