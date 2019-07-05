import React from "react";
import { connect } from "react-redux";

import { fetchIndividualStock } from "../../../store/actions/stockPrice";

class StockPriceDetail extends React.Component {
  state = { stock: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchIndividualStock(this.state.stock.toUpperCase());
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.stock !== this.props.stock) {
      this.renderContent();
    }
  }

  renderContent = () => {
    if (!this.props.stock || this.props.stock.length === 0) return;
    if (this.props.stock.Error) {
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
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Please enter company code</label>
                <input
                  type="text"
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
    stock: state.stockPriceForCard.individualStock
  };
};

export default connect(
  mapStateToProps,
  { fetchIndividualStock }
)(StockPriceDetail);
