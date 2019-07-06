import {
  FETCH_INCOME_STATEMENT,
  FETCH_BALANCE_SHEET,
  FETCH_CASH_FLOW,
  CLEAR_STATEMENTS
} from "./actionTypes";
import axios from "axios";

export const fetchIncomeStatement = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/financials/income-statement/" +
    symbol;
  axios.get(URL).then(res => {
    callback();
    let incomeStatement = res.data;
    return dispatch({
      type: FETCH_INCOME_STATEMENT,
      payload: incomeStatement
    });
  });
};

export const fetchBalanceSheet = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/" +
    symbol;
  axios.get(URL).then(res => {
    callback();
    let incomeStatement = res.data;
    return dispatch({
      type: FETCH_BALANCE_SHEET,
      payload: incomeStatement
    });
  });
};
export const fetchCashFlow = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/" +
    symbol;
  axios.get(URL).then(res => {
    callback();
    let incomeStatement = res.data;
    return dispatch({
      type: FETCH_CASH_FLOW,
      payload: incomeStatement
    });
  });
};

export const clearStatements = () => {
  return {
    type: CLEAR_STATEMENTS
  };
};
