import { FETCH_STOCK_CHARTS } from "../actions/actionTypes";

const initialState = {
  stockCharts: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_CHARTS:
      return { ...state, stockCharts: action.payload };

    default:
      return state;
  }
};

export default reducer;
