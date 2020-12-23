// const UserActionTypes = {
//     LOGIN_USER_START: 'LOGIN_USER_START',
//     LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
//     LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
// }

import UserActionTypes from "./user.types";

export const loginUserStart = user => ({
    type: UserActionTypes.LOGIN_USER_START,
    payload: user
})

export const loginUserSuccess = user => ({
    type: UserActionTypes.LOGIN_USER_SUCCESS
})

export const loginUserFailure = user => ({
    type: UserActionTypes.LOGIN_USER_FAILURE
})