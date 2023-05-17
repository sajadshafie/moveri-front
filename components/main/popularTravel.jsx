import React from "react";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
import PopularSlider from "../helper/popularSlider";
const data = [
  {
    image: "/main/ppl1.svg",
    title: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwel",
    location: "Oyambre, Spanien",
    date: "Juni - September",
    price: "850",
    count: 143,
    active: 3,
  },
  {
    image: "/main/ppl2.svg",
    title: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwel",
    location: "Oyambre, Spanien",
    date: "Juni - September",
    price: "250",
    count: 190,
    active: 5,
  },
  {
    image: "/main/ppl3.svg",
    title: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwel",
    location: "Oyambre, Spanien",
    date: "Juni - September",
    price: "650",
    count: 142,
    active: 1,
  },
  {
    image: "/main/ppl4.svg",
    title: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwel",
    location: "Oyambre, Spanien",
    date: "Juni - September",
    price: "900",
    count: 900,
    active: 3,
  },
];
export default function PopularTravel() {
  return (
    <div className={style.popular_container}>
      <PopularSlider data={data} />
    </div>
  );
}
