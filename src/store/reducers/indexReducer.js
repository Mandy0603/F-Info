import { FETCH_INDEX } from "../actions/actionTypes";

const initialState = {
  majorIndex: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INDEX:
      return { ...state, majorIndex: action.payload };
    default:
      return state;
  }
};

export default reducer;
