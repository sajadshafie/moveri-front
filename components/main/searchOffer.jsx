import React, { useState } from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Search from "../global/search";
const options = [
  { value: "1", label: "Yoga" },
  { value: "2", label: "Surf" },
  { value: "3", label: "Fittness" },
];
const country = [
  { value: "1", label: "Netherland" },
  { value: "2", label: "England" },
  { value: "3", label: "France" },
];
export default function Searchoffer() {
  const [startDate, setStartDate] = useState(new Date());
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <Search
      categoryOneComp={
        <div className="w-100">
          <p className={`m-none ${style.title_item}`}>{t(s + "Sportart")}</p>
          {/* <p className={`m-none ${style.select_item}`}>{t(s + "Yoga")}</p> */}
          <Select className="selec-option" options={options} />
        </div>
      }
      categoryTwoComp={
        <div className="w-100">
          <p className={`m-none ${style.title_item}`}>{t(s + "reiseziel")}</p>
          <Select className="selec-option" options={country} />
        </div>
      }
      categoryThreeComp={
        <div>
          <p className={`m-none ${style.title_item}`}>{t(s + "Sportart")}</p>
          <DatePicker
            className="date-picker-main"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      }
    />
  );
}
