import React from "react";
import Input from "../global/input";
export default function inputNumb({
  arrowSrc = "/checkout/arrow_orange_up.svg",
  disabledMax,
  numberDefault,
  onChange,
  handleArrow,
}) {
  return (
    <Input.inputWithSuffix
      onChange={onChange}
      value={numberDefault}
      suffix={
        <div className={"_arrows"}>
          <button
            disabled={disabledMax && numberDefault >= 15 ? true : false}
            onClick={(e) => handleArrow("up")}
            className={"_arrow_up"}
          >
            <img src={arrowSrc} />
          </button>
          <button
            disabled={numberDefault <= 0 ? true : false}
            onClick={(e) => handleArrow("down")}
            className={"_arrow_down"}
          >
            <img src={arrowSrc} />
          </button>
        </div>
      }
    />
  );
}
