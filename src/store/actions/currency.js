import { FETCH_CURRENCY_CARD, FETCH_CURRENCY } from "./actionTypes";
import axios from "axios";

export const fetchCurrencyCard = callback => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/forex/" +
    "EURUSD,USDJPY,GBPUSD,EURGBP,USDCHF";
  axios.get(URL).then(res => {
    let currencyCard = res.data.forexList;
    if (callback) callback();
    return dispatch({
      type: FETCH_CURRENCY_CARD,
      payload: currencyCard
    });
  });
};

export const fetchCurrency = callback => dispatch => {
  const URL = "https://financialmodelingprep.com/api/v3/forex";
  axios.get(URL).then(res => {
    let currency = res.data.forexList;
    if (callback) callback();
    return dispatch({
      type: FETCH_CURRENCY,
      payload: currency
    });
  });
};
