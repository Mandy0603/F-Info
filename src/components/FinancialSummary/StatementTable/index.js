import React from "react";
import { formatMoney } from "../../../utility/index";

class StatementTable extends React.Component {
  renderRows = (financials, index) => {
    const tableHeads = this.props.tableHeads;
    console.log(financials);
    let contentRow = [];
    contentRow.push(<th>{tableHeads[index]}</th>);
    for (let j = 0; j < financials.length; j++) {
      let figureString = financials[j][tableHeads[index]];
      let figure = Number.parseFloat(figureString);
      let figureInMillions =
        Math.abs(figure) > 1000000 ? figure / 1000000 : figure;
      let figureFormated = formatMoney(figureInMillions);

      contentRow.push(
        <td style={{ fontSize: "12px" }}>
          {figureFormated + (figure > 1000000 ? "M" : "")}
        </td>
      );
    }
    return contentRow;
  };
  renderContent = content => {
    if (!content) return;
    let tableContent = [];
    for (let i = 0; i < this.props.tableHeads.length; i++) {
      tableContent.push(<tr>{this.renderRows(content.financials, i)}</tr>);
    }
    return tableContent;
  };
  render() {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">2018</th>
              <th scope="col">2017</th>
              <th scope="col">2016</th>
              <th scope="col">2015</th>
              <th scope="col">2014</th>
              <th scope="col">2013</th>
              <th scope="col">2012</th>
              <th scope="col">2011</th>
              <th scope="col">2010</th>
              <th scope="col">2009</th>
            </tr>
          </thead>
          <tbody>{this.renderContent(this.props.content)}</tbody>
        </table>
      </div>
    );
  }
}

export default StatementTable;
