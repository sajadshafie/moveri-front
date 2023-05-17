import React from "react";

export default function TitleSection({ title, className = "title-section" }) {
  return <h3 className={className}>{title}</h3>;
}
