import { FETCH_RATING } from "./actionTypes";
import axios from "axios";

export const fetchRating = (symbol, callback) => dispatch => {
  const URL =
    "https://financialmodelingprep.com/api/v3/company/rating/" + symbol;
  const URL_PROFILE =
    "https://financialmodelingprep.com/api/v3/company/profile/" + symbol;
  const URL_SHARES =
    "https://financialmodelingprep.com/api/v3/enterprise-value/" + symbol;
  const URL_DIVIDEND =
    "https://financialmodelingprep.com/api/v3/company-key-metrics/" + symbol;
  const URL_RATIO =
    "https://financialmodelingprep.com/api/v3/financial-ratios/" + symbol;

  let rating;
  axios
    .get(URL)
    .then(res => {
      rating = res.data;
      return axios.get(URL_PROFILE);
    })
    .then(res => {
      rating.price =
        res.data.profile.length === 0 ? "-" : res.data.profile.price;
      rating.beta = res.data.profile.length === 0 ? "-" : res.data.profile.beta;
      rating.volAvg =
        res.data.profile.length === 0 ? "-" : res.data.profile.volAvg;
      rating.mktCap =
        res.data.profile.length === 0 ? "-" : res.data.profile.mktCap;
      rating.lastDiv =
        res.data.profile.length === 0 ? "-" : res.data.profile.lastDiv;
      return axios.get(URL_SHARES);
    })
    .then(res => {
      rating.shares =
        res.data.enterpriseValues.length === 0
          ? "-"
          : res.data.enterpriseValues[0]["Number of Shares"];
      return axios.get(URL_DIVIDEND);
    })
    .then(res => {
      if (res.data.metrics) {
        rating.dividendYield =
          res.data.metrics.length === 0
            ? "-"
            : res.data.metrics[0]["Dividend Yield"];
      } else {
        rating.dividendYield = "-";
      }
      return axios.get(URL_RATIO);
    })
    .then(res => {
      if (res.data.ratios) {
        rating.roe =
          res.data.ratios.length === 0
            ? "-"
            : res.data.ratios[0].profitabilityIndicatorRatios.returnOnEquity;
        rating.roa =
          res.data.ratios.length === 0
            ? "-"
            : res.data.ratios[0].profitabilityIndicatorRatios.returnOnAssets;
        rating.opMargin =
          res.data.ratios.length === 0
            ? "-"
            : res.data.ratios[0].profitabilityIndicatorRatios
                .pretaxProfitMargin;
        rating.de =
          res.data.ratios.length === 0
            ? "-"
            : res.data.ratios[0].debtRatios.debtEquityRatio;
        rating.pe =
          res.data.ratios.length === 0
            ? "-"
            : res.data.ratios[0].investmentValuationRatios.priceEarningsRatio;
        rating.pb =
          res.data.ratios.length === 0
            ? "-"
            : res.data.ratios[0].investmentValuationRatios.priceBookValueRatio;
      } else {
        rating.roe = rating.roa = rating.opMargin = rating.de = rating.pe = rating.pb =
          "-";
      }

      if (callback) callback();
      return dispatch({
        type: FETCH_RATING,
        payload: rating
      });
    });
};
