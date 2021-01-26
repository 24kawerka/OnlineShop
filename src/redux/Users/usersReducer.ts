import { InitialUsersStateType, UsersActionType } from "../../Types/types";
import { GET_USERS } from "../Utils/actionTypes";

const InitialUsersState: InitialUsersStateType = {
    users: []
}
const usersReducer = (state = InitialUsersState, action: UsersActionType) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users.map(p => p)
            }
        default: return state
    }
}
const getUsers = (users: UsersActionType) => {
    return {
        type: GET_USERS,
        users
    }
}
export { usersReducer, getUsers }