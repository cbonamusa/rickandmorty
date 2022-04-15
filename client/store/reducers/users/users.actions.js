import actionTypes from "./users.actionTypes";

/*
 * LogIn
 */
const loginRequestAction = () => ({
    type: actionTypes.LOGIN_REQ
});

const loginSuccessAction = () => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: { token }
});


export default {
    loginRequestAction,
    loginSuccessAction,
    loginErrorAction
}