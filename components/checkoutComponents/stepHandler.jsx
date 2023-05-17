import React from "react";
import Button from "../global/button";
import { useTranslation } from "react-i18next";

export default function StepHandler(props) {
  const { t } = useTranslation();
  const s = "common:main.";
  return (
    <div className="space-between my-3">
      <Button
        className="btn-back"
        onClick={() => props.onBack()}
        content={t(s + "prev_step")}
      />
      <Button onClick={() => props.onNext()} content={t(s + "next_step")} />
    </div>
  );
}
