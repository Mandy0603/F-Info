import React from "react";

import MajorIndexes from "../MajorIndexes";
import StockPrice from "../StockPrice";
import DiscountCashFlow from "../DiscountCashFlow";
import Cryptocurrencies from "../Cryptocurrencies";
import ForeignCurrency from "../ForeignCurrency";

import "./style.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-upper">
          <MajorIndexes />
        </div>
        <div className="homepage-lower">
          <div className="homepage-quarter">
            <StockPrice />
          </div>
          <div className="homepage-quarter">
            <DiscountCashFlow />
          </div>
          <div className="homepage-quarter">
            <Cryptocurrencies />
          </div>
          <div className="homepage-quarter">
            <ForeignCurrency />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
