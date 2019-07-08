import React from "react";
import Card from "../Homepage/Card";
import { connect } from "react-redux";
import { fetchStockPriceCard } from "../../store/actions/stockPrice";

class StockPrice extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchStockPriceCard(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div>
        <Card
          type="stockPrice"
          title="Search More"
          contentList={this.props.stockPriceForCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stockPriceForCard: state.stockPriceForCard.pricesForCards
  };
};

export default connect(
  mapStateToProps,
  { fetchStockPriceCard }
)(StockPrice);
