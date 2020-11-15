import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBitcoinPriceTC} from "../../Redux/reducers/AppReducer";
import BitcoinBox from "./BitcoinBox";

const BitcoinBoxContainer = (props) => {

    const [bitcoinUSDCurrency, setBitcoinUSDCurrency] = useState();
    const [bitcoinEURCurrency, setBitcoinEURCurrency] = useState();
    const [bitcoinGBPCurrency, setBitcoinGBPCurrency] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBitcoinPriceTC())
        if (state.bitcoinPrice) {
            let bitcoinPriceUSD = state.bitcoinPrice.bpi.USD.rate;
            let bitcoinPriceEUR = state.bitcoinPrice.bpi.EUR.rate;
            let bitcoinPriceGBP = state.bitcoinPrice.bpi.GBP.rate;
            setBitcoinUSDCurrency(bitcoinPriceUSD);
            setBitcoinEURCurrency(bitcoinPriceEUR);
            setBitcoinGBPCurrency(bitcoinPriceGBP);
        }
    })

    const state = useSelector(state => state.menu)

    return (
        <BitcoinBox bitcoinUSD={bitcoinUSDCurrency}
                    bitcoinEUR={bitcoinEURCurrency}
                    bitcoinGBP={bitcoinGBPCurrency}/>
    )
}

export default BitcoinBoxContainer;
