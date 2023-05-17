import React, { useState } from "react";
import style from "../../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import SelectComp from "../../global/select";
import InputNumb from "./../../helper/inputNumb";

export default function PaymantTotalBox() {
  const [startDate, setStartDate] = useState(new Date());
  const [accomodations, setAccomodations] = useState([
    {
      value: "1",
      label: "test",
    },
    {
      value: "2",
      label: "tttttt",
    },
    {
      value: "3",
      label: "dsfdsf",
    },
    {
      value: "4",
      label: "tessssst",
    },
  ]);
  return (
    <div className={style.accomodations_boxs}>
      <DatePicker
        className="input_other_text"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <div className="my-3">
        <SelectComp options={accomodations} />
      </div>
      <div className="mb-3">
        <InputNumb />
      </div>
      <div className="space-between mb-3">
        <span>{"Cancellation Policy"}</span>
        <span className={style.policy_mode}>Free</span>
      </div>
      <div className="space-between">
        <span>Price</span>
        <b className={style.price_policy}>1692€</b>
      </div>
    </div>
  );
}
