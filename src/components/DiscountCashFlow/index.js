import React from "react";
import Card from "../Homepage/Card";
import { connect } from "react-redux";
import { fetchDiscountCard } from "../../store/actions/discount";

class DiscountCashFlow extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchDiscountCard(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div>
        <Card
          type="discountCashFlow"
          title="Discounted Cash Flow"
          contentList={this.props.discountCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { discountCard: state.discountCard.discountCard };
};

export default connect(
  mapStateToProps,
  { fetchDiscountCard }
)(DiscountCashFlow);
