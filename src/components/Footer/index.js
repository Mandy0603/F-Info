import React from "react";

import "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur
        </div>

        <div className="footer-copyright">
          © 2019 Copyright:
          <span> Yandi Ma </span>
          <span className="footer-email">yandim0317@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Footer;
