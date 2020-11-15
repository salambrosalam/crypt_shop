import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.coindesk.com/v1/"
});

export const cryptCurrencyAPI = {
    getBitcoinPrice(){
        return(
            instance.get(`bpi/currentprice.json`)
        )
    }
}
