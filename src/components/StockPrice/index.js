import React from "react";
import Card from "../Homepage/Card";
import { connect } from "react-redux";
import { fetchStockPriceCard } from "../../store/actions/stockPriceCard";

class StockPrice extends React.Component {
  state = { toggle: true };
  componentWillMount() {
    this.props.fetchStockPriceCard();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stockPriceForCard) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }

  render() {
    return (
      <div>
        <Card
          type="stockPrice"
          title="Most Searched Stocks"
          contentList={this.props.stockPriceForCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stockPriceForCard: state.stockPriceForCard.pricesForCards };
};

export default connect(
  mapStateToProps,
  { fetchStockPriceCard }
)(StockPrice);
