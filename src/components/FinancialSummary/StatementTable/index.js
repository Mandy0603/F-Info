import React from "react";
import { Link } from "react-router-dom";
import { formatMoney } from "../../../utility/index";

import "../style.scss";

class StatementTable extends React.Component {
  state = { yearSelected: 0 };

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
    contentRow.push(<th className="right-headers">{tableHeads[index]}</th>);

    return contentRow;
  };
  renderRowsPhone = (financials, index) => {
    const tableHeads = this.props.tableHeads;
    let contentRow = [];
    contentRow.push(<th>{tableHeads[index]}</th>);

    let figureString = financials[this.state.yearSelected][tableHeads[index]];
    if (figureString.length === 0 || figureString == 0) {
      contentRow.push(<td style={{ fontSize: "12px" }}>{"-"}</td>);
    } else {
      let figure = Number.parseFloat(figureString);
      let figureInMillions =
        Math.abs(figure) >= 1000000 ? figure / 1000000 : figure;
      let figureFormated = formatMoney(figureInMillions);
      contentRow.push(
        <td style={{ fontSize: "12px" }}>
          {figure >= 1000000 ? figureFormated + "M" : figureFormated}
        </td>
      );
    }

    return contentRow;
  };

  renderContentPhone = content => {
    // if (!content || content.financials.length === 0) return;
    let tableContent = [];
    for (let i = 0; i < this.props.tableHeads.length; i++) {
      tableContent.push(
        <tr className="phone-headers" key={i}>
          {this.renderRowsPhone(content.financials, i)}
        </tr>
      );
    }
    return tableContent;
  };

  renderContent = content => {
    // if (!content || content.financials.length === 0) return;
    let tableContent = [];
    for (let i = 0; i < this.props.tableHeads.length; i++) {
      tableContent.push(
        <tr key={i}>{this.renderRows(content.financials, i)}</tr>
      );
    }
    return tableContent;
  };

  onYearSelected = value => {
    this.setState({ yearSelected: value });
  };

  renderYearOptions = content => {
    // if (content.financials.length === 0) return;
    let yearList = [];
    yearList.push(
      <option value={0}>{content.financials[0].date.slice(0, 4)}</option>
    );

    for (let i = 1; i < content.financials.length; i++) {
      let optionContent = content.financials[i].date.slice(0, 4);
      yearList.push(<option value={i}>{optionContent}</option>);
    }
    return yearList;
  };

  renderFirstRowPhone = content => {
    // if (!content) return;

    let firstRow = [];
    firstRow.push(
      <th>
        <select
          class="custom-select custom-select-sm"
          onChange={e => {
            this.onYearSelected(e.target.value);
          }}
        >
          {this.renderYearOptions(content)}
        </select>
      </th>
    );

    return firstRow;
  };
  renderFirstRow = content => {
    // if (!content || content.financials.length === 0) return;

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
    if (!this.props.content || this.props.content.financials.length === 0) {
      return <div />;
    } else {
      return (
        <div>
          <div className="statements-title">
            <div>{this.props.title}</div>
            <a href={this.props.url} download className="statements-download">
              <img src={require("../../../assets/icons/csv.png")} />
            </a>
          </div>
          {/* for laptops */}
          <div className="statements-individual-container__laptop">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col" className="year-container">
                    Year
                  </th>
                  {this.renderFirstRow(this.props.content)}
                  <th scope="col" className="year-container right-headers">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>{this.renderContent(this.props.content)}</tbody>
            </table>
          </div>
          {/* for phones */}
          <div className="statements-individual-container__phone">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col" className="year-container phone-headers">
                    Year
                  </th>
                  {this.renderFirstRowPhone(this.props.content)}
                </tr>
              </thead>
              <tbody>{this.renderContentPhone(this.props.content)}</tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default StatementTable;
