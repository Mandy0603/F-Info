import React from "react";
import { connect } from "react-redux";
import {
  searchStock,
  clearSearchResult
} from "../../../store/actions/searchStock";

import history from "../../../history";

import "../style.scss";

class NavBar extends React.Component {
  state = { value: "", isLoading: false };
  componentDidMount() {
    document.addEventListener("click", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
  }
  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.onInputBlur();
  };

  handleStockSearch = () => {
    this.setState({ isLoading: true });
    this.props.searchStock(this.state.value, () => {
      this.setState({ isLoading: false });
    });
  };
  clearResult = () => {
    this.setState({ isLoading: true });
    this.props.clearSearchResult(() => {
      this.setState({ isLoading: false });
    });
  };
  onInputBlur = () => {
    this.setState({ value: "" });
    this.clearResult();
  };
  onItemSelected = symbol => {
    history.push(`/financial-summary/${symbol}`);
    this.onInputBlur();
  };
  renderSearchResult = () => {
    if (!this.props.stockList || this.props.stockList.length === 0) return;
    let searchResult = [];
    for (let i = 0; i < this.props.stockList.length; i++) {
      const { symbol, name } = this.props.stockList[i];
      searchResult.push(
        <div
          className="result-container"
          onClick={() => {
            this.onItemSelected(symbol);
          }}
        >
          <div className="result-item result-symbol">{symbol}</div>
          <div className="result-item">{"|"}</div>
          <div className="result-item">{name}</div>
        </div>
      );
    }
    return searchResult;
  };
  onFormSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="mynavbar">
        <div className="mynavbar-brand" onClick={() => history.push("/")}>
          Financial Info
        </div>

        <form
          onSubmit={e => {
            this.onFormSubmit(e);
          }}
          className="nav-form"
          ref={node => (this.node = node)}
        >
          <input
            className="nav-form__input"
            type="search"
            placeholder="Search Stock... e.g. AAPL"
            aria-label="Search"
            value={this.state.value}
            onChange={text => {
              this.setState({ value: text.target.value });
            }}
            onKeyUp={this.handleStockSearch}
          />
          <div className="nav-form__result">{this.renderSearchResult()}</div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { stockList: state.stockSearched.stockList };
};

export default connect(
  mapStateToProps,
  { searchStock, clearSearchResult }
)(NavBar);
