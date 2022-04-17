import actionTypes from "./users.actionTypes";

/*
 * LogIn
 */
export const loginRequestAction = () => ({
    type: actionTypes.LOGIN_REQUEST
});

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
 * LogOut
 */
export const logoutAction = () => ({
    type: actionTypes.LOGOUT
});


/*
 * Add to favourites
 */
export const updateFavouritesAction = (favourite) => ({
    type: actionTypes.UPDATE_FAVOURITES,
    payload: favourite
});


