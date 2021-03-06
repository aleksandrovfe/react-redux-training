import {HIDE_LOADER, SHOW_LOADER} from "../action_types";

const initialSate = {
    loading: false
}

export const appReducer = (state = initialSate, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
