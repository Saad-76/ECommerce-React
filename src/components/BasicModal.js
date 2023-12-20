import React from "react";
import { createPortal } from "react-dom";

import "../App.css";
import BasicButton from "./BasicButton";

const Modal = ({ closeModal }) => {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero.
          Exercitationem quod quam perspiciatis quasi voluptate sint facilis
          quia praesentium pariatur veniam quidem nam, ullam porro eveniet
          molestiae minima eligendi.
        </p>
        <div className="col-md-12 modal-actions">
          <div className="col-md-6 modal-actions-inner" >
            <BasicButton text={`Close`} onClick={closeModal} />
          </div>
          <div className="col-md-6 modal-actions-inner">
            <BasicButton text={`Proceed`} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
