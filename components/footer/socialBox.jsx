import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SocialBox() {
  const [icons, setIcons] = useState([
    {
      image: "/main/Instagram.svg",
    },
    {
      image: "/main/Twitter.svg",
    },
    {
      image: "/main/Linkedin.svg",
    },
    {
      image: "/main/Facebook.svg",
    },
    {
      image: "/main/Youtube.svg",
    },
  ]);
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className="social-container">
      <div>
        <p>{t(s + "Entdecke mehr Storys rund um Sportreisen")}</p>
        {icons.map((v, i) => {
          return <img key={i} src={v.image} alt="" />;
        })}
        <div className="line-footer"></div>
        <p>{t(s + " 2022 moverii. Alle Rechte vorbehalten.")}</p>
      </div>
    </div>
  );
}
