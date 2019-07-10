import React from "react";
import { connect } from "react-redux";

import { fetchRating } from "../../../store/actions/rating";
import { formatMoney } from "../../../utility";
import "./style.scss";

class Rating extends React.Component {
  state = { isLoading: false, summaryToggle: false };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchRating(this.props.symbol, () => {
      this.setState({ isLoading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.summary !== this.props.summary) {
      this.setState(prevState => {
        return { summaryToggle: !prevState.summaryToggle };
      });
    }
    if (nextProps.symbol !== this.props.symbol) {
      this.setState({ isLoading: true });
      this.props.fetchRating(nextProps.symbol, () => {
        this.setState({ isLoading: false });
      });
    }
  }

  renderStar = () => {
    if (this.props.rating.rating) {
      if (this.props.rating.rating.score.length === 0) return "-";

      const figure = Number.parseFloat(this.props.rating.rating.score);
      let starSet = [];
      for (let i = 0; i < figure; i++) {
        starSet.push(<i key={i} class="star icon" />);
      }
      return starSet;
    }
  };
  render() {
    if (this.props.rating.length === 0 || this.state.isLoading) {
      return <div className="rating-container__empty" />;
    } else {
      return (
        <div className="rating-container">
          <div>
            <div className="rating-general-container">
              <span className="rating-subtitle">Stock Performance Rating:</span>
              <span>{this.renderStar()}</span>
            </div>
            <div className="rating-general-container rating-subcontainer">
              <div>
                <span className="rating-subtitle">Recommendation:</span>
                <span className="rating-recommendation">
                  {(!!this.props.rating.rating &&
                    this.props.rating.rating.recommendation) ||
                    "-"}
                </span>
              </div>
              <div>
                <span className="rating-subtitle">Score:</span>
                <span className="rating-recommendation">
                  {(!!this.props.rating.rating &&
                    this.props.rating.rating.rating) ||
                    "-"}
                </span>
              </div>
            </div>
          </div>
          <div>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Symbol</th>
                  <td>{this.props.symbol.toUpperCase()}</td>
                  <th scope="row">ROE</th>
                  <td>
                    {this.props.rating.roe === "-"
                      ? "-"
                      : (this.props.rating.roe * 100).toFixed(2) + "%"}
                  </td>
                  <td className="detail-rating-recommendation">
                    {this.props.rating.ratingDetails.ROE.recommendation}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>
                    {this.props.rating.price === "-"
                      ? "-"
                      : formatMoney(this.props.rating.price) + "$"}
                  </td>
                  <th scope="row">ROA</th>
                  <td>
                    {this.props.rating.roa === "-"
                      ? "-"
                      : (this.props.rating.roa * 100).toFixed(2) + "%"}
                  </td>
                  <td className="detail-rating-recommendation">
                    {this.props.rating.ratingDetails.ROA.recommendation}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Beta</th>
                  <td>
                    {this.props.rating.beta === "-"
                      ? "-"
                      : Number.parseFloat(this.props.rating.beta).toFixed(2)}
                  </td>
                  <th scope="row">Operating Margin</th>
                  <td>
                    {this.props.rating.opMargin === "-"
                      ? "-"
                      : (this.props.rating.opMargin * 100).toFixed(2) + "%"}
                  </td>
                  <td className="detail-rating-recommendation">{"-"}</td>
                </tr>
                <tr>
                  <th scope="row">Volume Avrg.</th>
                  <td>
                    {this.props.rating.volAvg === "-"
                      ? "-"
                      : (
                          Number.parseFloat(this.props.rating.volAvg) / 1000000
                        ).toFixed(2) + "M"}
                  </td>
                  <th scope="row">Debt / Equity</th>
                  <td>{this.props.rating.de}</td>
                  <td className="detail-rating-recommendation">
                    {this.props.rating.ratingDetails["D/E"].recommendation}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Market Cap</th>
                  <td>
                    {this.props.rating.mktCap === "-"
                      ? "-"
                      : formatMoney(
                          Number.parseFloat(this.props.rating.mktCap) /
                            1000000000
                        ) + "B"}
                  </td>
                  <th scope="row">P/E</th>
                  <td>{this.props.rating.pe}</td>
                  <td className="detail-rating-recommendation">
                    {this.props.rating.ratingDetails["P/E"].recommendation}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Shares (2018)</th>
                  <td>
                    {this.props.rating.shares === "-"
                      ? "-"
                      : formatMoney(
                          Number.parseFloat(this.props.rating.shares) / 1000
                        ) + "K"}
                  </td>
                  <th scope="row">P/B</th>
                  <td>{this.props.rating.pb}</td>
                  <td className="detail-rating-recommendation">
                    {this.props.rating.ratingDetails["P/B"].recommendation}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Last Div</th>
                  <td>{this.props.rating.lastDiv}</td>
                  <th scope="row" />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">Dividend Yield</th>
                  <td>{this.props.rating.dividendYield}</td>
                  <th scope="row" />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    rating: state.rating.rating,
    summary: state.summary.summary
  };
};

export default connect(
  mapStateToProps,
  { fetchRating }
)(Rating);
