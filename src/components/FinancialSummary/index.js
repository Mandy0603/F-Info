import React from "react";
import { connect } from "react-redux";

import "./style.scss";

class FinancialSummary extends React.Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-title">Financial Summary</div>
        <div className="summary-general">
          <div className="summary-general__name">Name</div>
          <div className="summary-general__symbol">Symbol</div>
          <div className="summary-general__sector">Sector</div>
        </div>
        <div className="summary-statements">
          <div className="summary-statements__incomeStatement" />
        </div>
      </div>
    );
  }
}

export default FinancialSummary;
