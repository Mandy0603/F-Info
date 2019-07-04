import React from "react";

import NavBar from "./NavBar";
import Banner from "./ScrollingBanner";

class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
      </div>
    );
  }
}

export default Header;
