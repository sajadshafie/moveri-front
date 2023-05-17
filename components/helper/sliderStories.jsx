import React, { useState } from "react";
import style from "../../styles/main.module.css";

export default function SliderStories() {
  const [slideItem, setSlideItem] = useState([
    {
      image: "/main/stories1.svg",
    },
    {
      image: "/main/stories2.svg",
    },
    {
      image: "/main/stories3.svg",
    },
  ]);
  return (
    <div>
      {slideItem.map((v, i) => {
        const top = i * 40;
        const left = i * 60;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              right: left,
              top: top,
              zIndex: -i + 10,
            }}
          >
            <img className={style.img_stories} src={v.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
