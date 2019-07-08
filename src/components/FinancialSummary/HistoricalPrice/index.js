import React from "react";
import { connect } from "react-redux";
// import { TypeChooser } from "react-stockcharts/lib/helper";

import Chart from "./Chart";
import { fetchStockCharts } from "../../../store/actions/stockChart";

import "./style.scss";

class HistoricalPrice extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchStockCharts(this.props.symbol, () => {
      this.setState({ isLoading: false });
    });
  }

  renderChart = () => {
    if (!this.props.stockCharts) {
      return <div className="history-price__spinner-container" />;
    }

    return (
      // <TypeChooser>
      //   {type => <Chart type={type} data={this.props.stockCharts} />}
      // </TypeChooser>

      <Chart type={"svg"} data={this.props.stockCharts} />
    );
  };
  render() {
    return (
      <div className="history-price__container">
        <div id="container" className="history-price__canvas">
          {this.renderChart()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stockCharts: state.stockCharts.stockCharts };
};

export default connect(
  mapStateToProps,
  { fetchStockCharts }
)(HistoricalPrice);
