import React from "react";
import { connect } from "react-redux";

import { fetchCurrency } from "../../../store/actions/currency";
import { formatMoney } from "../../../utility";

class MajorIndexesDetailPage extends React.Component {
  state = { toggle: true };
  componentWillMount() {
    this.props.fetchCurrency();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currency !== this.props.currency) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }

  renderContent = () => {
    if (!this.props.currency || this.props.currency.length === 0) return;
    let tbody = [];

    for (let i = 0; i < this.props.currency.length; i++) {
      const { ticker, bid, changes } = this.props.currency[i];
      tbody.push(
        <tr>
          <th scope="row" className="th-name">
            {ticker}
          </th>
          <td>{Number.parseFloat(bid).toFixed(4)}</td>
          <td
            style={{ color: changes >= 0 ? "rgb(4,159,58)" : "rgb(220,54,89)" }}
          >
            {(changes > 0 ? "+" : "") +
              Number.parseFloat(changes / 100).toFixed(4)}
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
