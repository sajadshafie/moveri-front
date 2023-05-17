import React from "react";

export default function Button({
  content,
  onClick = () => {},
  className = "button-global",
  type,
}) {
  return (
    <button
      style={{ cursor: "pointer" }}
      className={className}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}
