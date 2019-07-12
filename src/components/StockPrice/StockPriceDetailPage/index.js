import React from "react";
import { connect } from "react-redux";

import { fetchIndividualStock } from "../../../store/actions/stockPrice";

class StockPriceDetail extends React.Component {
  state = { isLoading: false };
  onFormSubmit = event => {
    this.setState({ isLoading: true });
    event.preventDefault();
    this.props.fetchIndividualStock(this.state.stock.toUpperCase(), () => {
      this.setState({ isLoading: false });
    });
  };

  renderContent = () => {
    if (!this.props.stock || this.props.stock.length === 0) return;
    if (this.props.error === "Error") {
      return (
        <div style={{ color: "red", padding: "0 1rem" }}>
          No record found. Please check the company code you entered again
        </div>
      );
    } else {
      const { price, companyName, symbol, industry } = this.props.stock;
      return (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Industry</th>
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
                {price}
              </th>
              <th scope="row" className="th-name">
                {industry}
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
    stock: state.stockPriceForCard.individualStock,
    error: state.stockPriceForCard.error
  };
};

export default connect(
  mapStateToProps,
  { fetchIndividualStock }
)(StockPriceDetail);
