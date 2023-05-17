import React from "react";
import style from "../../styles/main.module.css";
import Stories from "./traveler/storieTravel";
export default function Traveler() {
  return (
    <div className={style.traveler_container}>
      <Stories />
    </div>
  );
}
