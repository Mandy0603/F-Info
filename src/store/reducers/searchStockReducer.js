import { SEARCH_STOCK, CLEAR_SEARCH_RESULT } from "../actions/actionTypes";

const initialState = {
  stockList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_STOCK:
      return { ...state, stockList: action.payload };
    case CLEAR_SEARCH_RESULT:
      return { ...state, ...initialState };

    default:
      return state;
  }
};

export default reducer;
