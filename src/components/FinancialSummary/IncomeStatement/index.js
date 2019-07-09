import React from "react";
import { connect } from "react-redux";

import StatementTable from "../StatementTable";
import { fetchIncomeStatement } from "../../../store/actions/statements";

import "../style.scss";

class IncomeStatement extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchIncomeStatement(this.props.symbol, () => {
      this.setState({ isLoading: false });
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.symbol !== this.props.symbol) {
      this.setState({ isLoading: true });
      this.props.fetchIncomeStatement(nextProps.symbol, () => {
        this.setState({ isLoading: false });
      });
    }
  }

  render() {
    const tableHeads = [
      "Revenue",
      "Revenue Growth",
      "Cost of Revenue",
      "Gross Profit",
      "R&D Expenses",
      "SG&A Expense",
      "Operating Expenses",
      "Operating Income",
      "Interest Expense",
      "Earnings before Tax",
      "Income Tax Expense",
      "Net Income - Non-Controlling int",
      "Net Income - Discontinued ops",
      "Net Income",
      "Preferred Dividends",
      "Net Income Com",
      "EPS",
      "EPS Diluted",
      "Weighted Average Shs Out",
      "Weighted Average Shs Out (Dil)",
      "Dividend per Share",
      "Gross Margin",
      "EBITDA Margin",
      "EBIT Margin",
      "Profit Margin",
      "Free Cash Flow margin",
      "EBITDA",
      "EBIT",
      "Consolidated Income",
      "Earnings Before Tax Margin",
      "Net Profit Margin"
    ];
    const URL =
      "https://financialmodelingprep.com/api/v3/financials/income-statement/" +
      this.props.symbol +
      "?datatype=csv";

    return (
      <div className="statements-container">
        <div>
          <StatementTable
            url={URL}
            title="Income Statements"
            content={this.props.incomeStatement}
            tableHeads={tableHeads}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { incomeStatement: state.statements.incomeStatement };
};

export default connect(
  mapStateToProps,
  { fetchIncomeStatement }
)(IncomeStatement);
