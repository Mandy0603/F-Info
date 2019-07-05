import { FETCH_INDEX } from "./actionTypes";
import axios from "axios";

export const fetchIndex = () => dispatch => {
  axios
    .get("https://financialmodelingprep.com/api/v3/majors-indexes")
    .then(res => {
      let majorIndex = res.data.majorIndexesList;
      return dispatch({
        type: FETCH_INDEX,
        payload: majorIndex
      });
    });
};
