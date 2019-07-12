import React from "react";
import { connect } from "react-redux";

import { fetchDiscount } from "../../../store/actions/discount";

class DiscountCashFlowDetail extends React.Component {
  state = { isLoading: false };
  onFormSubmit = event => {
    this.setState({ isLoading: true });
    event.preventDefault();
    this.props.fetchDiscount(this.state.stock.toUpperCase(), () => {
      this.setState({ isLoading: false });
    });
  };

  renderContent = () => {
    if (!this.props.value || this.props.value.length === 0) return;
    if (this.props.error === "Error") {
      return (
        <div style={{ color: "red", padding: "0 1rem" }}>
          No record found. Please check the company code you entered again
        </div>
      );
    } else {
      const jsonNew = JSON.parse(
        JSON.stringify(this.props.value).replace(/\s(?=\w+":)/g, "")
      );
      const { StockPrice, companyName, symbol, DCF, date } = jsonNew;
      return (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">DCF</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="th-name">
                {symbol}
              </th>
              <th scope="row" className="th-name">
                {companyName}
              </th>
              <th scope="row" className="th-name">
                {StockPrice}
              </th>
              <th scope="row" className="th-name">
                {Number.parseFloat(DCF).toFixed(2)}
              </th>
              <th scope="row" className="th-name">
                {date}
              </th>
            </tr>
          </tbody>
        </table>
      );
    }
  };

  render() {
    return (
      <div className="index-detail">
        <div className="index-title">Search Stocks</div>
        <div className="index-search">
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form" action=".">
              <div className="field">
                <label>Please enter company code</label>
                <input
                  type="search"
                  value={this.state.stock}
                  onChange={e => {
                    this.setState({ stock: e.target.value });
                  }}
                  placeholder="e.g. search AAPL for Apple Inc."
                />
              </div>
            </form>
          </div>
        </div>

        <div className="index-detail__content">{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.discountCard.discountValue,
    error: state.discountCard.error
  };
};

export default connect(
  mapStateToProps,
  { fetchDiscount }
)(DiscountCashFlowDetail);
