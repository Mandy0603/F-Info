import React from "react";
import { connect } from "react-redux";

import IncomeStatement from "./IncomeStatement";
import BalanceSheet from "./BalanceSheet";
import CashFlow from "./CashFlow";
import About from "./About";
import Rating from "./Rating";
import HistoricalPrice from "./HistoricalPrice";
import { fetchSummary } from "../../store/actions/summary";
import "./style.scss";

class FinancialSummary extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchSummary(this.props.match.params.code, () => {
      this.setState({ isLoading: false });
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.code !== this.props.match.params.code) {
      this.setState({ isLoading: true });
      this.props.fetchSummary(nextProps.match.params.code, () => {
        this.setState({ isLoading: false });
      });
    }
  }

  render() {
    const symbol = this.props.match.params.code;

    return (
      <div className="summary">
        <div className="summary-title">Financial Summary</div>
        <div className="summary-general">
          <div className="summary-general__name">
            {!!this.props.summary.profile &&
              this.props.summary.profile.companyName + "(" + symbol + ")"}
          </div>
          <div className="summary-general__sector">
            {!!this.props.summary.profile && this.props.summary.profile.sector}
          </div>
        </div>

        <div className="summary-ratingAndHistoricalPrice">
          <Rating symbol={symbol} />
          <HistoricalPrice symbol={symbol} />
        </div>

        <div className="summary-statements">
          <div className="summary-statements__incomeStatement">
            <IncomeStatement symbol={symbol} />
            <BalanceSheet symbol={symbol} />
            <CashFlow symbol={symbol} />
          </div>
        </div>
        <div className="summary-about">
          <About symbol={symbol} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { summary: state.summary.summary };
};

export default connect(
  mapStateToProps,
  { fetchSummary }
)(FinancialSummary);
