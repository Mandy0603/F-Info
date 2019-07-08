import React from "react";
import { combineReducers } from "redux";

import indexReducer from "./indexReducer";
import stockPriceCardReducer from "./stockPriceCardReducer";
import discountCardReducer from "./discountCardReducer";
import cryptoReducer from "./cryptoReducer";
import currencyReducer from "./currencyReducer";
import statementReducer from "./statementReducer";
import summaryReducer from "./summaryReducer";
import ratingReducer from "./ratingReducer";
import stockChartsReducer from "./stockChartsReducer";

const reducers = combineReducers({
  majorIndex: indexReducer,
  stockPriceForCard: stockPriceCardReducer,
  discountCard: discountCardReducer,
  crypto: cryptoReducer,
  currency: currencyReducer,
  statements: statementReducer,
  summary: summaryReducer,
  rating: ratingReducer,
  stockCharts: stockChartsReducer
});

export default reducers;
