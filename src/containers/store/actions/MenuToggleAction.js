import {TOGGLE_MENU} from "./actionTypes";

export function toggleMenu(){
    return{
        type: TOGGLE_MENU,
        payload: !this.state.menu
    }
}