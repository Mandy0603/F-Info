import React from "react";
import { connect } from "react-redux";

import IncomeStatement from "./IncomeStatement";
import BalanceSheet from "./BalanceSheet";
import CashFlow from "./CashFlow";
import "./style.scss";

class FinancialSummary extends React.Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-title">Financial Summary</div>
        <div className="summary-general">
          <div className="summary-general__name">Name+Symbol</div>
          <div className="summary-general__sector">Sector</div>
        </div>
        <div className="summary-statements">
          <div className="summary-statements__incomeStatement">
            <IncomeStatement symbol={this.props.match.params.code} />
            <BalanceSheet symbol={this.props.match.params.code} />
            <CashFlow symbol={this.props.match.params.code} />
          </div>
        </div>
      </div>
    );
  }
}

export default FinancialSummary;
