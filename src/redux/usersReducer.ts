import { InitialUsersStateType, usersActionType } from "../Types/types";
import { GET_USERS } from "./actionTypes";

const InitialUsersState: InitialUsersStateType = {
    users: []
}
export const usersReducer = (state = InitialUsersState, action: usersActionType) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users.map(p => p)
            }
        default: return state
    }
}
export const getUsers = (users: usersActionType) => {
    return {
        type: GET_USERS,
        users
    }


}