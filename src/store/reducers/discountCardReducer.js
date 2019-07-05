import { FETCH_DISCOUNT_CARD, FETCH_DISCOUNT } from "../actions/actionTypes";

const initialState = {
  discountCard: [],
  discountValue: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOUNT_CARD:
      return { ...state, discountCard: action.payload };
    case FETCH_DISCOUNT:
      return { ...state, discountValue: action.payload };
    default:
      return state;
  }
};

export default reducer;
