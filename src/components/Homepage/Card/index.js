import React from "react";
import history from "../../../history";

class Card extends React.Component {
  state = { toggle: true };
  componentWillReceiveProps(nextProps) {
    if (nextProps.contentList) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }

  renderStockPriceCard = () => {
    let contentList = [];
    const companyName = [
      "Apple Inc.",
      "Microsoft Corporation",
      "Facebook Inc.",
      "Zynga Inc.",
      "NVIDIA Corporation"
    ];
    for (let i = 0; i < 5; i++) {
      const { symbol, price } = this.props.contentList[i];
      contentList.push(
        <div className="table-row">
          <div className="table-row__left">
            <img
              src={require(`../../../assets/company/${symbol.toLowerCase()}.png`)}
              className="table-icon"
            />
            <div
              className="table-name table-name-price"
              onClick={() => history.push(`/financial-summary/${symbol}`)}
            >
              {companyName[i]}
            </div>
          </div>
          <div className="table-row__right">
            <div className="table-price">{price + "$"}</div>
          </div>
        </div>
      );
    }
    return contentList;
  };

  renderDiscountCard = () => {
    let contentList = [];
    const companyName = [
      "ExlService Holdings Inc.",
      "Gastar Exploration Inc",
      "Histogenics Corporation",
      "EV Energy Partners L.P.",
      "Tintri Inc."
    ];
    for (let i = 0; i < 5; i++) {
      const { symbol, DCF } = this.props.contentList[i];
      contentList.push(
        <div className="table-row">
          <div className="table-row__left">
            <img
              src={require(`../../../assets/company/${symbol.toLowerCase()}.png`)}
              className="table-icon"
            />
            <div
              className="table-name table-name-price"
              onClick={() => history.push(`/financial-summary/${symbol}`)}
            >
              {companyName[i]}
            </div>
          </div>
          <div className="table-row__right">
            <div className="table-price">
              {Number.parseFloat(DCF).toFixed(2) + "$"}
            </div>
          </div>
        </div>
      );
    }
    return contentList;
  };

  renderCryptoCard = () => {
    let contentList = [];
    for (let i = 0; i < 5; i++) {
      const { ticker, price, name, changes } = this.props.contentList[i];
      contentList.push(
        <div className="table-row">
          <div className="table-row__left">
            <img
              src={require(`../../../assets/crypto/${ticker.toLowerCase()}.svg`)}
              className="table-icon"
            />
            <div className="table-name">{name}</div>
          </div>
          <div className="table-row__right">
            <div className="table-price">
              {Number.parseFloat(price).toFixed(2) + "$"}
            </div>
            <div
              className="table-changes"
              style={{
                color: changes > 0 ? "rgb(4,159,58)" : "rgb(220,54,89)"
              }}
            >
              {Number.parseFloat(changes).toFixed(2) + "%"}
            </div>
          </div>
        </div>
      );
    }
    return contentList;
  };

  renderCurrency = () => {
    let contentList = [];
    for (let i = 0; i < 5; i++) {
      const { ticker, bid, changes } = this.props.contentList[i];
      contentList.push(
        <div className="table-row">
          <div className="table-row__left">
            <img
              src={require(`../../../assets/fx/${ticker
                .toLowerCase()
                .replace("/", "")}.png`)}
              className="table-icon"
            />
            <div className="table-name">{ticker}</div>
          </div>
          <div className="table-row__right">
            <div className="table-price">
              {Number.parseFloat(bid).toFixed(2)}
            </div>
            <div
              className="table-changes"
              style={{
                color: changes > 0 ? "rgb(4,159,58)" : "rgb(220,54,89)"
              }}
            >
              {Number.parseFloat(changes).toFixed(2) + "%"}
            </div>
          </div>
        </div>
      );
    }
    return contentList;
  };
  renderContent = () => {
    if (!this.props.contentList || this.props.contentList.length === 0) return;

    switch (this.props.type) {
      case "stockPrice":
        return this.renderStockPriceCard();

      case "discountCashFlow":
        return this.renderDiscountCard();

      case "Cryptocurrency":
        return this.renderCryptoCard();

      case "currency":
        return this.renderCurrency();

      default:
        return;
    }
  };

  pageNav = type => {
    switch (type) {
      case "stockPrice":
        return history.push("/stock-price");
      case "discountCashFlow":
        return history.push("/discounted-cash-flow");
      case "Cryptocurrency":
        return history.push("/cryptocurrencies");
      case "currency":
        return history.push("/currencies");
      default:
        return;
    }
  };
  render() {
    return (
      <div className="table">
        <div
          className="table-title"
          onClick={() => this.pageNav(this.props.type)}
        >
          <div>{this.props.title}</div>
          <div>
            <i class="angle right icon" />
          </div>
        </div>
        <div className="table-content">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Card;
