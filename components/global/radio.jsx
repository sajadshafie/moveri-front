import React from "react";
import style from "../../styles/radio.module.css";
export default function Radio({ checked, onChange, name }) {
  return (
    <label class={style.container}>
      <input type="radio" checked={checked} name={name} onChange={onChange} />
      <span class={style.checkmark}></span> 
    </label>
  );
}
