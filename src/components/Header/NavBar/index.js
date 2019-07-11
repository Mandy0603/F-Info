import React from "react";
import { connect } from "react-redux";
import { searchStock } from "../../../store/actions/searchStock";

import Modal from "../../Modal";
import history from "../../../history";

import "../style.scss";

class NavBar extends React.Component {
  state = { value: "", isLoading: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.searchStock(() => {
      this.setState({ isLoading: false });
    });
  }

  renderSearchResult = () => {
    if (!this.props.stockList || this.props.stockList.length === 0) return;
    let searchResult = [];
    for (let i = 0; i < this.props.stockList.length; i++) {
      const { symbol, name } = this.props.stockList[i];
      searchResult.push(
        <option className="nav-form__option" value={`${symbol}`}>
          {name}
        </option>
      );
    }
    return searchResult;
  };

  handleFormSubmit = e => {
    e.preventDefault();
    history.push(`/financial-summary/${this.state.value}`);
    this.setState({ value: "" });
  };
  render() {
    if (this.state.isLoading) {
      return <Modal />;
    }
    return (
      <div className="mynavbar">
        <div className="mynavbar-brand" onClick={() => history.push("/")}>
          Financial Info
        </div>

        <form
          className="nav-form"
          onSubmit={e => {
            this.handleFormSubmit(e);
          }}
        >
          <input
            className="nav-form__input"
            type="search"
            value={this.state.value}
            placeholder="Search Stock"
            aria-label="Search"
            list="stockSearchResult"
            autoComplete={true}
            onChange={e => {
              this.setState({ value: e.target.value });
            }}
          />
          <datalist id="stockSearchResult" className="nav-form__result">
            {this.renderSearchResult()}
          </datalist>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
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
  { searchStock }
)(NavBar);
