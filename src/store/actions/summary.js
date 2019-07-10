import { FETCH_SUMMARY } from "./actionTypes";
import axios from "axios";

export const fetchSummary = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/company/profile/" + symbol;
  axios.get(URL).then(res => {
    if (callback) callback();
    let summary = res.data;
    return dispatch({
      type: FETCH_SUMMARY,
      payload: summary
    });
  });
};
