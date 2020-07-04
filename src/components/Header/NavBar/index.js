import React from "react";
import { connect } from "react-redux";
import {
  searchStock,
  clearSearchResult
} from "../../../store/actions/searchStock";

import Modal from "../../Modal";
import history from "../../../history";

import "../style.scss";

class NavBar extends React.Component {
  state = { value: "", isLoading: false };
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
    this.setState({ isLoading: true });
    this.props.searchStock(() => {
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }
  handleClickOutside = e => {
    if (!this.node.contains(e.target)) {
      this.setState({ value: "" });
      // this.clearSearchResult();
    }
  };

  clearSearchResult = () => {
    this.setState({ isLoading: true });
    this.props.clearSearchResult(() => {
      this.setState({ isLoading: false });
    });
  };

  renderSearchResult = () => {
    if (
      !this.props.stockList ||
      this.props.stockList.length === 0 ||
      !this.state.value ||
      this.state.value.length < 3
    ) {
      return;
    }

    let searchResultFiltered = this.props.stockList.filter(stock => {
      return (
        stock.symbol.toLowerCase().includes(this.state.value.toLowerCase()) ||
        stock.name.toLowerCase().includes(this.state.value.toLowerCase())
      );
    });
    let searchResult = [];

    for (let i = 0; i < searchResultFiltered.length; i++) {
      const { symbol, name } = searchResultFiltered[i];
      searchResult.push(
        <div
          className="nav-form__option"
          value={`${symbol}`}
          onClick={() => this.onOptionSelected(symbol)}
        >
          <span
            className="nav-form__option-details"
            style={{ fontWeight: 600 }}
          >
            {symbol}
          </span>
          <span className="nav-form__option-details">{"|"}</span>
          <span className="nav-form__option-details">{name}</span>
        </div>
      );
    }
    return searchResult;
  };

  onOptionSelected = symbol => {
    history.push(`/financial-summary/${symbol}`);
    this.setState({ value: "" });
    // this.clearSearchResult();
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    if (this.state.isLoading) {
      return <Modal />;
    }
    return (
      <div className="mynavbar">
        <div className="mynavbar-brand" onClick={() => history.push("/")}>
          Finance Info
        </div>

        <div className="nav-form__input-container">
          <form
            action="."
            className="nav-form"
            onSubmit={e => {
              this.handleFormSubmit(e);
            }}
            ref={node => (this.node = node)}
          >
            <input
              className="nav-form__input"
              type="search"
              value={this.state.value}
              placeholder="Search Stock"
              aria-label="Search"
              list="stockSearchResult"
              onChange={e => {
                this.setState({ value: e.target.value });
              }}
            />
            <div id="stockSearchResult" className="nav-form__result">
              {this.renderSearchResult()}
            </div>
          </form>

          <i class="search icon" />
        </div>
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
