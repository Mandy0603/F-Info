import React from "react";
import ReactDOM from "react-dom";
import Spinner from "../Spinner";
import "./style.scss";

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <Spinner />
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
