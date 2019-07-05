import React from "react";

import history from "../../../history";

import "../style.scss";

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <div class="navbar-brand" onClick={() => history.push("/")}>
          Financial Info
        </div>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
