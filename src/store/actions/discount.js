import { FETCH_DISCOUNT_CARD, FETCH_DISCOUNT } from "./actionTypes";
import axios from "axios";

export const fetchDiscountCard = () => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/" +
    "EXLS,GST,HSGX,EVEP,TNTR";
  // EXLS,KELYB,GST,HSGX,EVEP
  axios.get(URL).then(res => {
    let discountCard = res.data.DCFList;
    console.log(discountCard);
    return dispatch({
      type: FETCH_DISCOUNT_CARD,
      payload: discountCard
    });
  });
};

export const fetchDiscount = symbol => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/" +
    symbol;
  const URL_NAME =
    "https://financialmodelingprep.com/api/v3/company/profile/" + symbol;
  let companyName;

  axios
    .get(URL_NAME)
    .then(res => {
      if (res.data.profile) {
        companyName = res.data.profile.companyName;
      }
    })
    .then(
      axios.get(URL).then(res => {
        let discountValue = res.data;
        discountValue.companyName = companyName;
        return dispatch({
          type: FETCH_DISCOUNT,
          payload: discountValue
        });
      })
    );
};
