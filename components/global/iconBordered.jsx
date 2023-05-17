import React from "react";

export default function IconBordered({
  src = "/checkout/checked.svg",
  borderColor = "#12A3BA",
}) {
  return (
    <div className="icon-bordered" style={{ borderColor: borderColor }}>
      <img src={src} alt="" />
    </div>
  );
}
