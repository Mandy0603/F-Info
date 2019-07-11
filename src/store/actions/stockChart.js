import { FETCH_STOCK_CHARTS } from "./actionTypes";
import axios from "axios";

import { timeParse } from "d3-time-format";

const parseDate = timeParse("%Y-%m-%d");

export const fetchStockCharts = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/historical-price-full/" +
    symbol +
    "?serietype=candle";
  let stockChart = { candleChart: null };
  axios.get(URL).then(res => {
    stockChart = res.data.historical;

    for (let i = 0; i < stockChart.length; i++) {
      stockChart[i].date = parseDate(stockChart[i].date);
    }
    if (callback) callback();
    return dispatch({
      type: FETCH_STOCK_CHARTS,
      payload: stockChart
    });
  });
};
