import { FETCH_CURRENCY_CARD, FETCH_CURRENCY } from "../actions/actionTypes";

const initialState = {
  currencyCard: [],
  currency: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_CARD:
      return { ...state, currencyCard: action.payload };
    case FETCH_CURRENCY:
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};

export default reducer;
