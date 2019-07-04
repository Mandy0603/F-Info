import { FETCH_FX_RATE } from "./actionTypes";
import axios from "axios";

export const fetchFXRate = () => dispatch => {
  axios.get("https://financialmodelingprep.com/api/v3/forex").then(res => {
    let fxRate = res.data.forexList;
    return dispatch({
      type: FETCH_FX_RATE,
      payload: fxRate
    });
  });
};
