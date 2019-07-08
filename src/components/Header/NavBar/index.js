import React from "react";

import history from "../../../history";

import "../style.scss";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand" onClick={() => history.push("/")}>
          Financial Info
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
