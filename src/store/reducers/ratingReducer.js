import { FETCH_RATING } from "../actions/actionTypes";

const initialState = {
  rating: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RATING:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export default reducer;
