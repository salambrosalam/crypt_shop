import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBitcoinPriceTC} from "../../Redux/reducers/AppReducer";
import BitcoinBox from "./BitcoinBox";

const BitcoinBoxContainer = (props) => {
    const stateBitcoin = useSelector(state => state.menu.bitcoinPrice);
    const dispatch = useDispatch();

    useEffect(() => {
      const timer = setInterval(() => dispatch(getBitcoinPriceTC()), 3000);
      return () => clearInterval(timer);
    }, []);

    return stateBitcoin && (
      <BitcoinBox bitcoinUSD={stateBitcoin.bpi.USD.rate}
        bitcoinEUR={stateBitcoin.bpi.EUR.rate}
        bitcoinGBP={stateBitcoin.bpi.GBP.rate}
      />
    )
}

export default BitcoinBoxContainer;
