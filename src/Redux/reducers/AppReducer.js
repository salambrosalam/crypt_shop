import {cryptCurrencyAPI} from "../../api/bitcoinAPI";

export const TOGGLE_MENU = "TOGGLE_MENU";
export const GET_BITCOIN_PRICE = "GET_BITCOIN_PRICE";

const initialState = {
    menu: false,
    bitcoinPrice: null
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state, menu: !state.menu
            }
        case GET_BITCOIN_PRICE:
            return {
                ...state,
                bitcoinPrice: action.payload
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

export const getBitcoinPriceAC = (bitcoinPrice) => {
    return{
        type: GET_BITCOIN_PRICE,
        payload: bitcoinPrice
    }
}

export const getBitcoinPriceTC = () => async dispatch => {
        try{
            const response = await cryptCurrencyAPI.getBitcoinPrice();
            dispatch(getBitcoinPriceAC(response.data))
            console.log(response.data)
        }catch(e){
            console.log(e)
        }
}
