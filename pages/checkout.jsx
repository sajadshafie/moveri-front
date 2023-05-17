import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Layout from "./../components/layout/layout";
import checkoutController from "../mobx/controller/checkoutController";
import { useRouter } from "next/router";
import StepCheckout from "../components/checkoutComponents/stepCheckout";
import HeaderCheckout from "./../components/checkoutComponents/headerCheckout";
import InfoAccomodation from "../components/checkoutComponents/accomodation/infoAccomodation";
const controller = new checkoutController();
export default function checkout() {
  const router = useRouter();
  const CheckoutComponents = dynamic(
    () => import(`../components/checkout/checkout${controller.step}`),
    {
      loading: () => <p>...</p>,
    }
  );
  const onNext = () => {
    controller.step += 1;
    console.log(controller.step);
    router.push(`/checkout/${controller.step}`);
  };
  const onBack = () => {
    controller.step -= 1;
    console.log(controller.step);
    router.push(`/checkout/${controller.step}`);
  };
  useEffect(() => {
    controller.step = Number(router.query.step);
  }, []);

  return (
    <Layout>
      <HeaderCheckout />
      <div className="checkout-layout">
        <div style={{ marginRight: "2%" }}>
          <StepCheckout controller={controller} step={controller.step} />
          <CheckoutComponents
            onNext={onNext}
            onBack={onBack}
            controller={controller}
          />
        </div>
        <InfoAccomodation />
      </div>
    </Layout>
  );
}
