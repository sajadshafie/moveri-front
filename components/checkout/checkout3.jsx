import React from "react";
import GuestInfoBox from "./../checkoutComponents/guestInfo/guestInfoBox";
import Wishes from "./../checkoutComponents/guestInfo/wishes";
import StepHandler from "./../checkoutComponents/stepHandler";

export default function Checkout3(props) {
  console.log("object");
  return (
    <div className="mt-3">
      <GuestInfoBox />
      <div className="my-3">
        <GuestInfoBox title={"Person 2 :"} />
      </div>
      <Wishes />
      <StepHandler onNext={props.onNext} onBack={props.onBack} />
    </div>
  );
}
