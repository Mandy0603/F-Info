import { FETCH_FX_RATE } from "../actions/actionTypes";

const initialState = {
  fxRate: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FX_RATE:
      return { ...state, fxRate: action.payload };
    default:
      return state;
  }
};

export default reducer;
