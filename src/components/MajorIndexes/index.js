import React from "react";
import { connect } from "react-redux";

import { fetchIndex } from "../../store/actions/majorIndex";
import history from "../../history";

import "./style.scss";

class MajorIndexes extends React.Component {
  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchIndex(() => {
      this.setState({ isLoading: false });
    });
  }

  jumpToDetailPage = () => {
    history.push("/market-indexes-major-markets");
  };

  renderIndexes = () => {
    if (this.props.majorIndex.length === 0) return;
    let indexList = [];
    for (let i = 0; i < 4; i++) {
      const { indexName, price, changes } = this.props.majorIndex[i];
      const percentage =
        Number.parseFloat((changes / price) * 100).toFixed(2) + "%";
      const textColor = {
        color: changes >= 0 ? "rgb(4,159,58)" : "rgb(220,54,89)"
      };
      indexList.push(
        <div
          key={price}
          className="index-individual"
          onClick={this.jumpToDetailPage}
        >
          <div className="index-individual__upper">
            <div className="index-individual__name">{indexName}</div>
            <div className="index-individual__percentage" style={textColor}>
              {(changes > 0 ? "+" : "") + percentage}
            </div>
          </div>
          <div className="index-individual__lower">
            <div className="index-individual__price">{price} </div>
            <div className="index-individual__separator">{"/"}</div>
            <div className="index-individual__changes" style={textColor}>
              {Number.parseFloat(changes).toFixed(2)}
            </div>
          </div>
        </div>
      );
    }
    return indexList;
  };
  render() {
    return (
      <div className="index">
        <div className="index-title">Major Indexes</div>
        <div className="index-content">{this.renderIndexes()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { majorIndex: state.majorIndex.majorIndex };
};

export default connect(
  mapStateToProps,
  { fetchIndex }
)(MajorIndexes);
