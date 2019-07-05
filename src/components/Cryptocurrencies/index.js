import React from "react";
import Card from "../Homepage/Card";
import { connect } from "react-redux";
import { fetchCryptoCard } from "../../store/actions/cryptocurrency";

class Cryptocurrencies extends React.Component {
  state = { toggle: true };
  componentWillMount() {
    this.props.fetchCryptoCard();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cryptoCard !== this.props.cryptoCard) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }

  render() {
    return (
      <div>
        <Card
          type="Cryptocurrency"
          title="Cryptocurrency"
          contentList={this.props.cryptoCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cryptoCard: state.crypto.cryptoCard };
};

export default connect(
  mapStateToProps,
  { fetchCryptoCard }
)(Cryptocurrencies);
