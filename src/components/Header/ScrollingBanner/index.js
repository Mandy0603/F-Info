import React from "react";
import { connect } from "react-redux";

import { fetchFXRate } from "../../../store/actions/banner";

class ScrollingBanner extends React.Component {
  state = { toggle: true };
  componentWillMount() {
    this.props.fetchFXRate();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.fxRate) {
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
            {rate.ask && Number.parseFloat(rate.ask).toFixed(4)}
          </span>
          <span
            className="banner-individual-change"
            style={{
              color: rate.changes > 0 ? "rgb(4,159,58)" : "rgb(220,54,89)"
            }}
          >
            {Number.parseFloat(rate.changes * 100).toFixed(2) + "%"}
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
  return { fxRate: state.fxRate.fxRate };
};

export default connect(
  mapStateToProps,
  { fetchFXRate }
)(ScrollingBanner);
