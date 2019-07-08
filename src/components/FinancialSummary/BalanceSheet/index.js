import React from "react";
import { connect } from "react-redux";

import StatementTable from "../StatementTable";
import { fetchBalanceSheet } from "../../../store/actions/statements";

import "../style.scss";

class BalanceSheet extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchBalanceSheet(this.props.symbol, () => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const tableHeads = [
      "Cash and cash equivalents",
      "Short-term investments",
      "Cash and short-term investments",
      "Receivables",
      "Inventories",
      "Total current assets",
      "Property, Plant & Equipment Net",
      "Goodwill and Intangible Assets",
      "Long-term investments",
      "Tax assets",
      "Total non-current assets",
      "Total assets",
      "Payables",
      "Short-term debt",
      "Total current liabilities",
      "Long-term debt",
      "Total debt",
      "Deferred revenue",
      "Tax Liabilities",
      "Deposit Liabilities",
      "Total non-current liabilities",
      "Total liabilities",
      "Other comprehensive income",
      "Retained earnings (deficit)",
      "Total shareholders equity",
      "Investments",
      "Net Debt",
      "Other Assets",
      "Other Liabilities"
    ];
    const URL =
      "https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/" +
      this.props.symbol +
      "?datatype=csv";

    return (
      <div>
        <div>
          <StatementTable
            url={URL}
            title="Balance Sheets"
            content={this.props.balanceSheet}
            tableHeads={tableHeads}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { balanceSheet: state.statements.balanceSheet };
};

export default connect(
  mapStateToProps,
  { fetchBalanceSheet }
)(BalanceSheet);
