import {
  FETCH_STOCK_PRICE_CARD,
  FETCH_INDIVIDUAL_STOCK,
  FETCH_INDIVIDUAL_STOCK_ERROR
} from "../actions/actionTypes";

const initialState = {
  pricesForCards: [],
  individualStock: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_PRICE_CARD:
      return { ...state, pricesForCards: action.payload };
    case FETCH_INDIVIDUAL_STOCK:
      return { ...state, individualStock: action.payload, error: "" };
    case FETCH_INDIVIDUAL_STOCK_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
