import React from "react";
import { connect } from "react-redux";

import history from "../../../history";
import { fetchCurrency } from "../../../store/actions/currency";

class ScrollingBanner extends React.Component {
  state = { isLoading: true };
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

  renderFXRate = () => {
    return this.props.fxRate.map((rate, index) => {
      return (
        <span key={index} className="banner-individual">
          <span className="banner-individual-ticker">{rate.ticker}</span>
          <span className="banner-individual-price">
            {rate.bid && Number.parseFloat(rate.bid).toFixed(4)}
          </span>
          <span
            className="banner-individual-change"
            style={{
              color: rate.changes > 0 ? "rgb(4,159,58)" : "rgb(220,54,89)"
            }}
          >
            {Number.parseFloat(rate.changes).toFixed(2) + "%"}
          </span>
        </span>
      );
    });
  };
  render() {
    return (
      <div className="banner">
        <div
          onClick={() => history.push("/currencies")}
          className="banner-content"
        >
          {this.renderFXRate()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { fxRate: state.currency.currency };
};

export default connect(
  mapStateToProps,
  { fetchCurrency }
)(ScrollingBanner);
