import {FETCH_USERS} from "../action_types";

const initialState = {
    list: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                list: action.payload,
            }
        default:
            return state
    }
}
