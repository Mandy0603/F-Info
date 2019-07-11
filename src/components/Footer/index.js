import React from "react";

import "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-text">
          This website is built for pure purpose of web development practice. No
          commercial use is involved. All data and UI design come from
          https://financialmodelingprep.com/. All rights belong to
          <a
            href="https://financialmodelingprep.com/"
            style={{ textDecoration: "underline", paddingLeft: "5px" }}
          >
            The Financial Modeling Prep Company
          </a>
          .
          <p style={{ padding: "1rem 0" }}>
            All data except for those included in financial summary section will
            be updated every 5 minutes or when manually refreshed.
          </p>
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
