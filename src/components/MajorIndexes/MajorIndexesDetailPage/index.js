import React from "react";
import { connect } from "react-redux";

import { fetchIndex } from "../../../store/actions/majorIndex";
import { formatMoney } from "../../../utility";

class MajorIndexesDetailPage extends React.Component {
  state = { isLoading: false };
  componentDidMount() {
    this.fetchDataWhenMounted();
    this.timerID = setInterval(() => {
      this.fetchDataWhenMounted();
    }, 300000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  fetchDataWhenMounted = () => {
    this.setState({ isLoading: true });
    this.props.fetchIndex(() => {
      this.setState({ isLoading: false });
    });
  };

  renderContent = () => {
    if (!this.props.indexes || this.props.indexes.length === 0) return;
    let tbody = [];

    for (let i = 0; i < this.props.indexes.length; i++) {
      const { indexName, price, changes } = this.props.indexes[i];
      tbody.push(
        <tr>
          <th scope="row" className="th-name">
            {indexName}
          </th>
          <td>{"$" + formatMoney(price)}</td>
          <td
            style={{ color: changes >= 0 ? "rgb(4,159,58)" : "rgb(220,54,89)" }}
          >
            {(changes > 0 ? "+" : "") + Number.parseFloat(changes).toFixed(2)}
          </td>
          <td
            style={{ color: changes >= 0 ? "rgb(4,159,58)" : "rgb(220,54,89)" }}
          >
            {(changes >= 0 ? "+" : "") +
              Number.parseFloat((changes / price) * 100).toFixed(2) +
              "%"}
          </td>
        </tr>
      );
    }
    return tbody;
  };

  render() {
    return (
      <div className="index-detail">
        <div className="index-title">Market Indexes</div>
        <div className="index-detail__content">
          <table class="table table-striped">
            <thead>
              <tr>
                <th className="index-detail__th" scope="col">
                  Name
                </th>
                <th className="index-detail__th" scope="col">
                  Price
                </th>
                <th className="index-detail__th" scope="col">
                  Change
                </th>
                <th className="index-detail__th" scope="col">
                  Change(%)
                </th>
              </tr>
            </thead>
            <tbody>{this.renderContent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { indexes: state.majorIndex.majorIndex };
};

export default connect(
  mapStateToProps,
  { fetchIndex }
)(MajorIndexesDetailPage);
