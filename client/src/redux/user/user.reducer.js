import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    loggedIn: false,
    synced: true
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER_START:
            return {
                ...state,
                synced: false
            }
        case UserActionTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                loggedIn: false,
                synced: true
            }
        case UserActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                synced: true
            }
    }
}

export default userReducer;