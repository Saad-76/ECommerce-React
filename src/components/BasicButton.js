import * as React from "react";
import "./style.css";

export default function BasicButton({ text, onClick }) {
  return (
    <button className="basic-btn" onClick={onClick}>
      {text}
    </button>
  );
}
