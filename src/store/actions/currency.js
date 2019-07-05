import { FETCH_CURRENCY_CARD, FETCH_CURRENCY } from "./actionTypes";
import axios from "axios";

export const fetchCurrencyCard = () => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/forex/" +
    "EURUSD,USDJPY,GBPUSD,EURGBP,USDCHF";
  axios.get(URL).then(res => {
    let currencyCard = res.data.forexList;
    return dispatch({
      type: FETCH_CURRENCY_CARD,
      payload: currencyCard
    });
  });
};

export const fetchCurrency = () => dispatch => {
  const URL = "https://financialmodelingprep.com/api/v3/forex";
  axios.get(URL).then(res => {
    let currency = res.data.forexList;
    return dispatch({
      type: FETCH_CURRENCY,
      payload: currency
    });
  });
};
