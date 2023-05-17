import "../styles/globals.css";
import App from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18next";
import "react-datepicker/dist/react-datepicker.css";
import "react-slideshow-image/dist/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}
MyApp.getInitialProps = async (appContext) => {
  const { Component, router, ctx, req, props } = appContext;
  let pageProps = {};
  const query = ctx.query;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, pageProps, query }; // ,
};
export default MyApp;
