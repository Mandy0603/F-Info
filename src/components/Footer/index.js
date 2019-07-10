import React from "react";

import "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-text">
          This website is built for pure purpose of practice. All data and UI
          design come from https://financialmodelingprep.com/. All rights
          belongs to
          <span style={{ textDecoration: "underline", paddingLeft: "5px" }}>
            The Financial Modeling Prep Company
          </span>
          .
        </div>

        <div className="footer-copyright">
          Contact Info:
          <span> Yandi Ma </span>
          <span className="footer-email">yandim0317@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Footer;
