import { FETCH_INDEX } from "./actionTypes";
import axios from "axios";

export const fetchIndex = callback => dispatch => {
  axios.get("/api/v3/majors-indexes").then(res => {
    let majorIndex = res.data.majorIndexesList;
    if (callback) callback();
    return dispatch({
      type: FETCH_INDEX,
      payload: majorIndex
    });
  });
};
