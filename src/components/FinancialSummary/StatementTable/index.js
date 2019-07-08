import React from "react";
import { Link } from "react-router-dom";
import { formatMoney } from "../../../utility/index";

import "../style.scss";

class StatementTable extends React.Component {
  renderRows = (financials, index) => {
    const tableHeads = this.props.tableHeads;
    let contentRow = [];
    contentRow.push(<th>{tableHeads[index]}</th>);

    for (let j = 0; j < financials.length; j++) {
      let figureString = financials[j][tableHeads[index]];
      if (figureString.length === 0 || figureString == 0) {
        contentRow.push(<td style={{ fontSize: "12px" }}>{"-"}</td>);
      } else {
        let figure = Number.parseFloat(figureString);
        let figureInMillions =
          Math.abs(figure) >= 1000000 ? figure / 1000000 : figure;
        let figureFormated = formatMoney(figureInMillions);
        contentRow.push(
          <td key={j} style={{ fontSize: "12px" }}>
            {figure >= 1000000 ? figureFormated + "M" : figureFormated}
          </td>
        );
      }
    }

    return contentRow;
  };
  renderContent = content => {
    if (!content) return;
    let tableContent = [];
    for (let i = 0; i < this.props.tableHeads.length; i++) {
      tableContent.push(
        <tr key={i}>{this.renderRows(content.financials, i)}</tr>
      );
    }
    return tableContent;
  };
  renderFirstRow = content => {
    if (!content) return;

    let firstRow = [];
    for (let i = 0; i < content.financials.length; i++) {
      firstRow.push(
        <th key={i} scope="col">
          {content.financials[i].date.slice(0, 4)}
        </th>
      );
    }
    return firstRow;
  };
  render() {
    return (
      <div>
        <div className="statements-title">
          <div>{this.props.title}</div>
          <a href={this.props.url} download className="statements-download">
            <img src={require("../../../assets/icons/csv.png")} />
          </a>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Year</th>
              {this.renderFirstRow(this.props.content)}
            </tr>
          </thead>
          <tbody>{this.renderContent(this.props.content)}</tbody>
        </table>
      </div>
    );
  }
}

export default StatementTable;
