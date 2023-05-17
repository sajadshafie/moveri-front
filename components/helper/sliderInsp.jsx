// import React from "react";

// export default function SliderDes({ data }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="slider-container">
//       {data.map((v, i) => {
//         return (
//           <div>
//             <img src={v.image} alt="" />
//             <div>
//               <h5>{"Wandern"}</h5>
//               <span>{"14"} offer</span>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import style from "../../styles/main.module.css";
import { useTranslation } from "react-i18next";
const SliderInsp = (props) => {
  const { t } = useTranslation();
  const s = "common:main.";
  const properties = {
    duration: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div style={{ width: "85%", margin: "0 auto", position: "relative" }}>
      <Slide {...properties}>
        {props.data.map((v, i) => {
          return (
            <div key={i} className={style.insp_item}>
              <div className={`${style.col_img} mr-2`}>
                <img className="mb-2" src={v.image1} alt="" />
                <img src={v.image2} alt="" />
              </div>
              <div className={`${style.col_img} mr-2`}>
                <img className="mb-2" src={v.image3} alt="" />
                <img src={v.image4} alt="" />
              </div>
              <div className={`${style.col_img} mr-2`}>
                <img className="mb-2" src={v.image5} alt="" />
                <img src={v.image6} alt="" />
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SliderInsp;
