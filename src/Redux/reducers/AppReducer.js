export const TOGGLE_MENU = "TOGGLE_MENU";

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

export const menuToggleActionCreator = () => {
    return{
        type: TOGGLE_MENU,
    }
}
