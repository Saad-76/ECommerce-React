import * as React from "react";
import "./style.css";

export default function BasicButton({ text, icon, onClick }) {
  return (
    <button className="basic-btn" onClick={onClick}>
      {icon ? icon : ""}
      {text}
    </button>
  );
}
