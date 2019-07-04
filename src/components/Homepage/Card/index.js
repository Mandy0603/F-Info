import React from "react";

class Card extends React.Component {
  state = { toggle: true };
  componentWillReceiveProps(nextProps) {
    if (nextProps.contentList) {
      this.setState(prevState => {
        this.state.toggle = !prevState.toggle;
      });
    }
  }
  renderContent = () => {
    if (!this.props.contentList || this.props.contentList.length === 0) return;

    switch (this.props.type) {
      case "stockPrice":
        let contentList = [];
        for (let i = 0; i < 5; i++) {
          const { symbol, price } = this.props.contentList[i];
          contentList.push(
            <div className="table-row">
              <div className="table-image">{symbol}</div>
              <div className="table-name">{price}</div>
            </div>
          );
        }
        return contentList;
      default:
        return;
    }
  };
  render() {
    return (
      <div className="table">
        <div className="table-title">{this.props.title}</div>
        <div className="table-content">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Card;
