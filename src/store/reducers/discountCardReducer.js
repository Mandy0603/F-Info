import {
  FETCH_DISCOUNT_CARD,
  FETCH_DISCOUNT,
  FETCH_DISCOUNT_ERROR
} from "../actions/actionTypes";

const initialState = {
  discountCard: [],
  discountValue: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOUNT_CARD:
      return { ...state, discountCard: action.payload };
    case FETCH_DISCOUNT:
      return { ...state, discountValue: action.payload, error: "" };
    case FETCH_DISCOUNT_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
