import React from "react";
import { connect } from "react-redux";

import { fetchCurrency } from "../../../store/actions/currency";

class ScrollingBanner extends React.Component {
  state = { toggle: true };
  componentWillMount() {
    this.props.fetchCurrency();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.fxRate !== this.props.fxRate) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }

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
        <div className="banner-content">{this.renderFXRate()}</div>
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
