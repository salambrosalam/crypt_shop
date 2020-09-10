import {TOGGLE_MENU} from "../actions/actionTypes";

const initialState = {
    menu: false
}

export default function menuToggleReducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_MENU:
            return{
                ...state, menuToggle: action.payload
            }
        default:
            return state
    }
}