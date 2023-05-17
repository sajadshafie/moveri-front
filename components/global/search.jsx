import React, { useState } from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Search({
  categoryOneImg = "/main/yoga.svg",
  categoryOneComp = "",
  categoryTwoImg = "/main/location.svg",
  categoryTwoComp = "",
  categoryThreeImg = "/main/datePicker.svg",
  categoryThreeComp = "",
}) {
  const [startDate, setStartDate] = useState(new Date());
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <section className={style.search_container}>
      <div className={`space-between ${style.category_item}`}>
        <div className="d-flex align-center w-100">
          <img className={style.img_category} src={categoryOneImg} alt="" />
          {categoryOneComp}
        </div>
        {/* <img src="/main/arrow-down.svg" alt="" /> */}
      </div>
      <div className={`space-between ${style.category_item} ml-2 w-100`}>
        <div className="d-flex align-center w-100">
          <img className={style.img_category} src={categoryTwoImg} alt="" />
          {categoryTwoComp}
        </div>
        {/* <img src="/main/arrow-down.svg" alt="" /> */}
      </div>
      <div className={`space-between ${style.category_item_l} ml-2`}>
        <div className="d-flex align-center pr-2">
          <img className={style.img_category} src={categoryThreeImg} alt="" />
          {categoryThreeComp}
        </div>
        <div className={style.search_category}>
          <img src="/main/search_white.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
