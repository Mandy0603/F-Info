import React from "react";
import { combineReducers } from "redux";

import indexReducer from "./indexReducer";
import stockPriceCardReducer from "./stockPriceCardReducer";
import discountCardReducer from "./discountCardReducer";
import cryptoReducer from "./cryptoReducer";
import currencyReducer from "./currencyReducer";

const reducers = combineReducers({
  majorIndex: indexReducer,
  stockPriceForCard: stockPriceCardReducer,
  discountCard: discountCardReducer,
  crypto: cryptoReducer,
  currency: currencyReducer
});

export default reducers;
