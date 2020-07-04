import { SEARCH_STOCK, CLEAR_SEARCH_RESULT } from "./actionTypes";

import axios from "axios";

// export const searchStock = (words, callback) => dispatch => {
//   const URL = "/web/v2/tickers?symbol=" + words + "&count=20";
//   axios.get(URL).then(res => {
//     let stockList = res.data;
//     if (callback) callback();
//     return dispatch({
//       type: SEARCH_STOCK,
//       payload: stockList
//     });
//   });
// };

export const searchStock = callback => dispatch => {
  const URL = "https://financialmodelingprep.com/api/v3/company/stock/list";
  axios.get(URL).then(res => {
    let stockList = res.data.symbolsList;
    if (callback) callback();
    return dispatch({
      type: SEARCH_STOCK,
      payload: stockList
    });
  });
};

export const clearSearchResult = callback => dispatch => {
  if (callback) callback();
  return dispatch({
    type: CLEAR_SEARCH_RESULT
  });
};
