import React from "react";
import Card from "../Homepage/Card";
import { connect } from "react-redux";
import { fetchDiscountCard } from "../../store/actions/discount";

class DiscountCashFlow extends React.Component {
  state = { toggle: true };
  componentWillMount() {
    this.props.fetchDiscountCard();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.discountCard !== this.props.discountCard) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
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
