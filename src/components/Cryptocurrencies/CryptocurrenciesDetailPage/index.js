import React from "react";
import { connect } from "react-redux";

import { fetchCryptocurrency } from "../../../store/actions/cryptocurrency";
import { formatMoney } from "../../../utility";

class CryptocurrenciesDetail extends React.Component {
  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchCryptocurrency(() => {
      this.setState({ isLoading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cryptoCurrency !== this.props.cryptoCurrency) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }

  renderContent = () => {
    if (!this.props.cryptoCurrency || this.props.cryptoCurrency.length === 0)
      return;
    let tbody = [];

    for (let i = 0; i < this.props.cryptoCurrency.length; i++) {
      const { ticker, name, price, changes } = this.props.cryptoCurrency[i];
      tbody.push(
        <tr>
          <th scope="row" className="th-name">
            {ticker}
          </th>
          <th scope="row" className="th-name">
            {name}
          </th>
          <td>{Number.parseFloat(price).toFixed(4) + "$"}</td>
          <td
            style={{ color: changes >= 0 ? "rgb(4,159,58)" : "rgb(220,54,89)" }}
          >
            {(changes > 0 ? "+" : "") +
              Number.parseFloat(price - price / (1 + changes / 100)).toFixed(
                4
              ) +
              "$"}
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
        <div className="index-title">All Cryptocurrencies</div>
        <div className="index-detail__content">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Symbol</th>
                <th scope="col">Name</th>

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
  return { cryptoCurrency: state.crypto.cryptoCurrency };
};

export default connect(
  mapStateToProps,
  { fetchCryptocurrency }
)(CryptocurrenciesDetail);
