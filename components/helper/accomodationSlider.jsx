import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import style from "../../styles/checkout.module.css";
const AccomodationSlider = (props) => {
  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  const properties = {
    indicators: false,

    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    },
  };

  return (
    <div className="slider-show-all">
      <div className="show-room-action">See all {props.data.length} photos</div>
      <Fade {...properties}>
        {props.data.map((v, i) => {
          return (
            <div key={i} className={style.acc_item_img}>
              <img className="img-responsive-bordered" src={v.image} alt="" />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default AccomodationSlider;
