import React from "react";
import { connect } from "react-redux";

import { fetchCurrency } from "../../../store/actions/currency";
import { formatMoney } from "../../../utility";

class MajorIndexesDetailPage extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.fetchDataWhenMounted();
    this.timerID = setInterval(() => {
      this.fetchDataWhenMounted();
    }, 300000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  fetchDataWhenMounted = () => {
    this.setState({ isLoading: true });
    this.props.fetchCurrency(() => {
      this.setState({ isLoading: false });
    });
  };

  renderContent = () => {
    if (!this.props.currency || this.props.currency.length === 0) return;
    let tbody = [];

    for (let i = 0; i < this.props.currency.length; i++) {
      const { ticker, ask, changes } = this.props.currency[i];
      tbody.push(
        <tr>
          <th scope="row" className="th-name">
            {ticker}
          </th>
          <td>{Number.parseFloat(ask).toFixed(4)}</td>
          <td
            style={{ color: changes >= 0 ? "rgb(4,159,58)" : "rgb(220,54,89)" }}
          >
            {(changes > 0 ? "+" : "") +
              Number.parseFloat(ask - ask / (1 + changes / 100)).toFixed(4)}
          </td>
          <td
            style={{ color: changes >= 0 ? "rgb(4,159,58)" : "rgb(220,54,89)" }}
          >
            {(changes >= 0 ? "+" : "") +
              Number.parseFloat(changes).toFixed(2) +
              "%"}
          </td>
        </tr>
      );
    }
    return tbody;
  };

  render() {
    return (
      <div className="index-detail">
        <div className="index-title">
          World Currencies - Foreign Exchange Rates
        </div>
        <div className="index-detail__content">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Pair</th>
                <th scope="col">Price</th>
                <th scope="col">Change</th>
                <th scope="col">Change(%)</th>
              </tr>
            </thead>
            <tbody>{this.renderContent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currency: state.currency.currency };
};

export default connect(
  mapStateToProps,
  { fetchCurrency }
)(MajorIndexesDetailPage);
