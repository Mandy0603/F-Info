import {
  FETCH_STOCK_PRICE_CARD,
  FETCH_INDIVIDUAL_STOCK,
  FETCH_INDIVIDUAL_STOCK_ERROR
} from "./actionTypes";
import axios from "axios";

export const fetchStockPriceCard = callback => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/stock/real-time-price/" +
    "AAPL,MSFT,FB,ZNGA,NVDA";
  axios.get(URL).then(res => {
    let stockPriceCard = res.data.companiesPriceList;
    if (callback) callback();
    return dispatch({
      type: FETCH_STOCK_PRICE_CARD,
      payload: stockPriceCard
    });
  });
};

export const fetchIndividualStock = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/stock/real-time-price/" + symbol;
  const URL_NAME =
    "https://financialmodelingprep.com/api/v3/company/profile/" + symbol;

  let stockPrice;

  axios
    .get(URL)
    .then(res => {
      stockPrice = res.data;
      return axios.get(URL_NAME);
    })
    .then(res => {
      stockPrice.companyName = res.data.profile.companyName;
      stockPrice.industry = res.data.profile.industry;

      if (callback) callback();
      return dispatch({
        type: FETCH_INDIVIDUAL_STOCK,
        payload: stockPrice
      });
    })
    .catch(err => {
      return dispatch({
        type: FETCH_INDIVIDUAL_STOCK_ERROR,
        payload: "Error"
      });
    });
};
