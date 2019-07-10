import React from "react";
import Card from "../Homepage/Card";
import { connect } from "react-redux";
import { fetchCurrencyCard } from "../../store/actions/currency";

class ForeignCurrency extends React.Component {
  state = { isLoading: true };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchCurrencyCard(() => {
      this.setState({ isLoading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyCard !== this.props.currencyCard) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }

  render() {
    return (
      <div>
        <Card
          type="currency"
          title="Currencies"
          contentList={this.props.currencyCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currencyCard: state.currency.currencyCard };
};

export default connect(
  mapStateToProps,
  { fetchCurrencyCard }
)(ForeignCurrency);
