import { TOOGLE_IS_FETCHING } from './actionTypes'

type InitialIsFetchingStateType = {
    isFetching: boolean
}
const InitialIsFetchingState: InitialIsFetchingStateType = {
    isFetching: false
}
type ActionType = {
    type: typeof TOOGLE_IS_FETCHING,
    isFetching: boolean
}

const ToogleisFetchingReducer = (state = InitialIsFetchingState, action: ActionType) => {
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
const toogleIsFetching = (isFetching: boolean) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching
    }
}
export { InitialIsFetchingState, ToogleisFetchingReducer, toogleIsFetching }
export type { InitialIsFetchingStateType }