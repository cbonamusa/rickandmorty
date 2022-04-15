import actionTypes from "./users.actionTypes";

/*
 * LogIn
 */
export const loginRequestAction = () => ({
    type: actionTypes.LOGIN_REQUEST
});

export const loginSuccessAction = (token) => ({
    type: actionTypes.LOGGED_IN_SUCCESS,
    payload: token
});

export const loginErrorAction = (error) => ({
    type: actionTypes.LOGIN_FAILED,
    payload: error
})

/*
 * LogOut
 */
export const logoutAction = () => ({
    type: actionTypes.LOGOUT
});

