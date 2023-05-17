import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../../styles/checkout.module.css";
import InputNumb from "../../helper/inputNumb";
import IconBordered from "./../../global/iconBordered";
import TitleSection from "../../helper/titleSection";

export default function ExtrasItemBox({ data, index }) {
  return (
    <div key={index} className={style.accomodations_boxs}>
      <div className={"d-flex "}>
        <div style={{ width: "220px", height: "150px", marginRight: "20 px" }}>
          <img src={data.image} alt="" />
        </div>
        <div className="ml-2 mb-2">
          <div className="d-flex align-center justify-space">
            <TitleSection
              title={data.title}
              className={style.title_box_extras}
            />
            <span>{data.price}</span>
          </div>
          <p>{data.description}</p>
          <div className="d-flex mt-2">
            <InputNumb />
            <IconBordered />
          </div>
        </div>
      </div>
    </div>
  );
}
