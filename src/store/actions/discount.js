import {
  FETCH_DISCOUNT_CARD,
  FETCH_DISCOUNT,
  FETCH_DISCOUNT_ERROR
} from "./actionTypes";
import axios from "axios";

export const fetchDiscountCard = callback => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/" +
    "EXLS,GST,HSGX,EVEP,TNTR";
  // EXLS,KELYB,GST,HSGX,EVEP
  axios.get(URL).then(res => {
    let discountCard = res.data.DCFList;
    if (callback) callback();
    return dispatch({
      type: FETCH_DISCOUNT_CARD,
      payload: discountCard
    });
  });
};

export const fetchDiscount = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/" +
    symbol;
  const URL_NAME =
    "https://financialmodelingprep.com/api/v3/company/profile/" + symbol;
  let discountValue;

  axios
    .get(URL)
    .then(res => {
      discountValue = res.data;
      return axios.get(URL_NAME);
    })
    .then(res => {
      discountValue.companyName = res.data.profile.companyName;
      if (callback) callback();
      return dispatch({
        type: FETCH_DISCOUNT,
        payload: discountValue
      });
    })
    .catch(err => {
      return dispatch({
        type: FETCH_DISCOUNT_ERROR,
        payload: "Error"
      });
    });
};
