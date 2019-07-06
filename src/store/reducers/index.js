import React from "react";
import { combineReducers } from "redux";

import indexReducer from "./indexReducer";
import stockPriceCardReducer from "./stockPriceCardReducer";
import discountCardReducer from "./discountCardReducer";
import cryptoReducer from "./cryptoReducer";
import currencyReducer from "./currencyReducer";
import statementReducer from "./statementReducer";

const reducers = combineReducers({
  majorIndex: indexReducer,
  stockPriceForCard: stockPriceCardReducer,
  discountCard: discountCardReducer,
  crypto: cryptoReducer,
  currency: currencyReducer,
  statements: statementReducer
});

export default reducers;
