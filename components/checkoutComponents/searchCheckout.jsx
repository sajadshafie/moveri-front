import React, { useState } from "react";
import Search from "../global/search";
import style from "../../styles/main.module.css";
import styles from "../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import Select from "react-select";

const options = [
  { value: "1", label: "Yoga" },
  { value: "2", label: "Surf" },
  { value: "3", label: "Fittness" },
];
export default function SearchCheckout() {
  const { t } = useTranslation();
  const s = "common:checkout.";
  const [startDate, setStartDate] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const customStyles = {
    option: (provided, state) => ({
      ...provided,

      color: "#212121",
      padding: 20,
      fontSize: "16px",
      fontWeight: "600",
      after: {
        backgroundColord: "red",
      },
    }),
  };
  return (
    <div>
      <Search
        categoryOneImg="/main/yoga.svg"
        categoryOneComp={
          <div>
            <p className={`m-none ${styles.title_category}`}>
              {t(s + "Check-in")}
            </p>
            <DatePicker
              className="date-picker-main"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        }
        categoryTwoImg="/main/yoga.svg"
        categoryTwoComp={
          <div>
            <p className={`m-none ${styles.title_category}`}>
              {t(s + "Check-out")}
            </p>
            <DatePicker
              className="date-picker-main"
              selected={end}
              onChange={(date) => setEnd(date)}
            />
          </div>
        }
        categoryThreeComp={
          <div className="w-100">
            <p className={`m-none ${styles.title_category}`}>
              {t(s + "Guests")}
            </p>
            {/* <p className={`m-none ${style.select_item}`}>{t(s + "Yoga")}</p> */}
            <Select
              styles={customStyles}
              className="selec-option"
              options={options}
              defaultInputValue={"6 Person"}
            />
          </div>
        }
      />
    </div>
  );
}
