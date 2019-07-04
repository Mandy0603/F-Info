import { FETCH_STOCK_PRICE_CARD } from "./actionTypes";
import axios from "axios";

export const fetchStockPriceCard = () => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/stock/real-time-price/" +
    "AAPL,MSFT,FB,ZNGA,NVDA";
  axios.get(URL).then(res => {
    let stockPriceCard = res.data.companiesPriceList;
    console.log(stockPriceCard);
    return dispatch({
      type: FETCH_STOCK_PRICE_CARD,
      payload: stockPriceCard
    });
  });
};
