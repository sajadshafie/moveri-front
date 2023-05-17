import React from "react";
import style from "../../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import Radio from "./../../global/radio";
export default function RadioBoxPaymant({
  name,
  title,
  description,
  checked,
  onChange,
  onClickBox,
}) {
  const s = "common:checkout.";
  const { t } = useTranslation();
  return (
    <div
      onClick={onClickBox}
      style={{ cursor: "pointer" }}
      className={style.accomodations_boxs}
    >
      <div className="d-flex align-center">
        <Radio name={name} checked={checked} onChange={onChange} />
        <h4 className={"m-none"}>{title}</h4>
      </div>
      <p className="main-color">{description}</p>
    </div>
  );
}
