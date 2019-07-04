import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Homepage from "./Homepage";
import MajorIndexesDetail from "./MajorIndexes/MajorIndexesDetailPage";
import StockPriceDetail from "./StockPrice/StockPriceDetailPage";
import DiscountCashFlowDetail from "./DiscountCashFlow/DiscountCashFlowDetailPage";
import CryptocurrenciesDetail from "./Cryptocurrencies/CryptocurrenciesDetailPage";
import FXDetail from "./ForeignCurrency/FXDetailPage";
import FinancialSummary from "./FinancialSummary";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route
                path="/market-indexes-major-markets"
                exact
                component={MajorIndexesDetail}
              />
              <Route path="/stock-price" exact component={StockPriceDetail} />
              <Route
                path="/discounted-cash-flow"
                exact
                component={DiscountCashFlowDetail}
              />
              <Route
                path="/cryptocurrencies"
                exact
                component={CryptocurrenciesDetail}
              />
              <Route path="/currencies" exact component={FXDetail} />
              <Route
                path="/financial-summary/:code"
                exact
                component={FinancialSummary}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
