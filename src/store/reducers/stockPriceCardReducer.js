import { FETCH_STOCK_PRICE_CARD } from "../actions/actionTypes";

const initialState = {
  pricesForCards: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_PRICE_CARD:
      return { ...state, pricesForCards: action.payload };
    default:
      return state;
  }
};

export default reducer;
