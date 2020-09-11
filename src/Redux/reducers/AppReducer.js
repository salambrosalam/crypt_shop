import {TOGGLE_MENU} from "../actions/actionTypes";

const initialState = {
    menu: false
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state, menu: !state.menu
            }
        default:
            return state
    }
}