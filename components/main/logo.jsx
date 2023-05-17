import React, { useState } from "react";

import SliderDefault from "../helper/sliderDefault";
export default function Logo() {
  const [data, setData] = useState([
    {
      image: "/main/logo1.svg",
    },
    {
      image: "/main/logo2.svg",
    },
    {
      image: "/main/logo3.svg",
    },
    {
      image: "/main/logo4.svg",
    },
    {
      image: "/main/logo5.svg",
    },
    {
      image: "/main/logo6.svg",
    },
  ]);
  return (
    <div>
      <SliderDefault data={data} />
    </div>
  );
}
