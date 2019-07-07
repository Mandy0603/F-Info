import { FETCH_SUMMARY } from "../actions/actionTypes";

const initialState = {
  summary: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUMMARY:
      return { ...state, summary: action.payload };
    default:
      return state;
  }
};

export default reducer;
