import React from "react";
import { connect } from "react-redux";

import StatementTable from "../StatementTable";
import { fetchCashFlow } from "../../../store/actions/statements";

import "../style.scss";

class CashFlow extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchCashFlow(this.props.symbol, () => {
      this.setState({ isLoading: false });
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.symbol !== this.props.symbol) {
      this.setState({ isLoading: true });
      this.props.fetchCashFlow(nextProps.symbol, () => {
        this.setState({ isLoading: false });
      });
    }
  }

  render() {
    const tableHeads = [
      "Depreciation & Amortization",
      "Stock-based compensation",
      "Operating Cash Flow",
      "Capital Expenditure",
      "Acquisitions and disposals",
      "Investment purchases and sales",
      "Investing Cash flow",
      "Issuance (repayment) of debt",
      "Issuance (buybacks) of shares",
      "Dividend payments",
      "Financing Cash Flow",
      "Effect of forex changes on cash",
      "Net cash flow / Change in cash",
      "Free Cash Flow",
      "Net Cash/Marketcap"
    ];
    const URL =
      "https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/" +
      this.props.symbol +
      "?datatype=csv";
    return (
      <div>
        <div>
          <StatementTable
            url={URL}
            content={this.props.cashFlow}
            tableHeads={tableHeads}
            title="Cash Flow Statements"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cashFlow: state.statements.cashFlow };
};

export default connect(
  mapStateToProps,
  { fetchCashFlow }
)(CashFlow);
