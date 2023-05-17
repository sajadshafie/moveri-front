import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../../styles/checkout.module.css";
import AccomodationsBox from "./accomodationsBox";
import Contact from "./contact";
import Include from "./include";
export default function infoAccomodation() {
  return (
    <div>
      <AccomodationsBox />
      <Contact />
      <Include />
    </div>
  );
}
