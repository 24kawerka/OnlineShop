import { TOOGLE_IS_FETCHING } from './actionTypes'

type InitialIsFetchingStateType = {
    isFetching: boolean
}
export const InitialIsFetchingState: InitialIsFetchingStateType = {
    isFetching: false
}
type actionType = {
    type: typeof TOOGLE_IS_FETCHING,
    isFetching: boolean
}

export const ToogleisFetchingReducer = (state = InitialIsFetchingState, action: actionType) => {
    switch (action.type) {
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state
    }
}
export const toogleIsFetching = (isFetching: boolean) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching
    }
}