import React from "react";

import "./style.css";

class Spinner extends React.Component {
  render() {
    return (
      <div class="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default Spinner;
