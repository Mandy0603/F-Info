import {
  FETCH_INCOME_STATEMENT,
  FETCH_BALANCE_SHEET,
  FETCH_CASH_FLOW,
  CLEAR_STATEMENTS
} from "../actions/actionTypes";

const initialState = {
  incomeStatement: null,
  balanceSheet: null,
  cashFlow: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INCOME_STATEMENT:
      return { ...state, incomeStatement: action.payload };
    case FETCH_BALANCE_SHEET:
      return { ...state, balanceSheet: action.payload };
    case FETCH_CASH_FLOW:
      return { ...state, cashFlow: action.payload };
    case CLEAR_STATEMENTS:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default reducer;
