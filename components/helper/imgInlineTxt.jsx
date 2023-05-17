import React from "react";

export default function ImgInlineTxt({ src, text, classText, classImg }) {
  return (
    <div className="d-flex aling-center">
      <div className={`pr-1 `}>
        <img src={src} alt="" className={classImg} />
      </div>
      <p className={`m-none main-color ${classText}`}>{text}</p>
    </div>
  );
}
