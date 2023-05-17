import React from "react";
import style from "../../styles/checkout.module.css";
import { useTranslation } from "react-i18next";
import ImageSteps from "./imageSteps";
export default function StepCheckout(props) {
  const { t } = useTranslation();
  const s = "common:checkout.";
  const steps = [
    {
      step: "1",
      stepImage: (
        <ImageSteps.step1 fill={"1" <= props.step ? "#FF9F1C" : "#C4C4C4"} />
      ),
      numbImage: "/checkout/1.svg",
      title: t(s + "Accommodation"),
      active: false,
    },
    {
      step: "2",
      stepImage: (
        <ImageSteps.step2 fill={"2" <= props.step ? "#FF9F1C" : "#C4C4C4"} />
      ),
      numbImage: "/checkout/2.svg",
      title: t(s + "Extra Items"),
      active: false,
    },
    {
      step: "3",
      stepImage: (
        <ImageSteps.step3 fill={"3" <= props.step ? "#FF9F1C" : "#C4C4C4"} />
      ),
      numbImage: "/checkout/3.svg",
      title: t(s + "Guests Information"),
      active: false,
    },
    {
      step: "4",
      stepImage: (
        <ImageSteps.step4 fill={"4" <= props.step ? "#FF9F1C" : "#C4C4C4"} />
      ),
      numbImage: "/checkout/4.svg",
      title: t(s + "Payment"),
      active: false,
    },
  ];
  // deactive=#C4C4C4
  // active= #FF9F1C
  return (
    <div className={`${style.step_container} d-flex align-center`}>
      {steps.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <div className={style.step_item}>
              <div className={style.step_image}>
                <div className={style.img_step}>
                  {v.stepImage}
                  <img className={style.numb_step} src={v.numbImage} alt="" />
                </div>
              </div>
              <p
                className={
                  v.step <= props.step
                    ? style.step_title_active
                    : style.step_title
                }
              >
                {v.title}
              </p>
            </div>
            {i !== steps.length - 1 && <div className={style.line_steps}></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
}
