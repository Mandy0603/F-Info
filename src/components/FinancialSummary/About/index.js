import React from "react";
import { connect } from "react-redux";

import "../style.scss";

class About extends React.Component {
  state = { isLoading: false };
  componentWillReceiveProps(nextProps) {
    if (nextProps.summary !== this.props.summary) {
      this.setState(prevState => {
        return { isLoading: !prevState.isLoading };
      });
    }
  }
  render() {
    if (!this.props.summary || this.props.summary.length === 0)
      return <div>isLoading</div>;
    const {
      ceo,
      sector,
      industry,
      website,
      exchange,
      description
    } = this.props.summary.profile;
    return (
      <div className="about-container">
        <div className="about-title">About</div>
        <hr />
        <div className="about-content">
          <div className="about-content__upper">
            <div className="about-content__detail">
              <div className="about-content__detail-title">CEO</div>
              <div>{ceo}</div>
            </div>
            <div className="about-content__detail">
              <div className="about-content__detail-title">Sector</div>
              <div>{sector}</div>
            </div>
            <div className="about-content__detail">
              <div className="about-content__detail-title">Industry</div>
              <div>{industry}</div>
            </div>
            <div className="about-content__detail">
              <div className="about-content__detail-title">Website</div>
              <div>{website}</div>
            </div>
            <div className="about-content__detail">
              <div className="about-content__detail-title">Exchange</div>
              <div>{exchange}</div>
            </div>
          </div>
          <div className="about-content__lower">
            <div className="about-content__detail-title">Description</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { summary: state.summary.summary };
};

export default connect(mapStateToProps)(About);
