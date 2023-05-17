import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import SliderDes from "../helper/slider";
const dest = [
  {
    image: "/main/dest0.svg",
    title: "italy",
    offer: "15",
  },
  {
    image: "/main/dest1.svg",
    title: "Russia",
    offer: "15",
  },
  {
    image: "/main/dest2.svg",
    title: "Malasya",
    offer: "15",
  },
  {
    image: "/main/dest3.svg",
    title: "Switzerland",
    offer: "15",
  },
  {
    image: "/main/dest4.svg",
    title: "Netherland",
    offer: "15",
  },
  {
    image: "/main/dest5.svg",
    title: "Germany",
    offer: "15",
    last: true,
  },
];
export default function Destination() {
  return (
    <div className={style.destination_container}>
      <SliderDes data={dest} />
      {/* Erlebe die besondere Art zu Reisen */}
    </div>
  );
}
