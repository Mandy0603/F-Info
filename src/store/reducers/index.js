import React from "react";
import { combineReducers } from "redux";

import fxReducer from "./fxReducer";
import indexReducer from "./indexReducer";
import stockPriceCardReducer from "./stockPriceCardReducer";

const reducers = combineReducers({
  fxRate: fxReducer,
  majorIndex: indexReducer,
  stockPriceForCard: stockPriceCardReducer
});

export default reducers;
