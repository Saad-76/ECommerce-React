import React from "react";
import { createPortal } from "react-dom";

import "../App.css";
import BasicButton from "./BasicButton";

const Modal = ({ heading, closeModal, children }) => {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <div
          className="inner-modal"
          style={{
            width: "50%",
            height: "auto",
            top: "0",
            position: "absolute",
          }}
        >
          <h3>{heading}</h3>
          {children}
          <div className="col-md-12 modal-actions">
            <div className="col-md-6 modal-actions-inner">
              <BasicButton text={`Close`} onClick={closeModal} />
            </div>
            <div className="col-md-6 modal-actions-inner">
              <BasicButton text={`Proceed`} onClick={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
