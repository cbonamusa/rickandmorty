import actionTypes from "./users.actionTypes";

/** 
 * Log In
 */
export const loginSuccessAction = (token, username) => ({
   type: actionTypes.LOGGED_IN_SUCCESS,
   payload: {
      token,
      username
    }
});

export const loginErrorAction = (error) => ({
   type: actionTypes.LOGIN_FAILED,
   payload: error
})

export const loginKeepSession = (token, username) => ({
   type: actionTypes.LOGIN_KEEPSESSION,
   payload:  {
      token,
      username
   }
})

/*
 * Log Out
 */
export const logoutAction = () => ({
   type: actionTypes.LOGOUT
});


/*
 * Update favourites
 */
export const updateFavouritesAction = (favourite) => ({
   type: actionTypes.UPDATE_FAVOURITES,
   payload: favourite
});


