import actionTypes from "./users.actionTypes";


const loginRequest = () => ({
    type: actionTypes.LOGIN_REQ
});

const loginSuccess = () => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: { token }
});

const loginError = (error) => ({
    type: actionTypes.LOGIN_ERROR,
    payload: error
});


export default {
    loginRequest,
    loginSuccess,
    loginError
}