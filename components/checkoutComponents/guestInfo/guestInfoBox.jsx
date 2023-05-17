import React from "react";
import style from "../../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import ImgInlineTxt from "../../helper/imgInlineTxt";
import Input from "../../global/input";
import SelectComp from "../../global/select";

export default function GuestInfoBox({ title = "Person 1 :" }) {
  const city = [
    { value: "1", label: "Tehran" },
    { value: "2", label: "Shiraz" },
    { value: "3", label: "Munich" },
  ];
  const country = [
    { value: "1", label: "Netherland" },
    { value: "2", label: "England" },
    { value: "3", label: "France" },
  ];
  const { t } = useTranslation();
  const s = "common:checkout.";
  return (
    <div className={style.accomodations_boxs}>
      <div className="mb-2">
        <ImgInlineTxt
          src={"/checkout/person_orange.svg"}
          text={title}
          classText={style.title_info}
          classImg="img-res"
        />
      </div>

      <div className="space-between mb-2">
        <div style={{ flex: "0 0 47%" }}>
          <Input.inputWithSuffix placeholder={t(s + "First Name")} />
        </div>
        <div style={{ flex: "0 0 47%" }}>
          <Input.inputWithSuffix placeholder={t(s + "Surname")} />
        </div>
      </div>
      <div className="space-between mb-2">
        <div style={{ flex: "0 0 47%" }}>
          <Input.inputWithSuffix placeholder={t(s + "Email Adresse")} />
        </div>
        <div style={{ flex: "0 0 47%" }}>
          <Input.inputWithSuffix placeholder={t(s + "Phone Number")} />
        </div>
      </div>
      <p className={style.title_address}>{t(s + "Address")}</p>
      <div className="space-between mb-2">
        <div style={{ flex: "0 0 47%" }}>
          <Input.inputWithSuffix placeholder={t(s + "Street Name & Number")} />
        </div>
        <div style={{ flex: "0 0 47%" }}>
          <Input.inputWithSuffix placeholder={t(s + "Zip Code")} />
        </div>
      </div>
      <div className="space-between mb-2">
        <div style={{ flex: "0 0 47%" }}>
          {/* <Input.inputWithSuffix  /> */}
          <SelectComp options={city} placeholder={t(s + "City")} />
        </div>
        <div style={{ flex: "0 0 47%" }}>
          {/* <Input.inputWithSuffix placeholder=/> */}
          <SelectComp options={country} placeholder={t(s + "Country")} />
        </div>
      </div>
    </div>
  );
}
