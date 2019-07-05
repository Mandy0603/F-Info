import { FETCH_CRYPTO_CARD, FETCH_CRYPTO } from "../actions/actionTypes";

const initialState = {
  cryptoCard: [],
  cryptoCurrency: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_CARD:
      return { ...state, cryptoCard: action.payload };
    case FETCH_CRYPTO:
      return { ...state, cryptoCurrency: action.payload };
    default:
      return state;
  }
};

export default reducer;
