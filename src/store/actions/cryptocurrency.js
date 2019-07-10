import { FETCH_CRYPTO_CARD, FETCH_CRYPTO } from "./actionTypes";
import axios from "axios";

export const fetchCryptoCard = callback => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/cryptocurrency/" +
    "BTC,ETH,XRP,BCH,EOS";
  axios.get(URL).then(res => {
    let cryptoCard = res.data.cryptocurrenciesList;
    if (callback) callback();
    return dispatch({
      type: FETCH_CRYPTO_CARD,
      payload: cryptoCard
    });
  });
};

export const fetchCryptocurrency = callback => dispatch => {
  const URL = "https://financialmodelingprep.com/api/v3/cryptocurrencies";
  axios.get(URL).then(res => {
    let crypto = res.data.cryptocurrenciesList;
    if (callback) callback();
    return dispatch({
      type: FETCH_CRYPTO,
      payload: crypto
    });
  });
};
