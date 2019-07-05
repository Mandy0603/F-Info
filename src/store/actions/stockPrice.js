import {
  FETCH_STOCK_PRICE_CARD,
  FETCH_INDIVIDUAL_STOCK,
  FETCH_INDIVIDUAL_STOCK_ERROR
} from "./actionTypes";
import axios from "axios";

export const fetchStockPriceCard = () => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/stock/real-time-price/" +
    "AAPL,MSFT,FB,ZNGA,NVDA";
  axios.get(URL).then(res => {
    let stockPriceCard = res.data.companiesPriceList;
    return dispatch({
      type: FETCH_STOCK_PRICE_CARD,
      payload: stockPriceCard
    });
  });
};

export const fetchIndividualStock = symbol => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/stock/real-time-price/" + symbol;
  const URL_NAME =
    "https://financialmodelingprep.com/api/v3/company/profile/" + symbol;
  let companyName;
  let industry;

  axios
    .get(URL_NAME)
    .then(res => {
      if (res.data.profile) {
        companyName = res.data.profile.companyName;
        industry = res.data.profile.industry;
      }
    })
    .then(
      axios.get(URL).then(res => {
        let stockPrice = res.data;
        stockPrice.companyName = companyName;
        stockPrice.industry = industry;
        return dispatch({
          type: FETCH_INDIVIDUAL_STOCK,
          payload: stockPrice
        });
      })
    );
};
